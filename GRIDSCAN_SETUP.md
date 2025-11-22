# GridScan Component - Documentación

## 📋 Descripción

GridScan es un componente avanzado de React que crea una animación de grid 3D con efectos de escaneo utilizando WebGL/Three.js. Incluye soporte para:

- ✨ Animación de grid 3D con perspectiva
- 🌊 Efectos de escaneo suaves con glow
- 🎨 Post-procesamiento (Bloom, Chromatic Aberration)
- 📹 Tracking facial opcional con webcam
- 📱 Soporte para giroscopio en dispositivos móviles
- 🎭 Interacción con mouse/touch

## 🔧 Dependencias Instaladas

```json
{
  "three": "^0.170.0",
  "postprocessing": "^6.36.4",
  "face-api.js": "^0.22.2"
}
```

## 💻 Uso Básico

```jsx
import GridScan from '@/components/GridScan';

<div style={{ width: '100%', height: '600px', position: 'relative' }}>
  <GridScan
    sensitivity={0.55}
    lineThickness={1}
    linesColor="#11B783"
    gridScale={0.1}
    scanColor="#11B783"
    scanOpacity={0.4}
    enablePost
    bloomIntensity={0.6}
    chromaticAberration={0.002}
    noiseIntensity={0.01}
  />
</div>
```

## 🎛️ Props Disponibles

### Propiedades Visuales Básicas

| Prop | Tipo | Default | Descripción |
|------|------|---------|-------------|
| `lineThickness` | number | 1 | Grosor de las líneas del grid |
| `linesColor` | string | '#392e4e' | Color de las líneas del grid (hex) |
| `scanColor` | string | '#FF9FFC' | Color del efecto de escaneo (hex) |
| `scanOpacity` | number | 0.4 | Opacidad del escaneo (0-1) |
| `gridScale` | number | 0.1 | Escala del grid |

### Propiedades de Líneas

| Prop | Tipo | Default | Descripción |
|------|------|---------|-------------|
| `lineStyle` | string | 'solid' | Estilo: 'solid', 'dashed', 'dotted' |
| `lineJitter` | number | 0.1 | Cantidad de jitter/vibración (0-1) |

### Propiedades del Escaneo

| Prop | Tipo | Default | Descripción |
|------|------|---------|-------------|
| `scanDirection` | string | 'pingpong' | Dirección: 'forward', 'backward', 'pingpong' |
| `scanGlow` | number | 0.5 | Intensidad del brillo del escaneo |
| `scanSoftness` | number | 2 | Suavidad del efecto de escaneo |
| `scanPhaseTaper` | number | 0.9 | Atenuación de fase (0-0.49) |
| `scanDuration` | number | 2.0 | Duración del ciclo de escaneo (segundos) |
| `scanDelay` | number | 2.0 | Retraso entre escaneos (segundos) |
| `scanOnClick` | boolean | false | Activar escaneo al hacer click |

### Post-Procesamiento

| Prop | Tipo | Default | Descripción |
|------|------|---------|-------------|
| `enablePost` | boolean | true | Habilitar efectos post-procesamiento |
| `bloomIntensity` | number | 0 | Intensidad del efecto bloom (0-1) |
| `bloomThreshold` | number | 0 | Umbral de bloom |
| `bloomSmoothing` | number | 0 | Suavizado de bloom |
| `chromaticAberration` | number | 0.002 | Aberración cromática |
| `noiseIntensity` | number | 0.01 | Intensidad del ruido visual |

### Interacción

| Prop | Tipo | Default | Descripción |
|------|------|---------|-------------|
| `sensitivity` | number | 0.55 | Sensibilidad del movimiento (0-1) |
| `snapBackDelay` | number | 250 | Delay para volver a posición (ms) |
| `enableGyro` | boolean | false | Habilitar giroscopio móvil |

### Tracking Facial (Avanzado)

| Prop | Tipo | Default | Descripción |
|------|------|---------|-------------|
| `enableWebcam` | boolean | false | Activar tracking facial |
| `showPreview` | boolean | false | Mostrar preview de webcam |
| `modelsPath` | string | CDN | Ruta a modelos de face-api.js |

