function AboutSection() {
  return (
    <section id="about" className="section about-section">
      <div className="about-grid">
        <div className="about-content">
          <h2 className="about-title">About Me</h2>
          <br />
          <p className="about-greeting">Hi, I'm Julie Ann B. Carpio</p>
          <p>
            I'm an Information Technology passionate about technology, web
            development, and learning new programming skills. I am currently
            improving my knowledge in frontend using technologies such as
            React.js, Angular, and JavaScript.
          </p>
          <p>
            Currently undergoing my On-the-Job Training (OJT) at <strong>Breighton
            Land Inc.</strong>, where I continue to enhance my skills in system development,
            and programming.
          </p>
          <div className="about-stats">
            <div className="about-stat">
              <span className="about-stat-number">3</span>
              <span className="about-stat-label">PROJECTS BUILT</span>
            </div>
          </div>
        </div>
        <div className="about-images">
          <img src="/Home_Julie.jpg" alt="Julie Ann Carpio" className="about-img" />
        </div>
      </div>
    </section>
  )
}

export default AboutSection
