# Componente SplitText - Configuración completada ✅

## Resumen de cambios realizados

Se ha configurado exitosamente **shadcn/ui** en tu proyecto Next.js y se ha instalado el componente **SplitText** desde reactbits.dev.

### Archivos creados/modificados:

1. **Configuración de Tailwind CSS:**
   - ✅ `tailwind.config.js` - Configuración de Tailwind con tema de shadcn
   - ✅ `postcss.config.js` - PostCSS con Tailwind y Autoprefixer
   - ✅ `jsconfig.json` - Path aliases para imports (@/)

2. **Configuración de shadcn/ui:**
   - ✅ `components.json` - Configuración del CLI de shadcn
   - ✅ `lib/utils.js` - Utilidad cn() para merge de clases

3. **Estilos:**
   - ✅ `styles/globals.css` - Actualizado con directivas de Tailwind y variables CSS de shadcn

4. **Componente:**
   - ✅ `components/SplitText.jsx` - Componente de texto animado

### Dependencias instaladas:

```json
{
  "devDependencies": {
    "tailwindcss": "latest",
    "postcss": "latest",
    "autoprefixer": "latest",
    "tailwindcss-animate": "latest",
    "class-variance-authority": "latest",
    "clsx": "latest",
    "tailwind-merge": "latest"
  }
}
```

## Cómo usar el componente SplitText

### Ejemplo básico:

```jsx
import SplitText from '@/components/SplitText';

export default function MyPage() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <SplitText
        text="¡Hola Rivus Innovation!"
        tag="h1"
        className="text-6xl font-bold"
        delay={50}
        duration={0.8}
      />
    </div>
  );
}
```

### Props disponibles:

| Prop | Tipo | Default | Descripción |
|------|------|---------|-------------|
| `text` | string | **requerido** | El texto a animar |
| `className` | string | `''` | Clases CSS adicionales |
| `delay` | number | `100` | Delay entre caracteres (ms) |
| `duration` | number | `0.6` | Duración de animación (s) |
| `ease` | string | `'power3.out'` | Función de easing de GSAP |
| `splitType` | string | `'chars'` | 'chars', 'words', o 'lines' |
| `from` | object | `{ opacity: 0, y: 40 }` | Estado inicial |
| `to` | object | `{ opacity: 1, y: 0 }` | Estado final |
| `threshold` | number | `0.1` | Umbral de ScrollTrigger |
| `rootMargin` | string | `'-100px'` | Margen del trigger |
| `textAlign` | string | `'center'` | Alineación del texto |
| `tag` | string | `'p'` | Tag HTML ('h1'-'h6', 'p') |

### Ejemplo avanzado con animación personalizada:

```jsx
<SplitText
  text="Innovación que transforma"
  tag="h2"
  className="text-4xl font-extrabold bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent"
  splitType="words"
  delay={80}
  duration={1}
  ease="elastic.out(1, 0.5)"
  from={{ opacity: 0, y: 50, rotateX: -90 }}
  to={{ opacity: 1, y: 0, rotateX: 0 }}
  threshold={0.2}
/>
```

### ⚠️ Nota importante sobre GSAP SplitText

El componente usa el plugin **SplitText** de GSAP, que es un **plugin premium** (requiere licencia Club GreenSock).

**Opciones:**

1. **Si tienes licencia Club GreenSock:**
   - Instala el paquete: `npm install gsap-trial` o usa tu paquete privado
   - El componente funcionará completamente

2. **Sin licencia (alternativa gratuita):**
   - El componente puede no funcionar completamente
   - Considera usar alternativas como:
     - `react-split-text` (npm)
     - `splitting` (biblioteca JS vanilla)
     - Implementar tu propia lógica de split con CSS

## Próximos pasos

Ahora puedes:

1. ✅ **Usar el componente SplitText** en cualquier página
2. ✅ **Agregar más componentes** de shadcn:
   ```bash
   npx shadcn@latest add button
   npx shadcn@latest add card
   # etc...
   ```
3. ✅ **Explorar componentes** en:
   - https://ui.shadcn.com/docs/components
   - https://reactbits.dev

## Ejemplo de integración en tu Hero:

```jsx
// pages/index.js
import SplitText from '@/components/SplitText';

export default function Home() {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-copy">
          <SplitText
            text="Transformamos ideas en soluciones digitales"
            tag="h1"
            className="text-7xl font-black"
            delay={30}
            duration={0.8}
            splitType="chars"
          />
          
          <SplitText
            text="Desarrollo web y móvil de vanguardia"
            tag="p"
            className="lead mt-6"
            delay={50}
            duration={0.6}
            splitType="words"
          />
        </div>
      </div>
    </section>
  );
}
```

## Ayuda adicional

Si encuentras algún problema:
1. Verifica que todos los archivos se hayan creado correctamente
2. Ejecuta `npm run dev` para verificar que no hay errores de compilación
3. Revisa la consola del navegador para errores de JavaScript

¡Tu proyecto está listo para usar shadcn/ui y componentes animados! 🚀
