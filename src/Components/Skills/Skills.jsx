import './Skills.css'

export default function Skills() {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: ['React', 'JavaScript', 'HTML/CSS','Redux'],
      icon: '🎨'
    },
    {
      title: 'Backend - Aprendizaje',
      skills: ['Node.js', 'Express', 'REST APIs', 'Golang'],
      icon: '⚙️'
    },
    {
      title: 'Bases de Datos',
      skills: ['MongoDB','MySQL', 'Firebase', 'SQL'],
      icon: '📊'
    },
    {
      title: 'Tools & DevOps',
      skills: ['Git', 'Docker', 'GitLab', 'npm/yarn', 'AWS'],
      icon: '🛠️'
    }
  ]

  return (
    <section id="skills" className="skills section">
      <div className="container">
        <h2 className="section-title">Skills</h2>
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-card card fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="skill-header">
                <span className="skill-icon">{category.icon}</span>
                <h3>{category.title}</h3>
              </div>
              <div className="skill-list">
                {category.skills.map((skill, idx) => (
                  <span key={idx} className="badge badge-secondary">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="proficiency-section">
          <h3 className="proficiency-title">Nivel de Experiencia</h3>
          <div className="proficiency-grid">
            <div className="proficiency-item">
              <div className="proficiency-header">
                <span>Frontend</span>
                <span className="proficiency-level">Intermedio</span>
              </div>
              <div className="proficiency-bar">
                <div className="proficiency-fill" style={{ width: '95%' }}></div>
              </div>
            </div>
            <div className="proficiency-item">
              <div className="proficiency-header">
                <span>Backend</span>
                <span className="proficiency-level">Basico</span>
              </div>
              <div className="proficiency-bar">
                <div className="proficiency-fill" style={{ width: '90%' }}></div>
              </div>
            </div>
            <div className="proficiency-item">
              <div className="proficiency-header">
                <span>Bases de Datos</span>
                <span className="proficiency-level">Basico</span>
              </div>
              <div className="proficiency-bar">
                <div className="proficiency-fill" style={{ width: '80%' }}></div>
              </div>
            </div>
            <div className="proficiency-item">
              <div className="proficiency-header">
                <span>DevOps</span>
                <span className="proficiency-level">Basico</span>
              </div>
              <div className="proficiency-bar">
                <div className="proficiency-fill" style={{ width: '75%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
