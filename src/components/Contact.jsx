import { activityNotes, profile } from '../data/portfolio.js'

function Contact() {
  const emailReady = profile.email && !profile.email.includes('입력')

  return (
    <section id="contact" className="section-wrap contact-section">
      <div>
        <p className="section-kicker">05. Contact</p>
        <h2>기능이 서비스 안에서 이어지는 방식을 고민합니다.</h2>
        <p>
          프로젝트의 결과뿐 아니라, 왜 그렇게 설계했고 어떤 문제가 있었는지까지 설명할 수 있는 개발자가 되고 싶습니다.
        </p>
      </div>
      <div className="contact-card">
        <ul className="activity-list">
          {activityNotes.map((note) => (
            <li key={note}>{note}</li>
          ))}
        </ul>
        <div className="contact-links">
          <a href={profile.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
          {emailReady ? (
            <a href={`mailto:${profile.email}`}>Mail</a>
          ) : (
            <span>Mail 주소 추가 예정</span>
          )}
        </div>
      </div>
    </section>
  )
}

export default Contact
