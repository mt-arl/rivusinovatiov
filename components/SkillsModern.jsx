'use client'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { 
  FaMobileAlt, FaReact, FaNodeJs, FaPalette, FaCloud, FaBriefcase,
  FaDatabase, FaCode, FaFigma, FaDocker, FaChartLine, FaServer,
  FaAws, FaLayerGroup
} from 'react-icons/fa'

const skillsData = [
  {
    category: "Desarrollo Móvil",
    color: "#6ee7b7",
    icon: FaMobileAlt,
    skills: [
      { name: "React Native", level: 95, description: "Apps multiplataforma nativas", icon: FaReact },
      { name: "Expo", level: 90, description: "Desarrollo ágil y despliegue", icon: FaMobileAlt },
      { name: "Flutter", level: 85, description: "UI fluida y performante", icon: FaCode }
    ]
  },
  {
    category: "Backend & APIs",
    color: "#7dd3fc",
    icon: FaServer,
    skills: [
      { name: "Node.js", level: 92, description: "Servidor escalable y rápido", icon: FaNodeJs },
      { name: "Express/Fastify", level: 90, description: "APIs RESTful robustas", icon: FaServer },
      { name: "MongoDB/PostgreSQL", level: 88, description: "Bases de datos optimizadas", icon: FaDatabase }
    ]
  },
  {
    category: "Frontend Web",
    color: "#86efac",
    icon: FaCode,
    skills: [
      { name: "Next.js", level: 93, description: "Aplicaciones web modernas", icon: FaReact },
      { name: "React", level: 95, description: "Interfaces interactivas", icon: FaReact },
      { name: "TailwindCSS", level: 90, description: "Diseño responsive elegante", icon: FaPalette }
    ]
  },
  {
    category: "UX/UI Design",
    color: "#fbbf24",
    icon: FaPalette,
    skills: [
      { name: "Figma", level: 90, description: "Prototipado y diseño", icon: FaFigma },
      { name: "Adobe XD", level: 85, description: "Wireframes y mockups", icon: FaPalette },
      { name: "User Research", level: 88, description: "Investigación de usuarios", icon: FaChartLine }
    ]
  },
  {
    category: "DevOps & Cloud",
    color: "#4ade80",
    icon: FaCloud,
    skills: [
      { name: "AWS/Azure", level: 85, description: "Infraestructura en la nube", icon: FaAws },
      { name: "Docker", level: 87, description: "Contenedores y despliegue", icon: FaDocker },
      { name: "CI/CD", level: 83, description: "Integración continua", icon: FaLayerGroup }
    ]
  },
  {
    category: "Soluciones Empresariales",
    color: "#a78bfa",
    icon: FaBriefcase,
    skills: [
      { name: "CRM Personalizado", level: 92, description: "Gestión de clientes", icon: FaBriefcase },
      { name: "Sistemas de Inventario", level: 90, description: "Control en tiempo real", icon: FaChartLine },
      { name: "BI & Analytics", level: 88, description: "Reportes inteligentes", icon: FaChartLine }
    ]
  }
]

