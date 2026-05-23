const SKILLS = [
  { name: 'React', level: 90 },
  { name: 'JavaScript', level: 90 },
  { name: 'TypeScript', level: 80 },
  { name: 'Node.js', level: 75 },
  { name: 'CSS / Sass', level: 85 },
  { name: 'Python', level: 70 },
  { name: 'Git', level: 85 },
  { name: 'SQL', level: 65 },
]

function SkillsSection() {
  return (
    <section id="skills" className="section skills-section">
      <h2 className="section-title">Skills</h2>
      <div className="section-divider" />
      <div className="skills-grid">
        {SKILLS.map(({ name, level }) => (
          <div key={name} className="skill-card">
            <div className="skill-header">
              <span className="skill-name">{name}</span>
              <span className="skill-level">{level}%</span>
            </div>
            <div className="skill-bar">
              <div
                className="skill-fill"
                style={{ width: `${level}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default SkillsSection
