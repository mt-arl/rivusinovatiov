const fs = require('fs')
const path = require('path')

const repoRoot = path.resolve(__dirname, '..')
const publicDir = path.join(repoRoot, 'public')
const targetBase = path.join(publicDir, 'images')

const ensure = (p) => { if (!fs.existsSync(p)) fs.mkdirSync(p, { recursive: true }) }

ensure(publicDir)
ensure(targetBase)

const files = fs.readdirSync(repoRoot)

const phoneDir = path.join(targetBase, 'phone')
const screenshotDir = path.join(targetBase, 'screenshot')
const logoDir = path.join(targetBase, 'logo')
const otherDir = path.join(targetBase, 'others')

ensure(phoneDir)
ensure(screenshotDir)
ensure(logoDir)
ensure(otherDir)

const move = (src, dest) => {
  try {
    fs.renameSync(src, dest)
    console.log('moved', path.basename(src), '->', dest)
  } catch (e) {
    console.error('failed to move', src, e.message)
  }
}

files.forEach(f => {
  const lower = f.toLowerCase()
  const src = path.join(repoRoot, f)
  if (!fs.statSync(src).isFile()) return

  if (lower.includes('whatsapp')) {
    move(src, path.join(phoneDir, f))
  } else if (lower.includes('captura') || lower.includes('screenshot')) {
    move(src, path.join(screenshotDir, f))
  } else if (lower.includes('rivus') && (lower.endsWith('.png') || lower.endsWith('.jpg') || lower.endsWith('.jpeg'))) {
    move(src, path.join(logoDir, f))
  } else if (lower.endsWith('.jpg') || lower.endsWith('.png') || lower.endsWith('.jpeg')) {
    move(src, path.join(otherDir, f))
  }
})

console.log('Done organizing images. Files now under public/images')
