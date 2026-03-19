import { useEffect, useRef } from 'react'

export default function StarField() {
    const canvasRef = useRef(null)

    useEffect(() => {
        const canvas = canvasRef.current
        const ctx = canvas.getContext('2d')
        let animId

        // Match canvas to hero section size
        const resize = () => {
            canvas.width = canvas.offsetWidth
            canvas.height = canvas.offsetHeight
        }
        resize()
        window.addEventListener('resize', resize)

        // Generate stars once
        const STAR_COUNT = 180
        const stars = Array.from({ length: STAR_COUNT }, () => ({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            radius: Math.random() * 1.2 + 0.3,   // 0.3px – 1.5px
            opacity: Math.random() * 0.7 + 0.2,   // 0.2 – 0.9
            speed: Math.random() * 0.4 + 0.1,   // twinkle speed
            phase: Math.random() * Math.PI * 2, // offset so they don't all pulse together
        }))

        let time = 0

        const draw = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height)

            stars.forEach(star => {
                // Twinkle: opacity pulses using sine wave
                const twinkle = star.opacity * (0.5 + 0.5 * Math.sin(time * star.speed + star.phase))

                ctx.beginPath()
                ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2)
                ctx.fillStyle = `rgba(255, 255, 255, ${twinkle})`
                ctx.fill()
            })

            time += 0.05
            animId = requestAnimationFrame(draw)
        }

        draw()

        return () => {
            cancelAnimationFrame(animId)
            window.removeEventListener('resize', resize)
        }
    }, [])

    return (
        <canvas
            ref={canvasRef}
            style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                pointerEvents: 'none',
                zIndex: 0,
            }}
        />
    )
}
