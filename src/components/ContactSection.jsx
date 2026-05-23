function ContactSection() {
  return (
    <section id="contact" className="section contact-section">
      <h2 className="section-title">Contact</h2>
      <div className="section-divider" />
      <p className="contact-intro">
        Have a project in mind? Let us work together.
      </p>
      <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
        <div className="form-row">
          <input type="text" placeholder="Your name" className="form-input" />
          <input type="email" placeholder="Your email" className="form-input" />
        </div>
        <textarea
          placeholder="Your message"
          className="form-textarea"
          rows={5}
        />
        <button type="submit" className="btn-primary">
          Send Message
        </button>
      </form>
    </section>
  )
}

export default ContactSection
