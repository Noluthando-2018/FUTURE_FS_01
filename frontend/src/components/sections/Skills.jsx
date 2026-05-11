import { useScrollReveal } from '../../hooks/useScrollReveal';
import { SKILLS } from '../../data';
import './Skills.css';

function SkillCard({ skill, delay }) {
  const { ref, visible } = useScrollReveal();
  return (
    <div ref={ref} className={`skill-card reveal d${delay} ${visible ? 'visible' : ''}`}>
      <div className="skill-icon" style={{ background: skill.color }}>{skill.icon}</div>
      <h3>{skill.title}</h3>
      <div className="skill-tags">
        {skill.tags.map(t => <span key={t} className="tag">{t}</span>)}
      </div>
    </div>
  );
}

export default function Skills() {
  const { ref, visible } = useScrollReveal();
  return (
    <section id="skills" className="section surface">
      <div className="section-inner">
        <div ref={ref} className={`section-header reveal ${visible ? 'visible' : ''}`}>
          <div className="section-label">What I work with</div>
          <h2>Technical Skills</h2>
          <p className="section-sub">Technologies and tools I've built with through coursework and hands-on projects.</p>
        </div>
        <div className="skills-grid">
          {SKILLS.map((s, i) => <SkillCard key={s.title} skill={s} delay={(i % 3) + 1} />)}
        </div>
      </div>
    </section>
  );
}
