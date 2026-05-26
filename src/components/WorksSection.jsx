const PROJECTS = [
  {
    title: 'Ester Supermarket Inc. Ecommerce',
    desc: 'A full-featured online store built with Angular, PHP and MySQL Workbench and modern web technologies.',
    tags: ['Angular', 'PHP', 'MySQL'],
    video: '/Demo_Ecommerce.mp4',
  },
  {
    title: 'Victoria Website',
    desc: 'A modern business platform built with HTML, Javascript, and CSS featuring interactive client tools and seamless service showcases.',
    tags: ['HTML', 'JavaScript', 'CSS'],
    video: '/Demo_VSA.mp4',
  },
  {
    title: 'My Portfolio',
    desc: 'A modern personal portfolio website built with React and Python, featuring dynamic project filtering and a responsive layout.',
    tags: ['React', 'Python'],
    video: '/Demo_myportfolio.mp4',
  },
]

function WorksSection() {
  return (
    <section id="works" className="section works-section">
      <h2 className="section-title">Project</h2>
      <br />
      <p className="works-intro">Projects built with creativity, passion, and modern web solutions.</p>
      <div className="works-grid">
        {PROJECTS.map(({ title, desc, tags, video }) => (
          <div key={title} className="work-card">
            <video src={video} autoPlay muted loop playsInline className="work-thumb" />
            <h3 className="work-title">{title}</h3>
            <p className="work-desc">{desc}</p>
            <div className="work-tags">
              {tags.map((tag) => (
                <span key={tag} className="work-tag">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default WorksSection
