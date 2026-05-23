function HomeSection() {
  return (
    <section id="home" className="section home-section">
      <div className="home-grid">
        <div className="home-text">
          <h1 className="home-name">Julie Ann Carpio</h1>
          <p className="home-tagline">
            Full-stack developer crafting elegant digital experiences
          </p>
          <p className="home-desc">
            I build modern web applications with a focus on design, performance,
            and user experience.
          </p>
          <div className="home-actions">
            <button
              className="btn-primary"
              onClick={() =>
                document
                  .getElementById('works')
                  ?.scrollIntoView({ behavior: 'smooth' })
              }
            >
              View my work
            </button>
            <button
              className="btn-secondary"
              onClick={() =>
                document
                  .getElementById('contact')
                  ?.scrollIntoView({ behavior: 'smooth' })
              }
            >
              Get in touch
            </button>
          </div>
        </div>
        <div className="home-image">
          <img src="/Home_Julie.jpg" alt="Julie Ann Carpio" className="hero-img" />
        </div>
      </div>
    </section>
  )
}

export default HomeSection
