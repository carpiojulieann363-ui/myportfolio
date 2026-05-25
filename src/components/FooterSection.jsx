import { SOCIALS } from '../data/socials'
import './FooterSection.css'

function FooterSection() {
  return (
    <footer className="footer-section">
      <div className="footer-brand">
        <span className="footer-logo">JAC.</span>
        <div className="footer-icons">
          {SOCIALS.map(({ label, url, icon }) => (
            <a key={label} href={url} className="footer-icon-link" target="_blank" rel="noopener noreferrer" title={label}>
              {icon}
            </a>
          ))}
        </div>
      </div>
      <p className="footer-copyright">&copy; 2026 Julie Ann B. Carpio. All rights reserved.</p>
    </footer>
  )
}

export default FooterSection