### Estilo

| Prop | Tipo | Default | Descripción |
|------|------|---------|-------------|
| `className` | string | - | Clases CSS adicionales |
| `style` | object | - | Estilos inline adicionales |

## 🎨 Configuración en Hero.js

```jsx
<GridScan
  sensitivity={0.55}
  lineThickness={1}
  linesColor="rgb(17, 183, 131)"  // Color verde de Rivus
  gridScale={0.1}
  scanColor="rgb(17, 183, 131)"
  scanOpacity={0.4}
  enablePost
  bloomIntensity={0.6}
  chromaticAberration={0.002}
  noiseIntensity={0.01}
  className="absolute inset-0 z-0"
  style={{ width: '100%', height: '100%' }}
/>
```

## 🔍 Cómo Funciona

### 1. **Shader GLSL**
- Utiliza vertex y fragment shaders personalizados
- Renderiza un grid 3D con perspectiva
- Aplica efectos de escaneo con funciones Gaussianas

### 2. **Three.js Scene**
- Crea un plano ortográfico fullscreen
- Aplica el material shader personalizado
- Maneja la animación en tiempo real

### 3. **Post-Processing**
- `BloomEffect`: Agrega brillo a las áreas luminosas
- `ChromaticAberrationEffect`: Separación de colores RGB
- `EffectComposer`: Combina múltiples efectos

### 4. **Interacción**
- **Mouse**: Detecta posición y aplica transformaciones (skew, tilt, yaw)
- **Smooth Damping**: Suaviza movimientos con física
- **Leave Behavior**: Vuelve a posición neutral con delay

### 5. **Face Tracking (Opcional)**
- Usa `face-api.js` con TinyFaceDetector
- Detecta landmarks faciales (ojos, nariz, mandíbula)
- Calcula profundidad y rotación (yaw, tilt)
- Actualiza la vista del grid según la posición facial

## ⚡ Optimización

- **PixelRatio**: Limitado a 2x para evitar sobrecarga
- **requestAnimationFrame**: Loop de animación optimizado
- **Face Detection**: Throttle a ~30fps (cada 33ms)
- **Median Filter**: Suaviza datos de tracking facial
- **Cleanup**: Dispose correcto de recursos Three.js

## 🎯 Casos de Uso

1. **Hero Sections**: Fondo animado e interactivo
2. **Landing Pages**: Efecto futurista/tech
3. **Presentaciones**: Visualización de datos espaciales
4. **Experiencias VR/AR**: Preview de contenido 3D
5. **Demos de Productos**: Showcase interactivo

## 🐛 Troubleshooting

### El grid no se ve
- Verifica que el contenedor tenga `width` y `height` definidos
- Asegúrate que `position: relative` esté en el contenedor padre

### Rendimiento bajo
- Reduce `bloomIntensity` o desactiva `enablePost`
- Aumenta `gridScale` (menos líneas)
- Limita `lineThickness`

### Face tracking no funciona
- Verifica permisos de cámara del navegador
- Comprueba que `modelsPath` sea accesible
- Revisa la consola por errores de CORS

## 📚 Referencias

- [Three.js Documentation](https://threejs.org/docs/)
- [Postprocessing Library](https://github.com/pmndrs/postprocessing)
- [face-api.js](https://github.com/justadudewhohacks/face-api.js)
- [React Bits - GridScan](https://reactbits.dev)

## 🎨 Color Scheme Rivus Innovation

```css
--primary-green: rgb(17, 183, 131)  /* #11B783 */
--hex-format: #11B783
```

## 📝 Notas

- El componente es completamente responsivo
- Soporta SSR (Next.js) con guardias de `typeof window`
- Limpia recursos automáticamente en unmount
- Compatible con touch events en móviles
- No requiere configuración adicional para funcionar

---

**Implementado el:** 9 de Noviembre, 2025  
**Proyecto:** Rivus Innovation Landing Page  
**Ubicación:** `/components/GridScan.js` y `/components/GridScan.css`
