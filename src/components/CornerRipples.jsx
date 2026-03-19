import { useEffect, useRef } from 'react'

export default function CornerRipples() {
    const topLeftRef = useRef(null)
    const topRightRef = useRef(null)

    useEffect(() => {
        const corners = [topLeftRef.current, topRightRef.current]

        // For each corner, stagger the rings so they feel continuous
        corners.forEach((corner, cornerIndex) => {
            if (!corner) return
            const rings = corner.querySelectorAll('.ripple-ring')

            rings.forEach((ring, i) => {
                // Each ring starts its animation at a different delay
                // so they appear one after another endlessly
                ring.style.animationDelay = `${i * 1.2 + cornerIndex * 0.4}s`
            })
        })
    }, [])

    return (
        <>
            {/* TOP LEFT */}
            <div
                ref={topLeftRef}
                style={{
                    position: 'fixed',
                    top: '-80px',
                    left: '-80px',
                    width: '320px',
                    height: '320px',
                    pointerEvents: 'none',
                    zIndex: 0,
                }}
            >
                {[0, 1, 2, 3].map(i => (
                    <div key={i} className="ripple-ring ripple-ring--left" />
                ))}
            </div>

            {/* TOP RIGHT */}
            <div
                ref={topRightRef}
                style={{
                    position: 'fixed',
                    top: '-80px',
                    right: '-80px',
                    width: '320px',
                    height: '320px',
                    pointerEvents: 'none',
                    zIndex: 0,
                }}
            >
                {[0, 1, 2, 3].map(i => (
                    <div key={i} className="ripple-ring ripple-ring--right" />
                ))}
            </div>
        </>
    )
}
