import { profile } from '../data/portfolio.js'

function Footer() {
  return (
    <footer className="footer">
      <p>© 2026 {profile.name}. Built with React and Vite.</p>
      <a href="#top">Back to top</a>
    </footer>
  )
}

export default Footer
