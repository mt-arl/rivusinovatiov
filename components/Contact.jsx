'use client'
import { motion } from 'framer-motion'
import { FaUser, FaEnvelope, FaPhone, FaPaperPlane, FaCheckCircle } from 'react-icons/fa'
import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Aquí puedes agregar la lógica para enviar el formulario
    const message = `Hola, soy ${formData.name}. ${formData.message}`
    const whatsappUrl = `https://wa.me/593995085689?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  const benefits = [
    '5+ Años De Experiencia',
    'Desarrollo Web Profesional',
    'Diseño de Apps Móviles',
    'Soporte Personalizado'
  ]

  return (
    <section id="contacto" className="min-h-screen py-20 px-6 md:px-8 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-48 w-96 h-96 bg-[#6ee7b7] opacity-10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-[#7dd3fc] opacity-10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-block mb-6">
            <div className="tagline-modern">
              <div className="tagline-glow"></div>
              <span>CONTACTO</span>
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Hablemos de tu <span className="bg-gradient-to-r from-[#6ee7b7] to-[#7dd3fc] bg-clip-text text-transparent">Próximo Proyecto</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            ¿Tienes una idea increíble? Estamos aquí para ayudarte a hacerla realidad
          </p>
        </motion.div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Hablemos de tu <span className="text-[#c4f34e]">Próximo Proyecto</span>
            </h3>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              Transformamos ideas en experiencias digitales excepcionales. Con más de 5 años de experiencia, 
              nuestro equipo está listo para llevar tu proyecto al siguiente nivel.
            </p>

            {/* Benefits List */}
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-4"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <div className="w-8 h-8 rounded-full bg-[#c4f34e] flex items-center justify-center flex-shrink-0">
                    <FaCheckCircle className="text-black text-sm" />
                  </div>
                  <span className="text-gray-300 text-lg">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name & Email Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Full Name */}
                <div>
                  <label htmlFor="name" className="block text-white font-semibold mb-3">
                    Nombre Completo
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Juan Pérez"
                      required
                      className="w-full bg-[#1a1f2b] border border-gray-800 rounded-xl px-4 py-4 pr-12 text-white placeholder-gray-600 focus:outline-none focus:border-[#6ee7b7] transition-colors"
                    />
                    <FaUser className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-600" />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-white font-semibold mb-3">
                    Correo Electrónico
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="correo@ejemplo.com"
                      required
                      className="w-full bg-[#1a1f2b] border border-gray-800 rounded-xl px-4 py-4 pr-12 text-white placeholder-gray-600 focus:outline-none focus:border-[#6ee7b7] transition-colors"
                    />
                    <FaEnvelope className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-600" />
                  </div>
                </div>
              </div>

              {/* Phone & Subject Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Phone Number */}
                <div>
                  <label htmlFor="phone" className="block text-white font-semibold mb-3">
                    Número de Teléfono
                  </label>
                  <div className="relative">
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+593 995 085 689"
                      className="w-full bg-[#1a1f2b] border border-gray-800 rounded-xl px-4 py-4 pr-12 text-white placeholder-gray-600 focus:outline-none focus:border-[#6ee7b7] transition-colors"
                    />
                    <FaPhone className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-600" />
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label htmlFor="subject" className="block text-white font-semibold mb-3">
                    Asunto
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Asunto del mensaje"
                      className="w-full bg-[#1a1f2b] border border-gray-800 rounded-xl px-4 py-4 pr-12 text-white placeholder-gray-600 focus:outline-none focus:border-[#6ee7b7] transition-colors"
                    />
                    <FaPaperPlane className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-600" />
                  </div>
                </div>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-white font-semibold mb-3">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Escribe tu mensaje aquí..."
                  required
                  rows="6"
                  className="w-full bg-[#1a1f2b] border border-gray-800 rounded-xl px-4 py-4 text-white placeholder-gray-600 focus:outline-none focus:border-[#6ee7b7] transition-colors resize-none"
                ></textarea>
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                className="w-full md:w-auto bg-[#c4f34e] text-black font-bold py-4 px-10 rounded-xl flex items-center justify-center gap-3 hover:bg-[#b3e03d] transition-all duration-300 shadow-lg hover:shadow-[#c4f34e]/20"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Enviar Mensaje
                <span className="text-xl">›</span>
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
