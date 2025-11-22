import { motion } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import GooeyButton from './GooeyButton'

const projects = [
  {
    id: 1,
    title: 'E-Commerce Pro',
    description: 'Plataforma completa de comercio electrÃ³nico con gestiÃ³n de inventario, pasarela de pagos y sistema de administraciÃ³n.',
    tech: ['React Native', 'Node.js', 'MongoDB'],
    gradient: 'from-lime-400 to-yellow-400',
    image: '/images/screenshot/proyecto1.png',
    link: '#'
  },
  {
    id: 2,
    title: 'FinTech Dashboard',
    description: 'Sistema de gestiÃ³n financiera en tiempo real con anÃ¡lisis predictivo y reportes automÃ¡ticos.',
    tech: ['Next.js', 'PostgreSQL', 'Stripe'],
    gradient: 'from-yellow-300 to-lime-400',
    image: '/images/screenshot/proyecto2.png',
    link: '#'
  },
  {
    id: 3,
    title: 'Health & Fitness',
    description: 'App de seguimiento de salud y ejercicio con IA para recomendaciones personalizadas.',
    tech: ['Flutter', 'Firebase', 'ML Kit'],
    gradient: 'from-lime-500 to-green-400',
    image: '/images/screenshot/proyecto3.png',
    link: '#'
  },
  {
    id: 4,
    title: 'Food Delivery',
    description: 'Plataforma de entrega de comida rÃ¡pida con rastreo en tiempo real y sistema de pedidos inteligente.',
    tech: ['React Native', 'Express', 'Socket.io'],
    gradient: 'from-yellow-400 to-lime-500',
    image: '/images/screenshot/proyecto4.png',
    link: '#'
  }
]

