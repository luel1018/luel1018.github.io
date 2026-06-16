import { projects } from '../data/portfolio.js'

function ProjectLinks({ links }) {
  if (!links?.length) return null

  return (
    <div className="project-links">
      {links.map((link) => (
        <a key={link.href} href={link.href} target="_blank" rel="noreferrer">
          {link.label}
        </a>
      ))}
    </div>
  )
}

function Projects() {
  return (
    <section id="projects" className="section-wrap projects-section">
      <div className="section-head">
        <p className="section-kicker">03. Projects</p>
        <h2>기능 설명보다, 문제와 선택 기준이 보이게 정리했습니다.</h2>
      </div>

      <div className="projects-list">
        {projects.map((project) => (
          <article key={project.id} className={`project-case project-${project.id}`}>
            <div className="project-top">
              <div>
                <span className="project-order">{project.order}</span>
                <p className="project-label">{project.label} · {project.period}</p>
                <h3>{project.name}</h3>
                <h4>{project.title}</h4>
                <p className="project-summary">{project.summary}</p>
                <p className="project-role">담당/경험: {project.role}</p>
                <ProjectLinks links={project.links} />
              </div>
              <div className="project-visual">
                <img src={project.image} alt={project.imageAlt} loading="lazy" />
              </div>
            </div>

            <div className="metric-row">
              {project.metrics.map((metric) => (
                <div key={metric.label} className="metric-card">
                  <span>{metric.label}</span>
                  <strong>{metric.value}</strong>
                  <small>{metric.detail}</small>
                </div>
              ))}
            </div>

            <div className="stack-list" aria-label={`${project.name} 기술 스택`}>
              {project.stack.map((stack) => (
                <span key={stack}>{stack}</span>
              ))}
            </div>

            <div className="project-content-grid">
              <div>
                <h5>핵심 포인트</h5>
                <ul className="check-list">
                  {project.highlights.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h5>상세 내용</h5>
                <div className="responsibility-list">
                  {project.responsibilities.map((item) => (
                    <details key={item.title} open={project.id === 'dndn'}>
                      <summary>{item.title}</summary>
                      <p>{item.text}</p>
                    </details>
                  ))}
                </div>
              </div>
            </div>

            {project.gallery && (
              <div className="gallery-row">
                {project.gallery.map((image, index) => (
                  <img key={image} src={image} alt={`${project.name} 자료 ${index + 1}`} loading="lazy" />
                ))}
              </div>
            )}
          </article>
        ))}
      </div>
    </section>
  )
}

export default Projects
