import { useEffect, useRef } from 'react'
// Ensemble de Julia qui réagit au pointeur. Rendu basse résolution, étiré en CSS.
export default function Fractal() {
  const ref = useRef(null)
  useEffect(() => {
    const cv = ref.current, ctx = cv.getContext('2d')
    const W = (cv.width = 200), H = (cv.height = 120), img = ctx.createImageData(W, H)
    const still = matchMedia('(prefers-reduced-motion: reduce)').matches
    let cx = -0.76, cy = 0.14, raf = 0
    const draw = () => {
      for (let y = 0; y < H; y++) for (let x = 0; x < W; x++) {
        let zx = (x / W - 0.5) * 3.2, zy = (y / H - 0.5) * 2, i = 0
        while (zx * zx + zy * zy < 4 && i < 42) { [zx, zy] = [zx * zx - zy * zy + cx, 2 * zx * zy + cy]; i++ }
        const k = (y * W + x) * 4, v = i === 42 ? 0 : 40 + (i / 42) * 215
        img.data[k] = v * 0.05; img.data[k + 1] = v * 0.72; img.data[k + 2] = v * 0.86; img.data[k + 3] = 255
      }
      ctx.putImageData(img, 0, 0); raf = 0
    }
    draw()
    if (still) return
    const move = (e) => {
      cx = -0.9 + (e.clientX / innerWidth) * 0.5; cy = 0.05 + (e.clientY / innerHeight) * 0.3
      if (!raf) raf = requestAnimationFrame(draw)
    }
    addEventListener('pointermove', move)
    return () => { removeEventListener('pointermove', move); cancelAnimationFrame(raf) }
  }, [])
  return <canvas ref={ref} className="fractal" aria-hidden="true" />
}
