import { profile } from '../data/portfolio.js'

function Hero() {
  return (
    <section id="top" className="hero section-wrap">
      <div className="hero-copy">
        <p className="eyebrow">{profile.shortRole}</p>
        <h1>{profile.headline}</h1>
        <p className="hero-summary">{profile.summary}</p>
        <div className="hero-actions">
          <a className="button primary" href="#projects">
            프로젝트 보기
          </a>
          <a className="button ghost" href={profile.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
        </div>
      </div>

      <aside className="hero-panel" aria-label="핵심 경험 요약">
        <div className="panel-line">
          <span>Focus</span>
          <strong>Data Flow</strong>
        </div>
        <div className="panel-line">
          <span>Main</span>
          <strong>DnDn</strong>
        </div>
        <div className="panel-line">
          <span>Keywords</span>
          <strong>Redis · ESG · Weather · Gate</strong>
        </div>
        <p>
          작업지시와 현장 데이터를 기준으로 기상관제, 중장비 입출차, ESG 대시보드가 같은 흐름에서 동작하도록 정리했습니다.
        </p>
      </aside>
    </section>
  )
}

export default Hero
