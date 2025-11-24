import './Experience.css'

export default function Experience() {
  const experiences = [
    {
      title: 'Junior Frontend Developer',
      company: 'MKT Baires',
      period: '2023 - Presente',
      description: [
        'Mantenimiento de sitio web para 3M',
        'Implementación técnica en backoffice',
        'Manejo de MySQL e implementación con Queries',
        'Trabajo bajo metodología Scrum',
        'Participación en tareas de frontend (React, JS, HTML, CSS),backend (Golang) y backoffice(Symfony)'
      ],
      technologies: ['React', 'Golang', 'Symfony', 'Docker','Gitlab','MySQL']
    },
  ]

  return (
    <section id="experience" className="experience section">
      <div className="container">
        <h2 className="section-title">Experiencia Laboral</h2>
        <div className="experience-timeline">
          {experiences.map((exp, index) => (
            <div key={index} className="experience-item fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="experience-marker"></div>
              <div className="experience-content card">
                <div className="experience-header">
                  <h3 className="experience-title">{exp.title}</h3>
                  <span className="experience-period">{exp.period}</span>
                </div>
                <p className="experience-company">{exp.company}</p>
                <ul className="experience-description">
                  {exp.description.map((desc, idx) => (
                    <li key={idx}>{desc}</li>
                  ))}
                </ul>
                <div className="experience-tech">
                  {exp.technologies.map((tech, idx) => (
                    <span key={idx} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
