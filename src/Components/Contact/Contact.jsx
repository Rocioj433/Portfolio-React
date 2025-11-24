import { useState } from 'react'
import './Contact.css'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Aquí iría la lógica para enviar el correo
    console.log('Formulario enviado:', formData)
    setSubmitted(true)
    setFormData({ name: '', email: '', subject: '', message: '' })
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <section id="contact" className="contact section">
      <div className="container">
        <h2 className="section-title">Contacto</h2>
        <div className="contact-content">
          <div className="contact-info fade-in-left">
            <h3>¿Trabajemos juntos?</h3>
            <p>
              Estoy interesado en nuevas oportunidades y proyectos desafiantes.
              Si tienes alguna pregunta o propuesta, no dudes en contactarme.
            </p>

            <div className="contact-methods">
              <div className="contact-method">
                <span className="method-icon">📧</span>
                <div>
                  <h4>Email</h4>
                  <a href="mailto:rocioj433@gmail.com">rocioj433@gmail.com</a>
                </div>
              </div>
              <div className="contact-method">
                <span className="method-icon">💼</span>
                <div>
                  <h4>LinkedIn</h4>
                  <a href="https://www.linkedin.com/in/rocio-sanchez-suarez/" target="_blank" rel="noopener noreferrer">
                    linkedin.com/rocio-sanchez-suarez
                  </a>
                </div>
              </div>
              <div className="contact-method">
                <span className="method-icon">💻</span>
                <div>
                  <h4>GitHub</h4>
                  <a href="https://github.com/Rocioj433" target="_blank" rel="noopener noreferrer">
                    github.com/Rocio
                  </a>
                </div>
              </div>
            </div>
          </div>

          <form className="contact-form fade-in-right" onSubmit={handleSubmit}>
            {submitted && (
              <div className="success-message">
                ✅ ¡Mensaje enviado con éxito! Pronto me pondré en contacto contigo.
              </div>
            )}

            <div className="form-group">
              <label htmlFor="name">Nombre</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Tu nombre"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="tu@email.com"
              />
            </div>

            <div className="form-group">
              <label htmlFor="subject">Asunto</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                placeholder="Asunto del mensaje"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Mensaje</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Escribe tu mensaje aquí..."
              ></textarea>
            </div>

            <button type="submit" className="btn btn-primary btn-submit">
              Enviar Mensaje
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
