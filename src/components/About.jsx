import { experience } from '../data/portfolio.js'

function About() {
  return (
    <section id="about" className="section-wrap split-section">
      <div>
        <p className="section-kicker">01. About</p>
        <h2>보이는 화면보다, 그 뒤의 기준을 먼저 봅니다.</h2>
      </div>
      <div className="about-body">
        <p>
          웹 서비스는 사용자가 보는 화면으로 기억되지만, 그 화면이 제대로 동작하기 위해서는 보이지 않는 데이터 흐름과 권한 기준이 먼저 맞아야 한다고 생각합니다.
        </p>
        <p>
          어떤 API가 어떤 데이터를 가져오는지, 본사와 현장 계정이 같은 데이터를 볼 때 어떤 projectId 기준이 필요한지, 반복 조회가 많은 화면은 어떤 방식으로 부하를 줄여야 하는지 고민해왔습니다.
        </p>
        <p>
          DnDn 프로젝트에서는 ESG 대시보드, 기상관제, 중장비 입출차를 담당하며 작업지시·장비·기상·공사일보·인력 데이터가 화면에서 어떻게 연결되어야 하는지 직접 다뤘습니다.
        </p>

        <div className="timeline">
          {experience.map((item) => (
            <article key={item.title} className="timeline-item">
              <span>{item.period}</span>
              <h3>{item.title}</h3>
              <strong>{item.subtitle}</strong>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About
