const PROJECTS = [
  {
    title: 'Project Alpha',
    desc: 'A modern web application built with React and Node.js',
    tags: ['React', 'Node.js', 'PostgreSQL'],
  },
  {
    title: 'Project Beta',
    desc: 'Real-time dashboard with data visualization',
    tags: ['TypeScript', 'D3.js', 'WebSocket'],
  },
  {
    title: 'Project Gamma',
    desc: 'E-commerce platform with payment integration',
    tags: ['Next.js', 'Stripe', 'Tailwind'],
  },
]

function WorksSection() {
  return (
    <section id="works" className="section works-section">
      <h2 className="section-title">Works</h2>
      <div className="section-divider" />
      <div className="works-grid">
        {PROJECTS.map(({ title, desc, tags }) => (
          <div key={title} className="work-card">
            <div className="work-thumb" />
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
