const nodemailer = require('nodemailer');
require('dotenv').config();

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

async function sendContactNotification({ name, email, subject, message }) {
  try {
    await transporter.sendMail({
      from:    `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
      to:      process.env.EMAIL_TO,
      replyTo: email,
      subject: `📬 New message from ${name}: ${subject || '(no subject)'}`,
      html: `
        <div style="font-family:Arial,sans-serif;max-width:560px;margin:0 auto;
                    background:#0a0a0f;color:#e8e6f0;border-radius:12px;
                    overflow:hidden;border:1px solid rgba(255,255,255,0.08)">
          <div style="background:linear-gradient(135deg,#1a1a24,#111118);
                      padding:24px 28px;border-bottom:1px solid rgba(255,255,255,0.07)">
            <h2 style="margin:0;color:#c8b8ff;font-size:18px">New Portfolio Message</h2>
            <p style="margin:5px 0 0;font-size:12px;color:#7a7890">
              Someone reached out via your portfolio website
            </p>
          </div>
          <div style="padding:24px 28px">
            <p style="margin:0 0 12px">
              <span style="font-size:11px;color:#7a7890;text-transform:uppercase;letter-spacing:.08em">From</span><br/>
              <strong style="color:#e8e6f0">${name}</strong>
            </p>
            <p style="margin:0 0 12px">
              <span style="font-size:11px;color:#7a7890;text-transform:uppercase;letter-spacing:.08em">Email</span><br/>
              <a href="mailto:${email}" style="color:#c8b8ff">${email}</a>
            </p>
            <p style="margin:0 0 12px">
              <span style="font-size:11px;color:#7a7890;text-transform:uppercase;letter-spacing:.08em">Subject</span><br/>
              <span style="color:#e8e6f0">${subject || '(no subject)'}</span>
            </p>
            <div style="margin-top:18px">
              <span style="font-size:11px;color:#7a7890;text-transform:uppercase;letter-spacing:.08em">Message</span>
              <div style="margin-top:8px;background:#1a1a24;border:1px solid rgba(255,255,255,0.07);
                          border-radius:8px;padding:16px;font-size:14px;line-height:1.7;color:#c2bfd8">
                ${message.replace(/\n/g, '<br/>')}
              </div>
            </div>
          </div>
          <div style="padding:16px 28px;background:#111118;
                      border-top:1px solid rgba(255,255,255,0.06);
                      font-size:12px;color:#7a7890">
            Reply directly to this email to respond to ${name}.
          </div>
        </div>`,
    });
    console.log(`📧  Email notification sent → ${process.env.EMAIL_TO}`);
  } catch (err) {
    // Non-fatal — message is already saved to DB
    console.error('📧  Email failed (non-fatal):', err.message);
  }
}

module.exports = { sendContactNotification };
