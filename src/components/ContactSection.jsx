import { SOCIALS } from '../data/socials'

function ContactSection() {
  return (
    <section id="contact" className="section contact-section">
      <h2 className="section-title">Contact</h2>
      <div className="section-divider" />
      <p className="contact-intro">
        Have a project in mind? Let us work together.
      </p>
      <div className="contact-columns">
        <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
          <input type="text" placeholder="Your Name" className="form-input" />
          <input type="email" placeholder="Your Email" className="form-input" />
          <input type="text" placeholder="Subject" className="form-input" />
          <textarea
            placeholder="Your Message"
            className="form-textarea"
            rows={5}
          />
          <button type="submit" className="btn-primary">
            Send Message
          </button>
        </form>
        <div className="connect-section">
          <h3 className="connect-title">Connect with me</h3>
          <div className="connect-links">
            {SOCIALS.map(({ label, url, icon }) => (
              <a key={label} href={url} className="connect-link" target="_blank" rel="noopener noreferrer">
                {icon}
                <span>{label}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
