import { useState } from 'react';
import axios from 'axios';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { SOCIALS } from '../../data';
import './Contact.css';

export default function Contact() {
  const { ref, visible } = useScrollReveal();
  const [form, setForm]     = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState('idle');
  const [errMsg, setErrMsg] = useState('');

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async e => {
    e.preventDefault();
    setStatus('sending'); setErrMsg('');
    try {
      await axios.post('/api/contact', form);
      setStatus('success');
      setForm({ name: '', email: '', subject: '', message: '' });
    } catch (err) {
      setStatus('error');
      setErrMsg(err.response?.data?.message || 'Something went wrong. Please try again.');
    }
  };

  return (
    <section id="contact" className="section">
      <div className="section-inner">
        <div ref={ref} className={`section-header reveal ${visible ? 'visible' : ''}`}>
          <div className="section-label">Let's connect</div>
          <h2>Get In Touch</h2>
          <p className="section-sub">If you have an internship opportunity, a project idea, or just want to say hi, my inbox is open.</p>
        </div>

        <div className="contact-grid">
          <div className="contact-info">
            <h3>I'm open to opportunities</h3>
            <p>I'm actively looking for an internship or opportunity where I can be part of a real team, work on meaningful projects, and keep growing. If that sounds like you or your company, let's talk.</p>
            <div className="contact-links">
              {SOCIALS.map(s => (
                <a key={s.href} href={s.href}
                  target={s.href.startsWith('http') ? '_blank' : undefined}
                  rel="noreferrer" className="contact-link">
                  <div className="contact-link-icon">{s.icon}</div>
                  <span className="contact-link-label">{s.label}</span>
                  <span className="contact-link-arrow">→</span>
                </a>
              ))}
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input id="name" name="name" type="text" placeholder="Jane Smith"
                  value={form.name} onChange={handleChange} required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input id="email" name="email" type="email" placeholder="jane@company.com"
                  value={form.email} onChange={handleChange} required />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input id="subject" name="subject" type="text" placeholder="Internship Opportunity at…"
                value={form.subject} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows={5}
                placeholder="Hi Noluthando, I came across your portfolio and…"
                value={form.message} onChange={handleChange} required />
            </div>

            <button type="submit" className="btn-send" disabled={status === 'sending'}>
              {status === 'sending' ? <><span className="spinner" /> Sending…</> : 'Send Message →'}
            </button>

            {status === 'success' && <div className="form-alert form-success">✓ Message sent! I'll get back to you soon.</div>}
            {status === 'error'   && <div className="form-alert form-error">✕ {errMsg}</div>}
          </form>
        </div>
      </div>
    </section>
  );
}
