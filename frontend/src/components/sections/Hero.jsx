import { useTypingEffect } from '../../hooks/useTypingEffect';
import { TYPING_WORDS } from '../../data';
import './Hero.css';

export default function Hero() {
  const typed = useTypingEffect(TYPING_WORDS);
  const scrollTo = id => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section className="hero" id="home">
      <div className="hero-orb orb1" />
      <div className="hero-orb orb2" />
      <div className="hero-orb orb3" />

      <div className="hero-inner">
        <div className="hero-content">
          <div className="hero-eyebrow">
            <span className="eyebrow-dot" />
            Open to internship opportunities
          </div>

          <h1 className="hero-name">
            Hi, I'm Noluthando
            <span className="hero-name-outline">Sekhula</span>
          </h1>

          <div className="hero-typing">
            <span className="typing-pre">I'm&nbsp;</span>
            <span className="typing-word">{typed}</span>
            <span className="typing-cursor">|</span>
          </div>

          <p className="hero-desc">
            Third-year Software Engineering student based in Konya, Türkiye — originally from South Africa.
            I got into this field because I liked the idea of <strong>creating something from nothing</strong> — 
            where being creative and logical at the same time isn't a contradiction.
          </p>

          <div className="hero-cta">
            <button className="btn btn-primary" onClick={() => scrollTo('projects')}>See What I've Built →</button>
            <button className="btn btn-outline" onClick={() => scrollTo('contact')}>Let's Connect</button>
            <a href="/Noluthando_CV.pdf" download className="btn btn-ghost">↓ Download CV</a>
          </div>

          <div className="hero-stats">
            <div className="stat">
              <span className="stat-num">3+</span>
              <span className="stat-lbl">Projects</span>
            </div>
            <div className="stat-div" />
            <div className="stat">
              <span className="stat-num">3rd</span>
              <span className="stat-lbl">Year Student</span>
            </div>
            <div className="stat-div" />
            <div className="stat">
              <span className="stat-num">3+</span>
              <span className="stat-lbl">Languages</span>
            </div>
          </div>
        </div>

        <div className="hero-avatar-wrap">
          <div className="hero-avatar">
            <div className="avatar-initials">NVS</div>
          </div>
          <div className="avatar-ring ring1" />
          <div className="avatar-ring ring2" />
          <div className="avatar-badge badge-left">🌍 South Africa</div>
        </div>
      </div>

    
    </section>
  );
}
