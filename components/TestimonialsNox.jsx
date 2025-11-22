'use client'
import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'

const testimonials = [
  {
    name: 'Carlos Mendoza',
    role: 'Senior Engineer',
    company: 'TechStart',
    image: '👨‍💼',
    gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    text: 'Esta agencia digital transformó completamente nuestra presencia online. Su experiencia, creatividad y atención al detalle excedieron todas nuestras expectativas. ¡Altamente recomendamos sus servicios destacados!'
  },
  {
    name: 'María González',
    role: 'Product Manager',
    company: 'RestaurantApp',
    image: '👩‍💼',
    gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    text: 'El equipo demostró profesionalismo excepcional. Desarrollaron nuestra aplicación con una calidad impecable y en tiempo récord. El soporte post-lanzamiento ha sido fantástico.'
  },
  {
    name: 'Diego Ramírez',
    role: 'Tech Director',
    company: 'LogisticPro',
    image: '👨‍💻',
    gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    text: 'Trabajar con este equipo fue una experiencia increíble. Su enfoque estratégico y conocimiento técnico hicieron que nuestro proyecto fuera un éxito rotundo.'
  }
]

export default function TestimonialsNox() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [direction, setDirection] = useState(0)

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1)
      setActiveIndex((prev) => (prev + 1) % testimonials.length)
    }, 6000)
    return () => clearInterval(interval)
  }, [])

  const handleDotClick = (index) => {
    setDirection(index > activeIndex ? 1 : -1)
    setActiveIndex(index)
  }

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0,
      scale: 0.9,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction) => ({
      x: direction > 0 ? -100 : 100,
      opacity: 0,
      scale: 0.9,
    }),
  }

  return (
    <section className="testimonials-nox" id="testimonials">
      {/* Animated background */}
      <div className="testimonials-nox-bg">
        <div className="nox-bg-orb nox-orb-1"></div>
        <div className="nox-bg-orb nox-orb-2"></div>
        <div className="nox-bg-mesh"></div>
      </div>

      <div className="testimonials-nox-container">
        {/* Left - Header */}
        <motion.div 
          className="testimonials-left"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div 
            className="tagline-modern"
            animate={{ 
              scale: [1, 1.05, 1],
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
            }}
          >
            <div className="tagline-glow"></div>
            <span>Testimonios</span>
          </motion.div>
          
          <h2 className="testimonials-title-nox">
            Nuestros Clientes <span className="highlight-green">Testimonios Increíbles</span>
          </h2>
          
          {/* Rating Box */}
          <motion.div 
            className="rating-box"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <motion.div 
              className="rating-number"
              animate={{ 
                scale: [1, 1.1, 1],
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                repeatDelay: 1,
              }}
            >
              4.8
            </motion.div>
            <div className="rating-info">
              <div className="stars">
                {[...Array(5)].map((_, i) => (
                  <motion.svg 
                    key={i} 
                    viewBox="0 0 24 24" 
                    fill="#cddc39"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.1 }}
                    whileHover={{ 
                      scale: 1.3,
                      rotate: 360,
                      transition: { duration: 0.3 }
                    }}
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </motion.svg>
                ))}
              </div>
              <p>1200+ Calificaciones de Clientes</p>
            </div>
            
            {/* Floating badge */}
            <motion.div 
              className="verified-badge"
              animate={{ 
                y: [-5, 5, -5],
                rotate: [-2, 2, -2],
              }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
              }}
            >
              ✓ Verificado
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Right - Testimonial Cards */}
        <motion.div 
          className="testimonials-right"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="testimonial-card-wrapper">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={activeIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.3 },
                }}
                className="testimonial-card-nox active"
                style={{
                  '--card-gradient': testimonials[activeIndex].gradient,
                }}
              >
                {/* Animated background shapes */}
                <div className="card-shapes">
                  {[...Array(3)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="shape"
                      animate={{
                        scale: [1, 1.2, 1],
                        rotate: [0, 180, 360],
                        opacity: [0.3, 0.5, 0.3],
                      }}
                      transition={{
                        duration: 8 + i * 2,
                        repeat: Infinity,
                        delay: i * 0.5,
                      }}
                    />
                  ))}
                </div>

                {/* Quote icon */}
                <motion.div 
                  className="quote-marks"
                  animate={{ 
                    rotate: [0, 5, 0, -5, 0],
                  }}
                  transition={{ 
                    duration: 4,
                    repeat: Infinity,
                  }}
                >
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z"/>
                  </svg>
                </motion.div>

                {/* Content */}
                <p className="testimonial-text-nox">{testimonials[activeIndex].text}</p>

                {/* Author */}
                <div className="testimonial-author-nox">
                  <motion.div 
                    className="author-avatar-nox"
                    whileHover={{ scale: 1.15, rotate: 10 }}
                  >
                    <span>{testimonials[activeIndex].image}</span>
                    <div className="avatar-glow"></div>
                  </motion.div>
                  <div className="author-info-nox">
                    <h4>{testimonials[activeIndex].name}</h4>
                    <p>{testimonials[activeIndex].role}</p>
                    <span className="company-badge">{testimonials[activeIndex].company}</span>
                  </div>
                </div>

                {/* Decorative corner accent */}
                <div className="card-corner-accent"></div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dots Navigation */}
          <div className="testimonials-dots">
            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                className={`dot-nox ${index === activeIndex ? 'active' : ''}`}
                onClick={() => handleDotClick(index)}
                aria-label={`Testimonio ${index + 1}`}
                whileHover={{ scale: 1.4 }}
                whileTap={{ scale: 0.9 }}
                animate={{
                  scale: index === activeIndex ? [1, 1.2, 1] : 1,
                }}
                transition={{
                  duration: 0.3,
                }}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
