'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function About() {

  return (
    <section className="about-nox" id="about">
      <div className="about-nox-container">
        {/* Left - Image with floating icons */}
        <motion.div 
          className="about-visual-nox"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="about-circle-container">
            {/* Background decorative circle */}
            <div className="about-deco-circle"></div>
            
            {/* Main image circle */}
            <div className="about-image-circle">
              <Image 
                src="/images/logo/rivus_sinfondo.png"
                alt="Rivus Innovatio Team"
                width={450}
                height={450}
                className="about-profile-img"
              />
            </div>

            {/* Floating skill icons */}
            <motion.div 
              className="float-icon icon-figma"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <Image src="/icons/icon1.png" alt="Figma" width={32} height={32} />
            </motion.div>

            <motion.div 
              className="float-icon icon-code"
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
            >
              <Image src="/icons/icon3.png" alt="Code" width={32} height={32} />
            </motion.div>

            <motion.div 
              className="float-icon icon-design"
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, delay: 1 }}
            >
              <Image src="/icons/icon4.png" alt="Design" width={32} height={32} />
            </motion.div>
          </div>
        </motion.div>

        {/* Right - Content */}
        <motion.div 
          className="about-content-nox"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="tagline-modern">
            <div className="tagline-glow"></div>
            <span>SOBRE NOSOTROS</span>
          </div>
          
          <h2 className="about-title-nox">
            Somos <span className="highlight-green">Creative Director y UI-UX Designer</span> especializados en desarrollo web y aplicaciones móviles
          </h2>
          
          <p className="about-desc-nox">
            Nos especializamos en convertir problemas complejos en diseños simples, hermosos 
            e intuitivos. Nuestro objetivo es transmitir tu mensaje e identidad de la manera 
            más creativa. Hemos creado diseños web para muchas empresas reconocidas.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
