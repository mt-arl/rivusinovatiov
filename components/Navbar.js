import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Navbar(){
  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.6, 0.05, 0.01, 0.9] }}
      className="nav"
    >
      {/* Animated gradient line at bottom */}
      <div className="nav-gradient-line" />
      
      <div className="nav-inner">
        {/* Logo Section - Larger and more visible */}
        <motion.a 
          href="#home"
          className="brand-container"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 400, damping: 20 }}
        >
          <div className="logo-glow-primary" />
          <div className="logo-glow-secondary" />
          <Image 
            src="/images/logo/rivus_sinfondo.png"
            alt="Rivus Innovatio"
            width={130}
            height={130}
            className="logo-img"
            priority
          />
        </motion.a>
        
        {/* Navigation Links - Enhanced */}
        <nav className="nav-links-container">
          <div className="nav-links">
            <motion.a 
              href="#about"
              className="nav-link"
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 500 }}
            >
              <span className="nav-link-text">Nosotros</span>
              <motion.span 
                className="nav-link-indicator"
                whileHover={{ scaleX: 1 }}
              />
            </motion.a>
            
            <motion.a 
              href="#habilidades"
              className="nav-link"
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 500 }}
            >
              <span className="nav-link-text">Habilidades</span>
              <motion.span className="nav-link-indicator" />
            </motion.a>
            
            <motion.a 
              href="#projects"
              className="nav-link"
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 500 }}
            >
              <span className="nav-link-text">Proyectos</span>
              <motion.span className="nav-link-indicator" />
            </motion.a>
            
            <motion.a 
              href="#precios"
              className="nav-link"
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 500 }}
            >
              <span className="nav-link-text">Precios</span>
              <motion.span className="nav-link-indicator" />
            </motion.a>
            
            <motion.a 
              href="#testimonials"
              className="nav-link"
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 500 }}
            >
              <span className="nav-link-text">Testimonios</span>
              <motion.span className="nav-link-indicator" />
            </motion.a>
            
            {/* Premium CTA Button */}
            <motion.a 
              href="#contacto" 
              className="nav-cta"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <span className="cta-bg-shine" />
              <span className="cta-content">
                <span className="cta-text">Contacto</span>
                <motion.span 
                  className="cta-arrow"
                  animate={{ x: [0, 3, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.span>
              </span>
            </motion.a>
          </div>
        </nav>
      </div>
    </motion.header>
  )
}
