import { navigation, profile } from '../data/portfolio.js'

function Header() {
  return (
    <header className="site-header">
      <a className="brand" href="#top" aria-label="김민규 포트폴리오 홈">
        <span className="brand-mark">M</span>
        <span className="brand-text">{profile.name}</span>
      </a>
      <nav className="nav" aria-label="주요 섹션 이동">
        {navigation.map((item) => (
          <a key={item.href} href={item.href}>
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  )
}

export default Header
