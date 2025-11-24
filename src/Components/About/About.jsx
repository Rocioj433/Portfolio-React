import './About.css'

export default function About() {
  return (
    <section id="about" className="about section">
      <div className="container">
        <h2 className="section-title">Sobre Mí</h2>
        <div className="about-content">
          <div className="about-image slide-in-left">
            <div className="about-image-wrapper">
              <div className="image-icon">👋</div>
            </div>
          </div>
          <div className="about-text slide-in-right">
            <h3>Desarrolladora Frontend</h3>
            <p>
              Desarrolladora web con pasión por crear soluciones innovadoras y funcionales.
              Con experiencia en desarrollo frontend y un poquito de Backend, me dedico a construir aplicaciones
              web de alto rendimiento que mejoren la experiencia del usuario.
            </p>
            <p>
              Me encanta trabajar con tecnologías modernas como React, Node.js, y bases de datos SQL.<br/>
              Siempre estoy aprendiendo y buscando mejorar mis habilidades en el desarrollo web.
            </p>
            <a href="#contact" className="btn btn-primary">
              Conoceme más
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
