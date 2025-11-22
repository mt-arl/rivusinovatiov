import { motion } from 'framer-motion'
import { useState } from 'react'

export default function GooeyButton({ 
  children, 
  href, 
  onClick, 
  variant = 'primary',
  className = '',
  ...props 
}) {
  const [isHovered, setIsHovered] = useState(false)

  const baseClasses = "relative inline-flex items-center justify-center px-8 py-4 font-bold text-base rounded-xl transition-all duration-300 overflow-hidden group"
  
  const variants = {
    primary: "bg-gradient-to-r from-emerald-500 to-cyan-500 text-gray-900 hover:shadow-2xl hover:shadow-emerald-500/50",
    secondary: "bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:shadow-2xl hover:shadow-blue-500/50",
    ghost: "border-2 border-gray-700 text-gray-100 hover:border-emerald-500 hover:bg-emerald-500/10",
    cta: "bg-gradient-to-r from-emerald-400 to-teal-400 text-gray-900 hover:shadow-2xl hover:shadow-emerald-400/60"
  }

  const Component = href ? 'a' : 'button'

  return (
    <>
      <motion.div
        className="gooey-button-wrapper"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Component
          href={href}
          onClick={onClick}
          className={`${baseClasses} ${variants[variant]} ${className}`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          {...props}
        >
          {/* Gooey blob effect */}
          <span className="absolute inset-0 gooey-blob">
            <span className={`blob blob-1 ${isHovered ? 'active' : ''}`}></span>
            <span className={`blob blob-2 ${isHovered ? 'active' : ''}`}></span>
            <span className={`blob blob-3 ${isHovered ? 'active' : ''}`}></span>
          </span>

          {/* Button content */}
          <span className="relative z-10 flex items-center gap-2">
            {children}
          </span>

          {/* Shine effect */}
          <span className="absolute inset-0 shine-effect"></span>
        </Component>
      </motion.div>

      <style jsx>{`
        .gooey-button-wrapper {
          filter: url(#gooey-effect);
        }

        .gooey-blob {
          filter: blur(8px);
        }

        .blob {
          position: absolute;
          background: rgb(17, 183, 131);
          border-radius: 50%;
          opacity: 0;
          transition: all 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
          box-shadow: 0 0 20px rgba(17, 183, 131, 0.6);
        }

        .blob-1 {
          width: 40px;
          height: 40px;
          top: -15px;
          left: 15%;
        }

        .blob-2 {
          width: 50px;
          height: 50px;
          top: 50%;
          right: 5%;
        }

        .blob-3 {
          width: 35px;
          height: 35px;
          bottom: -10px;
          left: 40%;
        }

        .blob.active {
          opacity: 0.8;
        }

        .blob-1.active {
          transform: translateY(-30px) scale(2);
        }

        .blob-2.active {
          transform: translateX(30px) scale(1.8);
        }

        .blob-3.active {
          transform: translateY(30px) scale(2.2);
        }

        .shine-effect {
          background: linear-gradient(
            90deg,
            transparent,
            rgba(17, 183, 131, 0.4),
            transparent
          );
          transform: translateX(-100%);
          transition: transform 0.6s;
        }

        .group:hover .shine-effect {
          transform: translateX(100%);
        }
      `}</style>

      {/* SVG Filter for Gooey Effect */}
      <svg style={{ position: 'absolute', width: 0, height: 0 }}>
        <defs>
          <filter id="gooey-effect">
            <feGaussianBlur in="SourceGraphic" stdDeviation="8" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 25 -12"
              result="gooey"
            />
            <feComposite in="SourceGraphic" in2="gooey" operator="atop" />
          </filter>
        </defs>
      </svg>
    </>
  )
}
