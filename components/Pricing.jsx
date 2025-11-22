'use client'
import { motion } from 'framer-motion'
import { FaCheck } from 'react-icons/fa'

const pricingPlans = [
  {
    name: 'Básico',
    price: '499',
    period: '/proyecto',
    description: 'Ideal para proyectos pequeños y MVP',
    color: '#7dd3fc',
    features: [
      'Diseño UI/UX profesional',
      'Hasta 5 pantallas',
      'Responsive design',
      'Integración API básica',
      '1 mes de soporte',
      'Entrega en 2 semanas'
    ],
    recommended: false
  },
  {
    name: 'Profesional',
    price: '999',
    period: '/proyecto',
    description: 'Perfecto para negocios en crecimiento',
    color: '#6ee7b7',
    features: [
      'Todo lo del plan Básico',
      'Hasta 15 pantallas',
      'Backend personalizado',
      'Base de datos',
      'Panel de administración',
      '3 meses de soporte',
      'Entrega en 4 semanas'
    ],
    recommended: true
  },
  {
    name: 'Enterprise',
    price: 'Personalizado',
    period: '',
    description: 'Soluciones empresariales completas',
    color: '#a78bfa',
    features: [
      'Todo lo del plan Profesional',
      'Pantallas ilimitadas',
      'Arquitectura escalable',
      'Integraciones avanzadas',
      'DevOps y CI/CD',
      'Soporte prioritario 24/7',
      'Consultoría técnica'
    ],
    recommended: false
  }
]

export default function Pricing() {
  return (
    <section id="precios" className="min-h-screen py-20 px-6 md:px-8">
      <div className="max-w-7xl mx-auto">
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
              <span>PLANES Y PRECIOS</span>
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Elige el <span className="bg-gradient-to-r from-[#6ee7b7] to-[#7dd3fc] bg-clip-text text-transparent">Plan Perfecto</span> para tu Proyecto
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Planes flexibles diseñados para adaptarse a las necesidades de tu negocio
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.name}
              className={`bg-[#1a1f2b] border rounded-2xl p-8 md:p-10 relative transition-all duration-300 hover:-translate-y-2 ${
                plan.recommended 
                  ? 'border-[#6ee7b7] shadow-[0_20px_60px_rgba(110,231,183,0.25)] md:scale-105' 
                  : 'border-gray-800 hover:border-[#6ee7b7] hover:shadow-[0_20px_60px_rgba(110,231,183,0.15)]'
              }`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {plan.recommended && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-gradient-to-r from-[#6ee7b7] to-[#4ade80] text-black text-sm font-bold px-6 py-2 rounded-full shadow-lg">
                    Más Popular
                  </span>
                </div>
              )}

              {/* Card Header */}
              <div className="text-center mb-8 pb-6 border-b border-gray-800">
                <h3 className="text-2xl md:text-3xl font-bold mb-3" style={{ color: plan.color }}>
                  {plan.name}
                </h3>
                <p className="text-gray-400 text-sm md:text-base">
                  {plan.description}
                </p>
              </div>

              {/* Price */}
              <div className="text-center mb-8 pb-6 border-b border-gray-800">
                {plan.price === 'Personalizado' ? (
                  <div className="text-4xl md:text-5xl font-black text-white">
                    {plan.price}
                  </div>
                ) : (
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-2xl font-bold text-[#6ee7b7]">$</span>
                    <span className="text-5xl md:text-6xl font-black text-white">{plan.price}</span>
                    <span className="text-lg text-gray-400">{plan.period}</span>
                  </div>
                )}
              </div>

              {/* Features */}
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <motion.li
                    key={i}
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.3 + i * 0.05 }}
                  >
                    <FaCheck className="text-base md:text-lg mt-1 flex-shrink-0" style={{ color: plan.color }} />
                    <span className="text-gray-300 text-sm md:text-base">{feature}</span>
                  </motion.li>
                ))}
              </ul>

              {/* CTA Button */}
              <a
                href="https://wa.me/593995085689"
                className="block w-full text-center py-4 px-6 rounded-xl font-bold text-black transition-opacity hover:opacity-90"
                style={{ backgroundColor: plan.color }}
              >
                {plan.price === 'Personalizado' ? 'Contactar' : 'Comenzar Ahora'}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
