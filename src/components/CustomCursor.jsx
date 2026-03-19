import { useEffect, useRef } from 'react'

export default function CustomCursor() {
    const dotRef = useRef(null)
    const ringRef = useRef(null)

    useEffect(() => {
        const dot = dotRef.current
        const ring = ringRef.current

        // Skip on touch devices
        if ('ontouchstart' in window || navigator.maxTouchPoints > 0) return

        let mouseX = 0, mouseY = 0
        let ringX = 0, ringY = 0
        let animId

        // Dot follows instantly
        const onMove = (e) => {
            mouseX = e.clientX
            mouseY = e.clientY
            if (dot) {
                dot.style.left = mouseX + 'px'
                dot.style.top = mouseY + 'px'
            }
        }

        // Ring lags behind with lerp
        const animateRing = () => {
            ringX += (mouseX - ringX) * 0.12
            ringY += (mouseY - ringY) * 0.12
            if (ring) {
                ring.style.left = ringX + 'px'
                ring.style.top = ringY + 'px'
            }
            animId = requestAnimationFrame(animateRing)
        }
        animId = requestAnimationFrame(animateRing)

        // Click ripple — spawns 3 ripples
        const spawnRipple = (x, y, delay, size) => {
            const r = document.createElement('div')
            r.style.cssText = `
        width: ${size}px; height: ${size}px;
        border: 1px solid rgba(170,255,0,0.6);
        border-radius: 50%;
        position: fixed;
        left: ${x}px; top: ${y}px;
        transform: translate(-50%, -50%) scale(1);
        opacity: 1;
        pointer-events: none;
        z-index: 99996;
        transition: transform 0.7s ease-out ${delay}s, opacity 0.7s ease-out ${delay}s;
      `
            document.body.appendChild(r)
            requestAnimationFrame(() => {
                r.style.transform = 'translate(-50%, -50%) scale(5)'
                r.style.opacity = '0'
            })
            setTimeout(() => r.remove(), (delay + 0.8) * 1000)
        }

        const onClick = (e) => {
            spawnRipple(e.clientX, e.clientY, 0, 36)
            spawnRipple(e.clientX, e.clientY, 0.08, 28)
            spawnRipple(e.clientX, e.clientY, 0.16, 20)
        }

        // Hover detection using event delegation
        const onMouseOver = (e) => {
            if (e.target.closest('a, button, [data-cursor]')) {
                if (ring) {
                    ring.style.width = '60px'
                    ring.style.height = '60px'
                    ring.style.borderColor = 'rgba(170,255,0,1)'
                    ring.style.background = 'rgba(170,255,0,0.08)'
                }
                if (dot) {
                    dot.style.opacity = '0'
                }
            }
        }

        const onMouseOut = (e) => {
            if (e.target.closest('a, button, [data-cursor]')) {
                if (ring) {
                    ring.style.width = '36px'
                    ring.style.height = '36px'
                    ring.style.borderColor = 'rgba(170,255,0,0.7)'
                    ring.style.background = 'rgba(170,255,0,0.04)'
                }
                if (dot) {
                    dot.style.opacity = '1'
                }
            }
        }

        const onLeave = () => {
            if (dot) dot.style.opacity = '0';
            if (ring) ring.style.opacity = '0'
        }
        const onEnter = () => {
            if (dot) dot.style.opacity = '1';
            if (ring) ring.style.opacity = '1'
        }

        document.addEventListener('mousemove', onMove)
        document.addEventListener('click', onClick)
        document.addEventListener('mouseover', onMouseOver)
        document.addEventListener('mouseout', onMouseOut)
        document.addEventListener('mouseleave', onLeave)
        document.addEventListener('mouseenter', onEnter)

        return () => {
            cancelAnimationFrame(animId)
            document.removeEventListener('mousemove', onMove)
            document.removeEventListener('click', onClick)
            document.removeEventListener('mouseover', onMouseOver)
            document.removeEventListener('mouseout', onMouseOut)
            document.removeEventListener('mouseleave', onLeave)
            document.removeEventListener('mouseenter', onEnter)
        }
    }, [])

    return (
        <>
            <div ref={dotRef} style={{
                width: '6px', height: '6px',
                background: '#aaff00',
                borderRadius: '50%',
                position: 'fixed',
                pointerEvents: 'none',
                zIndex: 999999,
                top: -10, left: -10, // hidden initially
                transform: 'translate(-50%, -50%)',
                transition: 'opacity 0.3s ease',
                mixBlendMode: 'difference',
            }} />
            <div ref={ringRef} style={{
                width: '36px', height: '36px',
                border: '1.5px solid rgba(170,255,0,0.7)',
                borderRadius: '50%',
                position: 'fixed',
                pointerEvents: 'none',
                zIndex: 999998,
                top: -100, left: -100, // hidden initially
                transform: 'translate(-50%, -50%)',
                transition: 'width 0.3s ease, height 0.3s ease, border-color 0.3s ease, background 0.3s ease, opacity 0.3s ease',
                backdropFilter: 'blur(2px)',
                background: 'rgba(170,255,0,0.04)',
            }} />
        </>
    )
}
