import { skillGroups } from '../data/portfolio.js'

function Skills() {
  return (
    <section id="skills" className="section-wrap">
      <div className="section-head">
        <p className="section-kicker">02. Skills</p>
        <h2>실제로 프로젝트에서 다룬 기술을 중심으로 정리했습니다.</h2>
      </div>
      <div className="skill-grid">
        {skillGroups.map((group) => (
          <article key={group.title} className="skill-card">
            <h3>{group.title}</h3>
            <ul>
              {group.items.map((skill) => (
                <li key={skill.name}>
                  <strong>{skill.name}</strong>
                  <span>{skill.description}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Skills
