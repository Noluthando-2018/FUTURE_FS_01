import { useScrollReveal } from '../../hooks/useScrollReveal';
import { PROJECTS } from '../../data';
import './Projects.css';

function ProjectCard({ project, delay }) {
  const { ref, visible } = useScrollReveal();
  return (
    <div ref={ref} className={`project-card reveal d${delay} ${visible ? 'visible' : ''}`}>
      <div className="project-bar" style={{ background: project.gradient }} />
      <div className="project-body">
        <span className="project-year">{project.year}</span>
        <h3>{project.title}</h3>
        <p className="project-desc">{project.description}</p>
        <div className="project-tags">
          {project.tech.map(t => <span key={t} className="tag tag-accent">{t}</span>)}
        </div>
        <div className="project-links">
          <a href={project.github} target="_blank" rel="noreferrer" className="project-link">
            🐙 View on GitHub
          </a>
          {project.live && (
            <a href={project.live} target="_blank" rel="noreferrer" className="project-link project-link-live">
              ↗ Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const { ref, visible } = useScrollReveal();
  return (
    <section id="projects" className="section">
      <div className="section-inner">
        <div ref={ref} className={`section-header reveal ${visible ? 'visible' : ''}`}>
          <div className="section-label">What I've built</div>
          <h2>Projects</h2>
          <p className="section-sub">Hands-on projects built through coursework and personal exploration.</p>
        </div>
        <div className="projects-grid">
          {PROJECTS.map((p, i) => (
            <ProjectCard key={p.title} project={p} delay={(i % 3) + 1} />
          ))}
          <div className="project-card project-card-ghost">
            <div className="project-body">
              <span className="project-year" style={{ color: 'var(--accent)' }}>Coming Soon</span>
              <h3 style={{ color: 'var(--muted)' }}>More Work in Progress…</h3>
              <p className="project-desc">Stay tuned!</p>
              <div className="project-tags">
                {['React.js', 'Node.js', 'MySQL'].map(t => (
                  <span key={t} className="tag tag-accent">{t}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