export default function Projects() {
  const scrollRef = useRef(null)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [scrollLeft, setScrollLeft] = useState(0)

  const handleMouseDown = (e) => {
    setIsDragging(true)
    setStartX(e.pageX - scrollRef.current.offsetLeft)
    setScrollLeft(scrollRef.current.scrollLeft)
  }

  const handleMouseLeave = () => {
    setIsDragging(false)
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  const handleMouseMove = (e) => {
    if (!isDragging) return
    e.preventDefault()
    const x = e.pageX - scrollRef.current.offsetLeft
    const walk = (x - startX) * 2 // Velocidad del scroll
    scrollRef.current.scrollLeft = scrollLeft - walk
  }

  return (
    <section id="projects" className="section projects-section">
      <div className="container mx-auto px-4" style={{ maxWidth: '1400px' }}>
        {/* Header Section */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-block mb-4">
            <div className="tagline-modern">
              <div className="tagline-glow"></div>
              <span>Portfolio</span>
            </div>
          </div>
          
          <h2 className="text-5xl lg:text-7xl font-black mb-6" style={{
            background: 'linear-gradient(135deg, #e2e8f0 0%, #6ee7b7 50%, #7dd3fc 100%)',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            color: 'transparent',
            letterSpacing: '-3px',
            lineHeight: '1',
            textShadow: '0 0 80px rgba(110, 231, 183, 0.3)'
          }}>
            Nuestros Proyectos
          </h2>
          
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Transformamos ideas en experiencias digitales excepcionales. 
            Cada proyecto es Ãºnico y estÃ¡ diseÃ±ado para superar las expectativas de nuestros clientes.
          </p>
        </motion.div>

        {/* Projects Carousel */}
        <div className="carousel-container">
          <div 
            className="carousel-wrapper"
            ref={scrollRef}
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseLeave}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
          >
            <div className="carousel-track">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                className="carousel-card"
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
              <div className="project-card-modern">
                {/* Animated Border */}
                <div className="card-border-glow"></div>
                <div className="card-border-animated"></div>
                
                {/* Background Gradient Effect */}
                <div className="card-bg-gradient"></div>
                
                {/* Image Container with advanced effects */}
                <div className="project-image-modern">
                  <div className={`image-content bg-gradient-to-br ${project.gradient}`}>
                    {/* Mesh gradient overlay */}
                    <div className="mesh-overlay"></div>
                    
                    {/* Image placeholder */}
                    <div className="image-placeholder-modern">
                      <div className="placeholder-icon">
                        <div className="icon-ring"></div>
                        <div className="icon-center"></div>
                      </div>
                      <div className="placeholder-text">Image Here</div>
                      <div className="placeholder-path">{project.image}</div>
                    </div>
                  </div>
                  
                  {/* Floating badge */}
                  <div className="floating-badge">
                    <div className="badge-shine"></div>
                    <span>#{project.id.toString().padStart(2, '0')}</span>
                  </div>
                </div>

                {/* Project Content */}
                <div className="project-content-modern">
                  {/* Title with gradient underline */}
                  <div className="title-container">
                    <h3 className="project-title-modern">
                      {project.title}
                    </h3>
                    <div className={`title-underline bg-gradient-to-r ${project.gradient}`}></div>
                  </div>
                  
                  <p className="project-description-modern">
                    {project.description}
                  </p>

                  {/* Tech Stack with glassmorphism */}
                  <div className="tech-stack-modern">
                    {project.tech.map((tech, i) => (
                      <div key={i} className="tech-item-modern">
                        <div className="tech-shine"></div>
                        <span>{tech}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button with magnetic effect */}
                  <div className="cta-container-modern">
                    <a href={project.link} className="cta-modern">
                      <div className="cta-glow"></div>
                      <div className="cta-content">
                        <span>Ver Proyecto</span>
                        <div className="arrow-animated">
                          <span>→</span>
                          <span>→</span>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
                </div>
              </motion.div>
            ))}
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div 
          className="text-center mt-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <a href="#contact" className="btn-main-cta">
            <div className="btn-main-shine"></div>
            <div className="btn-main-content">
              <span>Iniciar tu proyecto</span>
              <span className="btn-main-arrow">→</span>
            </div>
          </a>
        </motion.div>
      </div>

      <style jsx>{`
        @keyframes glow-pulse {
          0%, 100% { opacity: 0.5; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.05); }
        }

        @keyframes border-rotate {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }

        @keyframes shine {
          0% { left: -100%; }
          100% { left: 200%; }
        }

        @keyframes mesh-move {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -30px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }

        /* Tagline Modern */
        .tagline-modern {
          position: relative;
          display: inline-block;
          padding: 0.75rem 2rem;
          background: rgba(110, 231, 183, 0.1);
          border: 1px solid rgba(110, 231, 183, 0.2);
          border-radius: 50px;
          overflow: hidden;
        }

        .tagline-modern span {
          position: relative;
          z-index: 2;
          color: #6ee7b7;
          font-weight: 700;
          font-size: 0.875rem;
          text-transform: uppercase;
          letter-spacing: 2px;
        }

        .tagline-glow {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 100%;
          height: 100%;
          background: radial-gradient(circle, rgba(110, 231, 183, 0.2) 0%, transparent 70%);
          transform: translate(-50%, -50%);
          animation: glow-pulse 3s ease-in-out infinite;
        }

        /* Carousel Container */
        .carousel-container {
          position: relative;
          width: 100%;
          overflow: hidden;
          padding: 2rem 0 3rem;
        }

        .carousel-wrapper {
          position: relative;
          width: 100%;
          overflow-x: auto;
          overflow-y: visible;
          scroll-behavior: auto;
          scrollbar-width: none;
          -ms-overflow-style: none;
          padding: 1rem 0;
          cursor: grab;
          user-select: none;
        }

        .carousel-wrapper:active {
          cursor: grabbing;
          scroll-behavior: auto;
        }

        .carousel-wrapper::-webkit-scrollbar {
          display: none;
        }

        .carousel-track {
          display: flex;
          gap: 2rem;
          padding: 0 2rem;
          width: max-content;
        }

        /* Carousel Card */
        .carousel-card {
          flex-shrink: 0;
          width: 450px;
          scroll-snap-align: center;
        }

        @media (max-width: 768px) {
          .carousel-card {
            width: 320px;
          }
          
          .carousel-track {
            gap: 1.5rem;
            padding: 0 1rem;
          }
        }
        
        .project-card-modern {
          position: relative;
          width: 100%;
          max-width: 600px;
          background: transparent;
          border-radius: 2rem;
          overflow: hidden;
          transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .project-card-modern:hover {
          transform: translateY(-15px);
        }
        
        .card-border-glow {
          position: absolute;
          inset: -2px;
          background: linear-gradient(45deg, #6ee7b7, #4ade80, #86efac, #6ee7b7);
          border-radius: 2rem;
          opacity: 0;
          transition: opacity 0.4s ease;
          z-index: -1;
          filter: blur(20px);
        }
        
        .project-card-modern:hover .card-border-glow {
          opacity: 0.6;
          animation: border-rotate 4s linear infinite;
        }
        
        .card-border-animated {
          position: absolute;
          inset: 0;
          border-radius: 2rem;
          padding: 2px;
          background: linear-gradient(45deg, transparent, rgba(110, 231, 183, 0.5), transparent);
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          opacity: 0;
          transition: opacity 0.4s ease;
        }
        
        .project-card-modern:hover .card-border-animated {
          opacity: 1;
        }
        
        .card-bg-gradient {
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at top right, rgba(110, 231, 183, 0.08), transparent 50%),
                      radial-gradient(circle at bottom left, rgba(125, 211, 252, 0.08), transparent 50%);
          opacity: 0;
          transition: opacity 0.4s ease;
        }
        
        .project-card-modern:hover .card-bg-gradient {
          opacity: 1;
        }
        
        .project-image-modern {
          position: relative;
          width: 100%;
          height: 350px;
          overflow: hidden;
        }
        
        .image-content {
          position: relative;
          width: 100%;
          height: 100%;
          transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .project-card-modern:hover .image-content {
          transform: scale(1.08) rotate(1deg);
        }
        
        .mesh-overlay {
          position: absolute;
          inset: 0;
          background: 
            radial-gradient(circle at 20% 50%, rgba(255, 255, 255, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 80%, rgba(255, 255, 255, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 40% 20%, rgba(255, 255, 255, 0.05) 0%, transparent 50%);
          animation: mesh-move 10s ease-in-out infinite;
        }
        
        .image-placeholder-modern {
          position: absolute;
          inset: 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          background: rgba(0, 0, 0, 0.3);
          backdrop-filter: blur(10px);
          z-index: 2;
        }
        
        .placeholder-icon {
          position: relative;
          width: 80px;
          height: 80px;
          margin-bottom: 1rem;
        }
        
        .icon-ring {
          position: absolute;
          inset: 0;
          border: 3px solid rgba(255, 255, 255, 0.3);
          border-radius: 50%;
          border-top-color: rgba(255, 255, 255, 0.8);
          animation: border-rotate 2s linear infinite;
        }
        
        .icon-center {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 40px;
          height: 40px;
          background: rgba(255, 255, 255, 0.2);
          border-radius: 12px;
          transform: translate(-50%, -50%);
        }
        
        .placeholder-text {
          color: white;
          font-size: 1.25rem;
          font-weight: 700;
          margin-bottom: 0.5rem;
          text-transform: uppercase;
          letter-spacing: 2px;
        }
        
        .placeholder-path {
          color: rgba(255, 255, 255, 0.6);
          font-size: 0.75rem;
          font-family: monospace;
          padding: 0.5rem 1rem;
          background: rgba(0, 0, 0, 0.3);
          border-radius: 8px;
        }
        
        .floating-badge {
          position: absolute;
          top: 1.5rem;
          right: 1.5rem;
          padding: 0.75rem 1.5rem;
          background: rgba(0, 0, 0, 0.8);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 50px;
          color: white;
          font-weight: 800;
          font-size: 1rem;
          z-index: 10;
          overflow: hidden;
          animation: float 3s ease-in-out infinite;
        }
        
        .badge-shine {
          position: absolute;
          top: 0;
          left: -100%;
          width: 50%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
          animation: shine 3s infinite;
        }
        
        .floating-badge span {
          position: relative;
          z-index: 2;
        }
        
        .project-content-modern {
          position: relative;
          padding: 2rem;
          background: transparent;
          backdrop-filter: none;
        }
        
        .title-container {
          margin-bottom: 1rem;
        }
        
        .project-title-modern {
          font-size: 2rem;
          font-weight: 900;
          color: white;
          margin: 0 0 0.5rem 0;
          line-height: 1.2;
          letter-spacing: -1px;
        }
        
        .title-underline {
          height: 4px;
          width: 60px;
          border-radius: 2px;
          transition: width 0.4s ease;
        }
        
        .project-card-modern:hover .title-underline {
          width: 120px;
        }
        
        .project-description-modern {
          color: rgba(209, 213, 219, 0.8);
          font-size: 0.95rem;
          line-height: 1.7;
          margin: 1rem 0;
        }
        
        .tech-stack-modern {
          display: flex;
          flex-wrap: wrap;
          gap: 0.75rem;
          margin: 1.5rem 0;
        }
        
        .tech-item-modern {
          position: relative;
          padding: 0.5rem 1rem;
          background: rgba(110, 231, 183, 0.1);
          border: 1px solid rgba(110, 231, 183, 0.2);
          border-radius: 8px;
          color: #d1fae5;
          font-size: 0.8rem;
          font-weight: 600;
          overflow: hidden;
          transition: all 0.3s ease;
        }
        
        .tech-item-modern:hover {
          background: rgba(110, 231, 183, 0.15);
          border-color: rgba(110, 231, 183, 0.4);
          transform: translateY(-3px);
        }
        
        .tech-shine {
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
          transition: left 0.5s ease;
        }
        
        .tech-item-modern:hover .tech-shine {
          left: 100%;
        }
        
        .tech-item-modern span {
          position: relative;
          z-index: 2;
        }
        
        .cta-container-modern {
          margin-top: 1.5rem;
        }
        
        .cta-modern {
          position: relative;
          display: block;
          text-decoration: none;
          border-radius: 8px;
        }
        
        .cta-glow {
          display: none;
        }
        
        .cta-content {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          padding: 12px 24px;
          background: #6ee7b7;
          color: #000;
          font-weight: 700;
          font-size: 1rem;
          transition: opacity 0.3s ease;
          border-radius: 8px;
        }
        
        .cta-modern:hover .cta-content {
          opacity: 0.9;
        }
        
        .arrow-animated {
          position: relative;
          width: 20px;
          height: 20px;
          overflow: hidden;
        }
        
        .arrow-animated span {
          position: absolute;
          transition: transform 0.3s ease;
        }
        
        .arrow-animated span:first-child {
          transform: translateX(0);
        }
        
        .arrow-animated span:last-child {
          transform: translateX(-30px);
        }
        
        .cta-modern:hover .arrow-animated span:first-child {
          transform: translateX(30px);
        }
        
        .cta-modern:hover .arrow-animated span:last-child {
          transform: translateX(0);
        }
        
        .btn-main-cta {
          position: relative;
          display: inline-flex;
          text-decoration: none;
          padding: 12px 24px;
          border-radius: 8px;
          font-size: 18px;
          font-weight: 700;
          background: #6ee7b7;
          transition: opacity 0.3s ease;
        }
        
        .btn-main-shine {
          display: none;
        }
        
        .btn-main-cta:hover {
          opacity: 0.9;
        }
        
        .btn-main-content {
          display: flex;
          align-items: center;
          gap: 8px;
          position: relative;
          z-index: 2;
          color: #000;
        }
        
        .btn-main-arrow {
          font-size: 20px;
        }
        
        @media (max-width: 768px) {
          .project-title-modern {
            font-size: 1.5rem;
          }
          
          .project-description-modern {
            font-size: 0.875rem;
          }
          
          .project-content-modern {
            padding: 1.5rem;
          }
          
          .project-image-modern {
            height: 280px;
          }
        }
      `}</style>
    </section>
  )
}
