'use client'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import Image from 'next/image'

const skills = [
  { name: 'UI/UX Design', percentage: 95, icon: '/icons/icon1.png', color: '#CDDC39' },
  { name: 'Development', percentage: 90, icon: '/icons/icon3.png', color: '#FFC107' },
  { name: 'Graphic Design', percentage: 85, icon: '/icons/icon4.png', color: '#8BC34A' },
  { name: 'React Native', percentage: 88, icon: '/icons/s4.png', color: '#FFEB3B' },
  { name: 'Node.js', percentage: 87, icon: '/icons/s5.png', color: '#C0CA33' },
  { name: 'Next.js', percentage: 92, icon: '/icons/s6.png', color: '#D4E157' }
]

function SkillCircle({ skill, index }) {
  const [progress, setProgress] = useState(0)
  const circumference = 2 * Math.PI * 70
  const offset = circumference - (progress / 100) * circumference

  useEffect(() => {
    const timer = setTimeout(() => {
      setProgress(skill.percentage)
    }, index * 150)
    return () => clearTimeout(timer)
  }, [skill.percentage, index])

  return (
    <motion.div
      className="skill-circle-item"
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="circle-wrapper">
        <svg className="circle-svg" viewBox="0 0 180 180">
          {/* Background circle */}
          <circle
            cx="90"
            cy="90"
            r="70"
            fill="rgba(26, 26, 26, 0.8)"
            stroke="rgba(255, 255, 255, 0.1)"
            strokeWidth="2"
          />
          {/* Progress circle */}
          <circle
            cx="90"
            cy="90"
            r="70"
            fill="none"
            stroke={skill.color}
            strokeWidth="8"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            transform="rotate(-90 90 90)"
            style={{ transition: 'stroke-dashoffset 1.5s ease-out' }}
          />
        </svg>
        
        <div className="circle-content">
          <div className="skill-circle-icon">
            <Image src={skill.icon} alt={skill.name} width={52} height={52} />
          </div>
          <span className="skill-circle-percent">{progress}%</span>
        </div>
      </div>
      
      <h3 className="skill-circle-name">{skill.name}</h3>
    </motion.div>
  )
}

export default function Skills() {
  return (
    <section className="skills-nox" id="skills">
      <div className="skills-nox-container">
        <motion.div
          className="skills-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="section-tag-nox">NUESTRAS HABILIDADES</p>
          <h2 className="section-title-nox">
            Explora Nuestras <span className="highlight-green">Habilidades y Experiencia</span>
          </h2>
        </motion.div>

        <div className="skills-circle-grid">
          {skills.map((skill, index) => (
            <SkillCircle key={skill.name} skill={skill} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
