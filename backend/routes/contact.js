const express   = require('express');
const { body, validationResult } = require('express-validator');
const rateLimit  = require('express-rate-limit');
const pool       = require('../db/connection');
const { sendContactNotification } = require('../middleware/emailService');

const router = express.Router();

const limiter = rateLimit({
  windowMs: 60 * 60 * 1000,
  max: 5,
  message: { success: false, message: 'Too many messages sent. Please try again later.' },
});

const validate = [
  body('name').trim().notEmpty().withMessage('Name is required.').isLength({ max: 150 }),
  body('email').trim().isEmail().withMessage('Valid email required.').normalizeEmail(),
  body('subject').trim().optional().isLength({ max: 255 }),
  body('message').trim()
    .notEmpty().withMessage('Message is required.')
    .isLength({ min: 10, max: 5000 }).withMessage('Message must be 10–5000 characters.'),
];

// POST /api/contact=receive and save a message
router.post('/', limiter, validate, async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ success: false, message: errors.array()[0].msg });
  }

  const { name, email, subject, message } = req.body;
  const ip = req.headers['x-forwarded-for']?.split(',')[0] || req.socket.remoteAddress;

  try {
    const [result] = await pool.execute(
      'INSERT INTO contact_messages (name, email, subject, message, ip_address) VALUES (?, ?, ?, ?, ?)',
      [name, email, subject || null, message, ip]
    );
    console.log(`✅  Message #${result.insertId} saved — from ${name} <${email}>`);

    sendContactNotification({ name, email, subject, message });

    return res.status(201).json({
      success: true,
      message: "Message received! I'll get back to you soon.",
    });
  } catch (err) {
    console.error('❌  Database error:', err.message);
    return res.status(500).json({ success: false, message: 'Server error. Please try again.' });
  }
});

router.get('/', async (_req, res) => {
  try {
    const [rows] = await pool.execute(
      `SELECT id, name, email, subject, message, is_read, created_at
       FROM contact_messages
       ORDER BY created_at DESC
       LIMIT 50`
    );
    return res.json({ success: true, count: rows.length, messages: rows });
  } catch (err) {
    return res.status(500).json({ success: false, message: 'Server error.' });
  }
});

router.patch('/:id/read', async (req, res) => {
  try {
    await pool.execute(
      'UPDATE contact_messages SET is_read = 1 WHERE id = ?',
      [req.params.id]
    );
    return res.json({ success: true });
  } catch (err) {
    return res.status(500).json({ success: false, message: 'Server error.' });
  }
});

module.exports = router;
