'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Hero() {
  return (
    <section className="hero-nox" id="home">
      <div className="hero-nox-container">
        {/* Left Content */}
        <motion.div 
          className="hero-nox-content"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.p 
            className="hero-greeting"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Hola, somos
          </motion.p>
          
          <motion.h1 
            className="hero-name"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Rivus Innovatio
          </motion.h1>
          
          <motion.h2 
            className="hero-role"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            desarrollo de aplicaciones
          </motion.h2>
          
          <motion.p 
            className="hero-description"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            Transformamos ideas en soluciones digitales innovadoras. 
            Creamos aplicaciones móviles y web que impulsan tu negocio.
          </motion.p>
          
          <motion.div 
            className="hero-buttons"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <a href="https://wa.me/593995085689" className="btn-hire">
              Contrátanos
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
            <a href="#projects" className="btn-resume">
              Ver Proyectos
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/>
              </svg>
            </a>
          </motion.div>
        </motion.div>

        {/* Right - Image & Stats */}
        <motion.div 
          className="hero-nox-visual"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {/* Main Circle with Image */}
          <div className="hero-circle-wrapper">
            {/* Green shape background */}
            <Image 
              src="/icons/download.webp"
              alt="Background shape"
              width={600}
              height={600}
              className="hero-bg-shape"
            />
            <div className="hero-image-circle">
              <Image 
                src="/images/logo/rivus_sinfondo.png"
                alt="Rivus Innovatio"
                width={500}
                height={500}
                className="hero-profile-img"
                priority
              />
            </div>
          </div>

          {/* Stats Cards */}
          <motion.div 
            className="stat-card stat-years"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8 }}
          >
            <h3>3+</h3>
            <p>Años de Experiencia</p>
          </motion.div>

          <motion.div 
            className="stat-card stat-projects"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.9 }}
          >
            <h3>50+</h3>
            <p>Proyectos Completados</p>
          </motion.div>

          <motion.div 
            className="stat-card stat-satisfaction"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.0 }}
          >
            <h3>95%+</h3>
            <p>Satisfacción del Cliente</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
