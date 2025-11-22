'use client'
import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'

const testimonials = [
  {
    name: 'Carlos Mendoza',
    position: 'CEO & Fundador',
    company: 'TechStart Ecuador',
    rating: 5,
    image: '👨‍💼',
    color: '#667eea',
    text: 'Rivus Innovatio transformó completamente nuestra presencia digital. Su experiencia, creatividad y atención al detalle superaron todas nuestras expectativas. ¡Recomendamos ampliamente sus servicios!'
  },
  {
    name: 'María González',
    position: 'Gerente de Operaciones',
    company: 'RestaurantApp',
    rating: 5,
    image: '👩‍💼',
    color: '#f093fb',
    text: 'El equipo de Rivus es excepcional. Desarrollaron nuestra app de gestión de restaurantes en tiempo récord y con una calidad impecable. El soporte post-lanzamiento ha sido fantástico.'
  },
  {
    name: 'Diego Ramírez',
    position: 'Director de Tecnología',
    company: 'LogisticPro',
    rating: 5,
    image: '👨‍💻',
    color: '#4facfe',
    text: 'Trabajar con Rivus fue una experiencia increíble. Su enfoque estratégico y conocimiento técnico hicieron que nuestro proyecto de logística fuera un éxito rotundo.'
  },
  {
    name: 'Ana Paredes',
    position: 'Emprendedora',
    company: 'FitLife App',
    rating: 5,
    image: '👩‍🏫',
    color: '#43e97b',
    text: 'Desde el primer contacto, Rivus demostró profesionalismo y compromiso. Crearon una app de fitness que nuestros usuarios adoran. El ROI ha sido excepcional.'
  }
]

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  // Auto-rotate testimonials
  useEffect(() => {
    if (!isAutoPlaying) return
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const handleCardClick = (index) => {
    setActiveIndex(index)
    setIsAutoPlaying(false)
  }

  return (
    <section className="testimonials-section" id="testimonials">
      {/* Animated background elements */}
      <div className="testimonials-bg">
        <div className="testimonials-bg-gradient"></div>
        <div className="testimonials-bg-grid"></div>
      </div>

      <div className="testimonials-container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div 
            className="tagline-modern"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="tagline-glow"></div>
            <span>Testimonios</span>
          </motion.div>
          <h2 className="section-title">
            Lo Que Dicen Nuestros <span className="gradient-text">Clientes</span>
          </h2>
          
          <motion.div 
            className="rating-badge"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            whileHover={{ scale: 1.05 }}
          >
            <div className="rating-stars">
              {[...Array(5)].map((_, i) => (
                <motion.svg 
                  key={i} 
                  viewBox="0 0 24 24" 
                  fill="currentColor"
                  initial={{ opacity: 0, rotate: -180 }}
                  whileInView={{ opacity: 1, rotate: 0 }}
                  transition={{ delay: 0.4 + i * 0.1 }}
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </motion.svg>
              ))}
            </div>
            <p className="rating-text">
              <strong>4.9</strong> · 30+ Opiniones de Clientes
            </p>
          </motion.div>
        </motion.div>

        <div className="testimonials-carousel">
          <div className="testimonials-track">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className={`testimonial-card ${index === activeIndex ? 'active' : ''}`}
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ 
                  y: -10,
                  scale: 1.02,
                  transition: { duration: 0.3 }
                }}
                onClick={() => handleCardClick(index)}
                style={{
                  '--card-color': testimonial.color
                }}
              >
                {/* Floating particles effect */}
                <div className="card-particles">
                  {[...Array(3)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="particle"
                      animate={{
                        y: [-20, -60],
                        opacity: [0, 1, 0],
                      }}
                      transition={{
                        duration: 2 + i,
                        repeat: Infinity,
                        delay: i * 0.7,
                      }}
                    />
                  ))}
                </div>

                <div className="testimonial-content">
                  <motion.div 
                    className="quote-icon"
                    whileHover={{ rotate: 180, scale: 1.2 }}
                    transition={{ duration: 0.3 }}
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z"/>
                    </svg>
                  </motion.div>
                  
                  <p className="testimonial-text">{testimonial.text}</p>
                  
                  <div className="testimonial-rating">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <motion.svg 
                        key={i} 
                        viewBox="0 0 24 24" 
                        fill="currentColor"
                        whileHover={{ 
                          scale: 1.3,
                          rotate: 360,
                          transition: { duration: 0.5 }
                        }}
                      >
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                      </motion.svg>
                    ))}
                  </div>
                </div>
                
                <div className="testimonial-author">
                  <motion.div 
                    className="author-avatar"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <span>{testimonial.image}</span>
                    <div className="avatar-ring"></div>
                  </motion.div>
                  <div className="author-info">
                    <h4 className="author-name">{testimonial.name}</h4>
                    <p className="author-position">{testimonial.position}</p>
                    <p className="author-company">{testimonial.company}</p>
                  </div>
                </div>
                
                <div className="card-glow"></div>
                <div className="card-border"></div>
              </motion.div>
            ))}
          </div>
          
          {/* Navigation dots */}
          <div className="carousel-dots">
            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                className={`dot ${index === activeIndex ? 'active' : ''}`}
                onClick={() => handleCardClick(index)}
                aria-label={`Ver testimonio ${index + 1}`}
                whileHover={{ scale: 1.3 }}
                whileTap={{ scale: 0.9 }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
