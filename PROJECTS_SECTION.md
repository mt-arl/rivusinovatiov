# Nueva Sección: Nuestros Proyectos ✨

## 📦 Componente Instalado: CardSwap

Se ha integrado exitosamente el componente **CardSwap** de [reactbits.dev](https://reactbits.dev/components/card-swap) en tu proyecto.

## 🎯 Qué se ha agregado

### 1. Nuevo Componente: `Projects.js`

Ubicación: `components/Projects.js`

Este componente incluye:
- **Animación CardSwap** con 4 tarjetas de proyectos
- **Diseño responsive** que se adapta a móviles
- **Estadísticas** (50+ Proyectos, 98% Satisfacción, 24/7 Soporte)
- **Lista interactiva** de proyectos con hover effects
- **Gradientes personalizados** para cada proyecto

### 2. Componente CardSwap

Ubicación: `components/CardSwap.jsx`

Características:
- ✅ Animación automática de tarjetas
- ✅ Pausa al hacer hover
- ✅ Efectos 3D con perspectiva
- ✅ Totalmente personalizable
- ✅ Powered by GSAP

### 3. Actualización del Navbar

Se agregó el enlace "Proyectos" que lleva a la nueva sección `#projects`.

## 🎨 Estructura de la Nueva Sección

La sección se divide en dos columnas:

### Columna Izquierda (Contenido):
- Título principal con gradiente
- Descripción de servicios
- 3 estadísticas destacadas
- Lista de 4 proyectos con iconos
- Botón CTA "Iniciar tu proyecto"

### Columna Derecha (Visual):
- Animación CardSwap con 4 tarjetas rotando
- Cada tarjeta muestra:
  - Icono del proyecto
  - Título
  - Descripción
  - Stack tecnológico
  - Botón "Ver Proyecto"

## 📝 Proyectos Incluidos (Puedes personalizarlos)

1. **E-Commerce Pro** 🛍️
   - React Native • Node.js • MongoDB
   - Gradiente: Verde-Teal

2. **FinTech Dashboard** 💰
   - Next.js • PostgreSQL • Stripe
   - Gradiente: Azul-Cyan

3. **Health & Fitness** 💪
   - Flutter • Firebase • ML Kit
   - Gradiente: Púrpura-Rosa

4. **Food Delivery** 🍔
   - React Native • Express • Socket.io
   - Gradiente: Naranja-Rojo

## 🔧 Personalización

### Cambiar los proyectos:

Edita el array `projects` en `components/Projects.js`:

\`\`\`javascript
const projects = [
  {
    id: 1,
    title: 'Tu Proyecto',
    description: 'Descripción del proyecto',
    tech: 'Tech1 • Tech2 • Tech3',
    gradient: 'from-color-500 to-color-500',
    image: '/images/screenshot/proyecto.png',
    icon: '🚀'
  },
  // Añade más proyectos...
]
\`\`\`

### Ajustar la animación CardSwap:

En `components/Projects.js`, línea del componente `<CardSwap>`:

\`\`\`javascript
<CardSwap
  width={400}              // Ancho de las tarjetas
  height={500}             // Alto de las tarjetas
  cardDistance={40}        // Distancia horizontal
  verticalDistance={50}    // Distancia vertical
  delay={4000}            // Tiempo entre rotaciones (ms)
  pauseOnHover={true}     // Pausar al hover
  skewAmount={5}          // Cantidad de inclinación
  easing="elastic"        // "elastic" o "smooth"
/>
\`\`\`

### Cambiar las estadísticas:

Edita las tres tarjetas de estadísticas en el componente:

\`\`\`javascript
<div className="grid grid-cols-3 gap-6 mb-8">
  <div className="stat-card">
    <div className="text-4xl font-black ...">
      50+  {/* Cambia este número */}
    </div>
    <div className="text-sm ...">Proyectos</div>
  </div>
  // ... más estadísticas
</div>
\`\`\`

## 🎨 Estilos Agregados

Se añadieron estilos en `styles/globals.css`:

- `.projects-section` - Contenedor principal
- `.project-card-swap` - Tarjetas con sombra
- `.stat-card` - Tarjetas de estadísticas con hover
- Media queries para responsive

## 🚀 Ubicación en la Página

La sección de Proyectos se muestra:
1. Después de "Nosotros" (About)
2. Antes de "Nuestras Soluciones" (WorkGallery)

Orden actual:
- Hero
- About (Nosotros)
- **Projects (Nuestros Proyectos)** ← NUEVO
- WorkGallery (Nuestras Soluciones)
- Footer

## 📱 Responsive

El componente es totalmente responsive:

- **Desktop**: Dos columnas, animación completa
- **Tablet**: Dos columnas, animación escalada
- **Mobile**: Una columna, animación centrada y más pequeña

## 🎯 Próximos Pasos

1. **Personaliza los proyectos** con tu información real
2. **Añade imágenes** en `/public/images/screenshot/`
3. **Ajusta los colores** de los gradientes según tu marca
4. **Configura los enlaces** de "Ver Proyecto" a páginas reales
5. **Prueba la animación** en diferentes dispositivos

## 🐛 Solución de Problemas

### Las tarjetas no rotan:
- Verifica que GSAP esté instalado: `npm list gsap`
- Asegúrate de que no hay errores en la consola

### Las tarjetas se ven mal en móvil:
- El componente usa clases responsive automáticas
- Ajusta `width` y `height` si es necesario

### Los gradientes no se ven:
- Asegúrate de que Tailwind CSS esté compilando correctamente
- Verifica que `tailwind.config.js` esté configurado

## 🎉 ¡Listo!

Tu sitio ahora tiene una sección de proyectos moderna e interactiva usando el componente CardSwap de reactbits.dev.

Para ver el resultado, visita: http://localhost:3000/#projects
