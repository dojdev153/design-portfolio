import { useEffect, useRef, useState } from 'react'

const STEPS = [
  '1 Month', '2 Months', '3 Months', '4 Months',
  '5 Months', '6 Months', '7 Months', '8 Months',
  '9 Months', '10 Months', '11 Months', '1 Year',
  '1.1 Years', '1.2 Years', '1.3 Years', '1.4 Years',
  '1.5 Years',
]

export default function ExperienceCounter() {
  const [index, setIndex] = useState(0)
  const [direction, setDirection] = useState('up')
  const [animKey, setAnimKey] = useState(0)
  const [paused, setPaused] = useState(false)
  const [exiting, setExiting] = useState(false)
  const [displayIndex, setDisplayIndex] = useState(0)
  const dirRef = useRef('up')

  useEffect(() => {
    if (paused || exiting) return

    const interval = setInterval(() => {
      // Step 1 — trigger EXIT animation on current word
      setExiting(true)

      // Step 2 — after exit completes, swap word and trigger ENTER
      setTimeout(() => {
        setIndex(prev => {
          const atTop = prev === STEPS.length - 1
          const atBottom = prev === 0
          const goingUp = dirRef.current === 'up'
          let next = prev

          if (goingUp && atTop) {
            // Pause at 1.5 Years then reverse
            setPaused(true)
            setTimeout(() => {
              dirRef.current = 'down'
              setDirection('down')
              setPaused(false)
            }, 3000)
            return prev
          } else if (!goingUp && atBottom) {
            dirRef.current = 'up'
            setDirection('up')
            next = prev + 1
          } else {
            next = goingUp ? prev + 1 : prev - 1
          }

          setDisplayIndex(next)   // update what's visible
          return next
        })

        setExiting(false)         // trigger enter animation
        setAnimKey(k => k + 1)
      }, 380)                     // exit duration — must match CSS exit animation length

    }, 1100)  // total step time = exit(380) + enter(720) — must be > both combined

    return () => clearInterval(interval)
  }, [paused, exiting])

  const chars = STEPS[displayIndex].split('')

  return (
    <>
      <style>{`
        .exp-wrapper {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: inherit;
        }

        .exp-label {
          color: rgba(255,255,255,0.5);
          font-size: inherit;
          font-weight: 400;
        }

        .exp-slot {
          display: inline-flex;
          overflow: hidden;
          height: 1.25em;
          line-height: 1.25em;
          align-items: flex-end;
        }

        .exp-char {
          display: inline-block;
          font-weight: 700;
          color: #aaff00;
          white-space: pre;
          will-change: transform, opacity;
        }

        /* ENTER — chars slide in from BELOW */
        .exp-char.dir-up {
          animation: charSlideUp var(--dur) cubic-bezier(0.16, 1, 0.3, 1) var(--delay) both;
        }

        /* ENTER — chars slide in from ABOVE */
        .exp-char.dir-down {
          animation: charSlideDown var(--dur) cubic-bezier(0.16, 1, 0.3, 1) var(--delay) both;
        }

        /* EXIT — chars slide out UPWARD */
        .exp-char.dir-up-exit {
          animation: charSlideUpExit var(--dur) cubic-bezier(0.16, 1, 0.3, 1) var(--delay) both;
        }

        /* EXIT — chars slide out DOWNWARD */
        .exp-char.dir-down-exit {
          animation: charSlideDownExit var(--dur) cubic-bezier(0.16, 1, 0.3, 1) var(--delay) both;
        }

        @keyframes charSlideUp {
          0%   { transform: translateY(110%);  opacity: 0; }
          60%  { opacity: 1; }
          100% { transform: translateY(0%);    opacity: 1; }
        }

        @keyframes charSlideDown {
          0%   { transform: translateY(-110%); opacity: 0; }
          60%  { opacity: 1; }
          100% { transform: translateY(0%);    opacity: 1; }
        }

        @keyframes charSlideUpExit {
          0%   { transform: translateY(0%);    opacity: 1; }
          100% { transform: translateY(-110%); opacity: 0; }
        }

        @keyframes charSlideDownExit {
          0%   { transform: translateY(0%);   opacity: 1; }
          100% { transform: translateY(110%); opacity: 0; }
        }
      `}</style>

      <span className="exp-wrapper">
        <span className="exp-label">Experience:</span>
        <span className="exp-slot">
          {chars.map((char, i) => {
            const total = chars.length
            const reversed = total - 1 - i

            // Exit: left-to-right stagger
            const exitDelayMs = i * 30
            const exitDurationMs = 300

            // Enter: right-to-left stagger (reversed)
            const delayMs = reversed * 55
            const durationMs = 500 + reversed * 40

            return (
              <span
                key={`${animKey}-${i}`}
                className={
                  exiting
                    ? `exp-char dir-${direction}-exit`
                    : `exp-char dir-${direction}`
                }
                style={{
                  '--delay': exiting ? `${exitDelayMs}ms` : `${delayMs}ms`,
                  '--dur': exiting ? `${exitDurationMs}ms` : `${durationMs}ms`,
                }}
              >
                {char}
              </span>
            )
          })}
        </span>
      </span>
    </>
  )
}
