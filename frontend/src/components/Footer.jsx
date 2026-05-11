import { SOCIALS } from '../data';
import './Footer.css';

export default function Footer() {
  const year = new Date().getFullYear();
  const scrollTo = id => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-top">
          <div className="footer-brand">
            <span className="footer-logo"><span>N</span>oluthando Sekhula</span>
            <p>Software Engineering student · Konya, Türkiye · Open to internships</p>
          </div>
          <div className="footer-nav">
            <div className="footer-col">
              <span className="footer-heading">Navigate</span>
              {['skills', 'projects', 'about', 'contact'].map(id => (
                <button key={id} onClick={() => scrollTo(id)}>
                  {id.charAt(0).toUpperCase() + id.slice(1)}
                </button>
              ))}
            </div>
            <div className="footer-col">
              <span className="footer-heading">Connect</span>
              {SOCIALS.map(s => (
                <a key={s.href} href={s.href}
                  target={s.href.startsWith('http') ? '_blank' : undefined}
                  rel="noreferrer">
                  {s.icon} {s.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
