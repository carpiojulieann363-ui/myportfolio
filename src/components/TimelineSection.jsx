const EVENTS = [
  {
    year: '2024',
    title: 'Senior Developer',
    subtitle: 'Tech Corp',
    desc: 'Led frontend architecture for major product rewrite.',
  },
  {
    year: '2022',
    title: 'Full-Stack Developer',
    subtitle: 'Startup Inc',
    desc: 'Built and shipped the core product from the ground up.',
  },
  {
    year: '2020',
    title: 'Junior Developer',
    subtitle: 'Web Agency',
    desc: 'Developed client websites and internal tools.',
  },
  {
    year: '2019',
    title: 'Computer Science Degree',
    subtitle: 'University',
    desc: 'Graduated with honors in Computer Science.',
  },
]

function TimelineSection() {
  return (
    <section id="timeline" className="section timeline-section">
      <h2 className="section-title">Timeline</h2>
      <div className="section-divider" />
      <div className="timeline">
        {EVENTS.map(({ year, title, subtitle, desc }) => (
          <div key={year + title} className="timeline-item">
            <div className="timeline-dot" />
            <div className="timeline-content">
              <span className="timeline-year">{year}</span>
              <h3 className="timeline-title">{title}</h3>
              <span className="timeline-subtitle">{subtitle}</span>
              <p className="timeline-desc">{desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default TimelineSection
