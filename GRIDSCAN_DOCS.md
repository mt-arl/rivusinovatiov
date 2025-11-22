# GridScan Component - WebGL 3D Grid Effect

## Overview
The GridScan component is a sophisticated WebGL-powered background effect using Three.js and GLSL shaders to create an interactive 3D grid with scanning animation effects.

## Installation
The component requires the following dependencies (already installed):
```bash
npm install three postprocessing face-api.js
```

## Files
- `components/GridScan.js` - Main component with WebGL renderer and shaders
- `components/GridScan.css` - Styles for optional webcam preview overlay

## Basic Usage
```jsx
import GridScan from './components/GridScan'

<div style={{ width: '100%', height: '600px', position: 'relative' }}>
  <GridScan
    sensitivity={0.55}
    lineThickness={1}
    linesColor="#392e4e"
    gridScale={0.1}
    scanColor="#11b783"
    scanOpacity={0.4}
    enablePost
    bloomIntensity={0.6}
    chromaticAberration={0.002}
    noiseIntensity={0.01}
  />
</div>
```

## Props

### Visual Properties
- **linesColor** (string, default: '#392e4e') - Grid line color in hex
- **scanColor** (string, default: '#11b783') - Scan wave color in hex (rgb(17, 183, 131) = emerald green)
- **lineThickness** (number, default: 1) - Grid line width multiplier
- **gridScale** (number, default: 0.1) - Grid cell size (lower = larger cells)
- **scanOpacity** (number, default: 0.4) - Opacity of the scan wave (0-1)

### Animation Properties
- **scanDirection** (string, default: 'pingpong') - Scan direction: 'forward', 'backward', 'pingpong'
- **scanDuration** (number, default: 2.0) - Duration of one scan cycle in seconds
- **scanDelay** (number, default: 2.0) - Delay between scans in seconds
- **scanGlow** (number, default: 0.5) - Width of the scan glow effect
- **scanSoftness** (number, default: 2) - Softness/blur of scan edge
- **scanPhaseTaper** (number, default: 0.9) - Fade in/out at scan start/end (0-0.49)

### Line Style
- **lineStyle** (string, default: 'solid') - Line appearance: 'solid', 'dashed', 'dotted'
- **lineJitter** (number, default: 0.1) - Amount of animated line jitter (0-1)

### Post-Processing Effects
- **enablePost** (boolean, default: true) - Enable bloom and chromatic aberration
- **bloomIntensity** (number, default: 0) - Bloom glow intensity (0-1+)
- **bloomThreshold** (number, default: 0) - Brightness threshold for bloom
- **bloomSmoothing** (number, default: 0) - Bloom smoothness
- **chromaticAberration** (number, default: 0.002) - RGB color split effect
- **noiseIntensity** (number, default: 0.01) - Film grain noise amount

### Interaction
- **sensitivity** (number, default: 0.55) - Mouse tracking sensitivity (0-1)
- **snapBackDelay** (number, default: 250) - Delay before returning to center after mouse leave (ms)
- **scanOnClick** (boolean, default: false) - Trigger additional scan waves on click

### Advanced Features (Optional)
- **enableWebcam** (boolean, default: false) - Enable face tracking via webcam
- **showPreview** (boolean, default: false) - Show webcam preview overlay
- **enableGyro** (boolean, default: false) - Enable device orientation tracking
- **modelsPath** (string) - URL for face-api.js models (if using webcam)

### Style Props
- **className** (string) - Additional CSS class
- **style** (object) - Inline styles for container

## Features

### 1. **3D Perspective Grid**
- Uses GLSL ray-marching to create a 3D grid with proper perspective
- Grid rendered on 4 intersecting planes for depth effect
- Automatic fade-out based on distance

### 2. **Interactive Mouse Tracking**
- Grid tilts and skews based on mouse position
- Smooth physics-based camera movement (damping)
- Auto-returns to center when mouse leaves (configurable delay)

### 3. **Scanning Wave Animation**
- Animated scan wave sweeps through the grid
- Gaussian blur-based glow effect
- Configurable direction (forward/backward/pingpong)
- Multiple concurrent scans supported (up to 8)

### 4. **Post-Processing Pipeline**
- **Bloom Effect**: Glowing highlights on bright areas
- **Chromatic Aberration**: RGB color separation for retro feel
- **Film Grain**: Subtle noise for organic texture

### 5. **Optional Advanced Features**
- Face tracking via webcam (requires face-api.js models)
- Device gyroscope support for mobile tilt tracking
- Click-to-trigger scan waves

## Implementation in Hero Section

Current setup in `components/Hero.js`:
```jsx
<div style={{ 
  position: 'absolute', 
  top: 0, 
  left: 0, 
  width: '100%', 
  height: '100%', 
  zIndex: 0, 
  pointerEvents: 'none' 
}}>
  <GridScan
    sensitivity={0.55}
    lineThickness={1}
    linesColor="rgba(17, 183, 131, 0.15)"
    gridScale={0.1}
    scanColor="#11b783"
    scanOpacity={0.4}
    enablePost
    bloomIntensity={0.6}
    chromaticAberration={0.002}
    noiseIntensity={0.01}
  />
</div>
```

## Performance Notes

### Optimization
- Uses WebGL hardware acceleration
- Pixel ratio capped at 2x for performance
- Single full-screen quad with shader (minimal geometry)
- requestAnimationFrame for smooth 60fps
- Auto-resizes on window resize

### Browser Support
- Requires WebGL support (all modern browsers)
- Face tracking requires getUserMedia API (optional feature)
- Gyroscope requires DeviceOrientation API (optional feature)

## Color Matching
The component uses **rgb(17, 183, 131)** (emerald green) to match your brand colors:
- Scan color: `#11b783` 
- Line color: `rgba(17, 183, 131, 0.15)` (15% opacity for subtle grid)

This matches the GooeyButton component for consistent visual identity.

## Customization Examples

### Subtle Background (Current)
```jsx
<GridScan
  linesColor="rgba(17, 183, 131, 0.15)"
  scanColor="#11b783"
  scanOpacity={0.4}
  bloomIntensity={0.6}
/>
```

### Bold Cyberpunk Style
```jsx
<GridScan
  linesColor="#00ffff"
  scanColor="#ff00ff"
  scanOpacity={0.8}
  bloomIntensity={1.2}
  chromaticAberration={0.005}
  lineStyle="dotted"
/>
```

### Minimal Clean
```jsx
<GridScan
  linesColor="rgba(255, 255, 255, 0.1)"
  scanColor="#ffffff"
  scanOpacity={0.2}
  bloomIntensity={0}
  lineThickness={0.5}
/>
```

## Troubleshooting

### Grid not visible
- Check that parent has explicit width/height
- Verify `linesColor` has sufficient opacity
- Increase `lineThickness` to 2-3 for testing

### Performance issues
- Reduce `bloomIntensity` or set `enablePost={false}`
- Lower pixel ratio (modify component line: `Math.min(window.devicePixelRatio || 1, 2)`)
- Increase `gridScale` (fewer grid lines)

### Scan not animating
- Ensure `scanOpacity > 0`
- Check `scanColor` is visible against background
- Verify `scanDuration` and `scanDelay` are reasonable (>0.5s)

## Source
Based on React Bits GridScan component with GLSL shaders for 3D perspective grid rendering.
