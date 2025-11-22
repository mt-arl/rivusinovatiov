import React from 'react'
import Link from 'next/link'
import { 
  FaWhatsapp, 
  FaLinkedin, 
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhone,
  FaArrowUp
} from 'react-icons/fa'
import { HiSparkles } from 'react-icons/hi2'

export default function FooterModern() {
  const accentColor = "text-[#6ee7b7]"
  const accentBg = "bg-[#6ee7b7]"

  return (
    <footer className="text-gray-400 font-sans relative px-6 py-16">
      {/* Sección Principal - Recuadro estilo testimonios */}
      <div className="max-w-7xl mx-auto">
        <div className="bg-[#1a1f2b] border border-gray-800 rounded-2xl px-8 py-12 md:px-12 md:py-16 relative overflow-hidden">
        {/* Grid de contenido */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 relative z-10">
          
          {/* Columna 1: Logo */}
          <div className="md:col-span-4 flex flex-col justify-start">
            <Link href="/" className="flex items-center gap-2 mb-6 group">
              <HiSparkles className={`w-10 h-10 ${accentColor} transition-transform group-hover:rotate-12`} />
              <span className="text-3xl font-bold text-white">Rivus Innovatio</span>
            </Link>
          </div>

          {/* Columna 2: Quick Link & Newsletter */}
          <div className="md:col-span-4">
            <h3 className="text-white text-xl font-semibold mb-6">Quick Link</h3>
            
            {/* Enlaces horizontales */}
            <div className="flex flex-wrap gap-6 mb-10 text-sm font-medium">
              {[
                { name: 'Nosotros', id: 'about' },
                { name: 'Habilidades', id: 'habilidades' },
                { name: 'Proyectos', id: 'projects' },
                { name: 'Precios', id: 'precios' },
                { name: 'Testimonios', id: 'testimonials' },
                { name: 'Contacto', id: 'contacto' }
              ].map((item) => (
                <Link key={item.id} href={`#${item.id}`} className="hover:text-white transition-colors">
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Input Newsletter */}
            <div className="relative max-w-md">
              <div className="flex items-center border-b border-gray-700 pb-2 focus-within:border-[#6ee7b7] transition-colors">
                <FaEnvelope className="w-5 h-5 mr-3 text-gray-500" />
                <input 
                  type="email" 
                  placeholder="Email Address" 
                  className="bg-transparent border-none outline-none text-white w-full placeholder-gray-600"
                />
                <button className={`${accentBg} text-black font-bold py-3 px-6 rounded-lg flex items-center gap-2 hover:opacity-90 transition-opacity ml-2 whitespace-nowrap`}>
                  Sign Up 
                  <span className="text-lg">›</span>
                </button>
              </div>
            </div>
          </div>

          {/* Columna 3: Address */}
          <div className="md:col-span-4 md:pl-10">
            <h3 className="text-white text-xl font-semibold mb-6">Dirección</h3>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <FaMapMarkerAlt className={`w-6 h-6 ${accentColor} mt-1`} />
                <span className="text-lg">Quito, Ecuador</span>
              </li>
              <li className="flex items-center gap-4">
                <FaEnvelope className={`w-6 h-6 ${accentColor}`} />
                <a href="mailto:sebastianriv2112@gmail.com" className="text-lg hover:text-white transition-colors">sebastianriv2112@gmail.com</a>
              </li>
              <li className="flex items-center gap-4">
                <FaWhatsapp className={`w-6 h-6 ${accentColor}`} />
                <a href="https://wa.me/593995085689" className="text-lg hover:text-white transition-colors">+593 995 085 689</a>
              </li>
            </ul>
          </div>
        </div>
        </div>
      </div>

      {/* Barra Inferior (Copyright) */}
      <div className="relative bg-transparent">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          
          <p className="text-sm">
            Copyright @2025, <span className={`${accentColor}`}>Rivus Innovatio</span> Todos los Derechos Reservados
          </p>

          <div className="flex items-center gap-6">
            <Link href="https://wa.me/593995085689" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#6ee7b7] transition-colors">
              <FaWhatsapp className="w-5 h-5" />
            </Link>
            <Link href="mailto:sebastianriv2112@gmail.com" className="text-gray-400 hover:text-[#6ee7b7] transition-colors">
              <FaEnvelope className="w-5 h-5" />
            </Link>
            <Link href="#" className="text-gray-400 hover:text-[#6ee7b7] transition-colors">
              <FaLinkedin className="w-5 h-5" />
            </Link>
          </div>
        </div>

        {/* Botón Back to Top - Centrado en la línea */}
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className={`absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 ${accentBg} p-3 rounded-lg hover:scale-110 transition-transform`}
        >
          <FaArrowUp className="w-5 h-5 text-black" />
        </button>
      </div>
    </footer>
  )
}
