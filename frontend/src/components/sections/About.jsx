import { useScrollReveal } from '../../hooks/useScrollReveal';
import { DETAILS, LANGUAGES } from '../../data';
import './About.css';

function DetailCard({ detail, delay }) {
  const { ref, visible } = useScrollReveal();
  return (
    <div ref={ref} className={`detail-card reveal d${delay} ${visible ? 'visible' : ''}`}>
      <div className="detail-icon">{detail.icon}</div>
      <div>
        <div className="detail-label">{detail.label}</div>
        <div className="detail-value">{detail.value}</div>
        {detail.sub && <div className="detail-sub">{detail.sub}</div>}
      </div>
    </div>
  );
}

export default function About() {
  const { ref: hRef, visible: hVis } = useScrollReveal();
  const { ref: tRef, visible: tVis } = useScrollReveal();

  return (
    <section id="about" className="section surface">
      <div className="section-inner">
        <div ref={hRef} className={`section-header reveal ${hVis ? 'visible' : ''}`}>
          <div className="section-label">Who I am</div>
          <h2>About Me</h2>
        </div>

        <div className="about-grid">
          <div ref={tRef} className={`about-text reveal ${tVis ? 'visible' : ''}`}>
            <p>
              I'm someone who genuinely enjoys figuring things out. Not just in code but in general.
              I like understanding <strong>how things work</strong>, why they break, and how to make them better.
              That curiosity is probably what led me to Software Engineering in the first place.
            </p>
            <p>
              I'm currently in my third year at Konya Technical University, studying abroad from South Africa.
              Most of my hands-on experience has been through projects — building web systems, working with Docker,
              getting robots to navigate using ROS, and digging into data with Python. What I enjoy most
              is when everything <strong>connects smoothly end-to-end</strong>, the frontend talks to the backend,
              the backend talks to the database, and it all just works.
            </p>
            <p>
              I'm looking for internships or opportunities where I can be part of a team that <strong>builds things that matter</strong>,
              get challenged, and come out the other side genuinely better at what I do.
            </p>

            <div className="languages">
              <h4>Languages</h4>
              <div className="lang-list">
                {LANGUAGES.map(l => (
                  <div key={l.name} className="lang-item">
                    <span className="lang-flag">{l.flag}</span>
                    <div>
                      <span className="lang-name">{l.name}</span>
                      <span className="lang-level" style={{ color: l.color }}>{l.level}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <a href="/Noluthando_CV.pdf" download className="btn-cv">
              ↓ Download Full CV
            </a>
          </div>

          <div className="about-details">
            {DETAILS.map((d, i) => (
              <DetailCard key={d.label} detail={d} delay={(i % 3) + 1} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
