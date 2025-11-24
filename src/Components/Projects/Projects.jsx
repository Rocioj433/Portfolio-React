import './Projects.css'

export default function Projects() {
  const projects = [
    {
      title: 'Rick & Morty - Wiki (React)',
      description: 'archivos de proyecto de wiki de rick&morty con el uso de su api :)',
      image: '🛸',
      technologies: ['React', 'HTML', 'CSS', 'Vercel'],
      link: 'https://rick-and-morty-wiki-reactjs.netlify.app',
      github: 'https://github.com/Rocioj433/Rick-y-Morty-Wiki-React'
    },
    {
      title: 'Web - SPA React',
      description: 'Proyecto: Web React TaskFlow es una aplicación web desarrollada con React que permite al usuario gestionar sus tareas diarias de forma sencilla. La app fue construida como ejercicio frontend trainee/jr para practicar hooks, rutas y componentes reutilizables. En progreso',
      image: '💻',
      technologies: ['React', 'Vercel'],
      link: '#',
      github: '#'
    },
    {
      title: 'ProductManager – Sistema de gestión de productos',
      description: 'ProductManager es una aplicación fullstack diseñada para administrar productos. El backend proporciona una API REST construida en Node.js (Express), mientras que el frontend consume estos endpoints para listar, crear, editar y eliminar productos desde una interfaz intuitiva. La información se almacena en MySQL. Todavia en progreso',
      image: '📝',
      technologies: ['React', 'Express', 'MySQL', 'Vercel'],
      link: '#',
      github: 'https://github.com/Rocioj433/ProductManager-Sistema-de-gesti-n-de-productos-Fullstack-'
    }
  ]

  return (
    <section id="projects" className="projects section">
      <div className="container">
        <h2 className="section-title">Proyectos Destacados</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card card fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="project-image">{project.image}</div>
              <div className="project-header">
                <h3 className="project-title">{project.title}</h3>
              </div>
              <p className="project-description">{project.description}</p>
              <div className="project-tech">
                {project.technologies.map((tech, idx) => (
                  <span key={idx} className="tech-badge">{tech}</span>
                ))}
              </div>
              <div className="project-links">
                <a href={project.link} className="project-link">
                  Ver Demo →
                </a>
                <a href={project.github} className="project-link project-github">
                  GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
