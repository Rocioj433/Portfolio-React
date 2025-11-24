import { useEffect, useState } from 'react'
import './Hero.css'

export default function Hero() {
  const [displayedText, setDisplayedText] = useState('')
  const fullText = 'Frontend Developer'
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (index < fullText.length) {
      const timer = setTimeout(() => {
        setDisplayedText(prev => prev + fullText[index])
        setIndex(index + 1)
      }, 50)
      return () => clearTimeout(timer)
    }
  }, [index])

  return (
    <section id="hero" className="hero">
      <div className="container">
        <div className="hero-content fade-in-up">
          <h1 className="hero-title">
            Hola, soy <span className="gradient-text">Rochi</span>
          </h1>
          <div className="hero-subtitle">
            <span className="typing-text">{displayedText}</span>
            <span className="cursor">|</span>
          </div>
          <p className="hero-description">
            Desarrolladora apasionado por crear soluciones web innovadoras y de alto impacto.
            Especializado en React, Node.js y tecnologías modernas.
          </p>
          <div className="hero-buttons">
            <button className="btn btn-primary" onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}>
              Contactéme
            </button>
            <button className="btn btn-secondary">
              <a href="#projects">Ver Proyectos</a>
            </button>
          </div>
          <div className="hero-social">
            <a href="https://github.com/Rocioj433" target="_blank" rel="noopener noreferrer" className="social-link">
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/rocio-sanchez-suarez/" target="_blank" rel="noopener noreferrer" className="social-link">
              LinkedIn
            </a>
          </div>
        </div>
        <div className="hero-image fade-in-down">
          <div className="image-placeholder">
            <div className="avatar-icon">👩🏻‍💻</div>
          </div>
        </div>
      </div>
    </section>
  )
}