export default function SkillsModern() {
  const [hoveredCategory, setHoveredCategory] = useState(null)

  return (
    <div className="skills-modern-section" id="habilidades">
      <div className="skills-modern-container">
        {/* Header */}
        <motion.div
          className="skills-modern-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="tagline-modern">
            <div className="tagline-glow"></div>
            <span>NUESTRO STACK TECNOLÓGICO</span>
          </div>
          <h2 className="skills-title">
            Tecnologías que <span className="highlight-gradient">Dominamos</span>
          </h2>
          <p className="skills-subtitle">
            Combinamos las mejores herramientas del mercado para crear soluciones digitales 
            robustas, escalables y con diseño de primer nivel
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="skills-grid">
          {skillsData.map((category, categoryIndex) => {
            const CategoryIcon = category.icon
            return (
              <motion.div
                key={category.category}
                className="skill-category-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                onMouseEnter={() => setHoveredCategory(categoryIndex)}
                onMouseLeave={() => setHoveredCategory(null)}
              >
                {/* Category Header */}
                <div className="category-header">
                  <div 
                    className="category-icon-wrapper" 
                    style={{ background: `${category.color}20` }}
                  >
                    <CategoryIcon 
                      className="category-icon" 
                      style={{ color: category.color }}
                    />
                  </div>
                  <h3 className="category-title" style={{ color: category.color }}>
                    {category.category}
                  </h3>
                </div>

                {/* Skills List */}
                <div className="category-skills-list">
                  {category.skills.map((skill, skillIndex) => {
                    const SkillIcon = skill.icon
                    return (
                      <motion.div
                        key={skill.name}
                        className="skill-item"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: skillIndex * 0.1 }}
                      >
                        <div className="skill-info">
                          <div className="skill-name-level">
                            <div className="skill-name-with-icon">
                              <SkillIcon className="skill-icon" />
                              <span className="skill-name">{skill.name}</span>
                            </div>
                            <span className="skill-level" style={{ color: category.color }}>
                              {skill.level}%
                            </span>
                          </div>
                          <p className="skill-description">{skill.description}</p>
                        </div>
                        
                        {/* Progress Bar */}
                        <div className="skill-progress-bg">
                          <motion.div
                            className="skill-progress-fill"
                            style={{ 
                              background: category.color,
                              boxShadow: `0 0 20px ${category.color}, 0 0 40px ${category.color}, inset 0 1px 0 rgba(255, 255, 255, 0.3)`
                            }}
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ 
                              duration: 1.2, 
                              delay: 0.2 + skillIndex * 0.15,
                              ease: [0.4, 0, 0.2, 1]
                            }}
                          />
                        </div>
                      </motion.div>
                    )
                  })}
                </div>
              </motion.div>
            )
          })}
        </div>

      </div>

      <style jsx>{`
        .skills-modern-section {
          min-height: 100vh;
          padding: 120px 32px 100px;
          background: transparent;
          position: relative;
          overflow: hidden;
        }

        .skills-modern-container {
          max-width: 1500px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }

        .skills-modern-header {
          text-align: center;
          margin-bottom: 100px;
        }

        .skills-tag {
          display: inline-block;
          padding: 8px 20px;
          background: rgba(110, 231, 183, 0.1);
          border: 1px solid rgba(110, 231, 183, 0.2);
          border-radius: 30px;
          color: #6ee7b7;
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 2px;
          text-transform: uppercase;
          margin-bottom: 20px;
        }

        .skills-title {
          font-size: clamp(32px, 5vw, 56px);
          font-weight: 800;
          color: white;
          margin-bottom: 24px;
          line-height: 1.2;
        }

        .highlight-gradient {
          background: linear-gradient(135deg, #6ee7b7 0%, #7dd3fc 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .skills-subtitle {
          font-size: 18px;
          color: #9ca3af;
          max-width: 700px;
          margin: 0 auto 60px;
          line-height: 1.6;
        }

        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(420px, 1fr));
          gap: 40px;
          margin-top: 80px;
          margin-bottom: 100px;
        }

        @media (max-width: 768px) {
          .skills-grid {
            grid-template-columns: 1fr;
          }
        }

        .skill-category-card {
          background: rgba(15, 20, 32, 0.6);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 24px;
          padding: 40px;
          transition: all 0.3s ease;
        }

        .skill-category-card:hover {
          transform: translateY(-8px);
          border-color: rgba(110, 231, 183, 0.3);
          box-shadow: 0 20px 40px rgba(110, 231, 183, 0.12);
        }

        .category-header {
          display: flex;
          align-items: center;
          gap: 20px;
          margin-bottom: 36px;
          padding-bottom: 24px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
        }

        .category-icon-wrapper {
          width: 56px;
          height: 56px;
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: transform 0.3s ease;
        }

        .skill-category-card:hover .category-icon-wrapper {
          transform: scale(1.1) rotate(5deg);
        }

        .category-icon {
          font-size: 28px;
          filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.3));
        }

        .category-title {
          font-size: 22px;
          font-weight: 700;
          margin: 0;
        }

        .category-skills-list {
          display: flex;
          flex-direction: column;
          gap: 32px;
        }

        .skill-item {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .skill-info {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .skill-name-level {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .skill-name-with-icon {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .skill-icon {
          font-size: 18px;
          color: #9ca3af;
          transition: color 0.3s ease;
        }

        .skill-item:hover .skill-icon {
          color: #6ee7b7;
        }

        .skill-name {
          font-size: 16px;
          font-weight: 600;
          color: #e5e7eb;
        }

        .skill-level {
          font-size: 14px;
          font-weight: 700;
        }

        .skill-description {
          font-size: 13px;
          color: #9ca3af;
          margin: 0;
          padding-left: 28px;
        }

        .skill-progress-bg {
          width: 100%;
          height: 10px;
          background: rgba(255, 255, 255, 0.08);
          border-radius: 12px;
          overflow: hidden;
          position: relative;
          box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.2);
        }

        .skill-progress-fill {
          height: 100%;
          border-radius: 12px;
          position: relative;
          will-change: width;
        }

        .skill-progress-fill::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 50%;
          background: linear-gradient(180deg, rgba(255, 255, 255, 0.25), transparent);
          border-radius: 12px 12px 0 0;
        }

        .skill-progress-fill::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent);
          animation: shimmer 2.5s ease-in-out infinite;
        }

        @keyframes shimmer {
          0% { transform: translateX(-100%); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translateX(100%); opacity: 0; }
        }

        .skills-stats {
          display: flex !important;
          flex-direction: row !important;
          justify-content: center;
          align-items: center;
          gap: 80px;
          padding: 0 !important;
          margin: 0 !important;
          background: none !important;
          border: none !important;
          flex-wrap: nowrap;
          width: 100%;
        }

        @media (max-width: 968px) {
          .skills-stats {
            flex-wrap: wrap;
            gap: 40px;
          }
        }

        .stat-box {
          text-align: center;
          padding: 0;
          margin: 0;
          position: relative;
          flex-shrink: 0;
        }

        .stat-box:not(:last-child)::after {
          content: '';
          position: absolute;
          right: -20px;
          top: 50%;
          transform: translateY(-50%);
          width: 1px;
          height: 60px;
          background: linear-gradient(180deg, transparent, rgba(110, 231, 183, 0.3), transparent);
        }

        @media (max-width: 768px) {
          .stat-box:not(:last-child)::after {
            display: none;
          }
        }

        .stat-number {
          font-size: 48px;
          font-weight: 900;
          background: linear-gradient(135deg, #6ee7b7 0%, #7dd3fc 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: 8px;
        }

        .stat-label {
          font-size: 14px;
          color: #9ca3af;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 1px;
        }
      `}</style>
    </div>
  )
}
