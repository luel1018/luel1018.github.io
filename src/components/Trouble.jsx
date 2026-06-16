import { troubleCases } from '../data/portfolio.js'

function Trouble() {
  return (
    <section id="trouble" className="section-wrap trouble-section">
      <div className="section-head">
        <p className="section-kicker">04. Trouble Shooting</p>
        <h2>문제 상황, 원인, 해결 방향을 남기는 방식으로 정리했습니다.</h2>
      </div>
      <div className="trouble-grid">
        {troubleCases.map((item) => (
          <article key={item.title} className="trouble-card">
            <span>{item.project}</span>
            <h3>{item.title}</h3>
            <dl>
              <div>
                <dt>문제</dt>
                <dd>{item.problem}</dd>
              </div>
              <div>
                <dt>해결</dt>
                <dd>{item.solution}</dd>
              </div>
              <div>
                <dt>결과</dt>
                <dd>{item.result}</dd>
              </div>
            </dl>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Trouble
