import { useRef } from 'react'

export default function GlitchProfile({ phase = 'profile' }) {
  const containerRef = useRef(null)

  const isGlitching = phase === 'glitching' || phase === 'unglitching'
  const showPoster = phase === 'poster' || phase === 'unglitching'

  return (
    <>
      <style>{`
        .glitch-container {
          position: relative;
          width: 100%;
          height: 100%;
          overflow: hidden;
          border-radius: 1.5rem;
        }

        .glitch-img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: opacity 0.1s;
        }

        .glitch-img--profile {
          filter: grayscale(100%);
          z-index: 1;
        }

        .glitch-img--poster {
          z-index: 2;
          opacity: 0;
        }

        /* Poster visible */
        .glitch-container.phase-poster .glitch-img--poster {
          opacity: 1;
        }
        .glitch-container.phase-poster .glitch-img--profile {
          opacity: 0;
        }

        /* ── Glitch slices ── */
        .glitch-overlay {
          position: absolute;
          inset: 0;
          z-index: 10;
          pointer-events: none;
          opacity: 0;
        }

        .glitch-container.phase-glitching .glitch-overlay,
        .glitch-container.phase-unglitching .glitch-overlay {
          opacity: 1;
          animation: glitchSlices 0.6s steps(1) forwards;
        }

        @keyframes glitchSlices {
          0%  {
            clip-path: inset(10% 0 80% 0);
            transform: translateX(-8px);
            background: rgba(170,255,0,0.15);
          }
          10% {
            clip-path: inset(60% 0 20% 0);
            transform: translateX(10px);
            background: rgba(255,0,80,0.15);
          }
          20% {
            clip-path: inset(30% 0 50% 0);
            transform: translateX(-5px) skewX(3deg);
            background: rgba(0,200,255,0.1);
          }
          30% {
            clip-path: inset(70% 0 5% 0);
            transform: translateX(12px);
            background: rgba(170,255,0,0.2);
          }
          40% {
            clip-path: inset(5% 0 70% 0);
            transform: translateX(-10px) skewX(-2deg);
            background: rgba(255,0,80,0.1);
          }
          50% {
            clip-path: inset(45% 0 30% 0);
            transform: translateX(6px);
            background: rgba(170,255,0,0.15);
          }
          60% {
            clip-path: inset(80% 0 2% 0);
            transform: translateX(-14px) skewX(4deg);
            background: rgba(0,200,255,0.15);
          }
          70% {
            clip-path: inset(20% 0 60% 0);
            transform: translateX(8px);
            background: rgba(170,255,0,0.1);
          }
          80% {
            clip-path: inset(55% 0 15% 0);
            transform: translateX(-6px) skewX(-3deg);
            background: rgba(255,0,80,0.2);
          }
          90% {
            clip-path: inset(15% 0 75% 0);
            transform: translateX(4px);
            background: rgba(0,200,255,0.1);
          }
          100% {
            clip-path: inset(0% 0 0% 0);
            transform: translateX(0);
            opacity: 0;
          }
        }

        /* RGB channel split during glitch */
        .glitch-channel {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          z-index: 8;
          pointer-events: none;
          opacity: 0;
        }

        .glitch-container.phase-glitching .glitch-channel--red,
        .glitch-container.phase-unglitching .glitch-channel--red {
          opacity: 0.4;
          mix-blend-mode: screen;
          filter: url(#red-shift);
          animation: channelR 0.6s steps(2) forwards;
        }

        .glitch-container.phase-glitching .glitch-channel--blue,
        .glitch-container.phase-unglitching .glitch-channel--blue {
          opacity: 0.4;
          mix-blend-mode: screen;
          animation: channelB 0.6s steps(2) forwards;
        }

        @keyframes channelR {
          0%   { transform: translateX(-6px); opacity: 0.5; }
          50%  { transform: translateX(4px);  opacity: 0.3; }
          100% { transform: translateX(0);    opacity: 0;   }
        }

        @keyframes channelB {
          0%   { transform: translateX(6px);  opacity: 0.5; }
          50%  { transform: translateX(-4px); opacity: 0.3; }
          100% { transform: translateX(0);    opacity: 0;   }
        }

        /* Scanlines overlay during glitch */
        .glitch-scanlines {
          position: absolute;
          inset: 0;
          z-index: 9;
          pointer-events: none;
          opacity: 0;
          background: repeating-linear-gradient(
            to bottom,
            transparent 0px,
            transparent 3px,
            rgba(0,0,0,0.3) 3px,
            rgba(0,0,0,0.3) 4px
          );
        }

        .glitch-container.phase-glitching .glitch-scanlines,
        .glitch-container.phase-unglitching .glitch-scanlines {
          animation: scanPulse 0.6s steps(3) forwards;
        }

        @keyframes scanPulse {
          0%   { opacity: 0.8; }
          50%  { opacity: 0.4; }
          100% { opacity: 0;   }
        }

        /* Green screen flash on glitch start */
        .glitch-flash {
          position: absolute;
          inset: 0;
          z-index: 11;
          pointer-events: none;
          opacity: 0;
          background: rgba(170,255,0,0.08);
        }

        .glitch-container.phase-glitching .glitch-flash,
        .glitch-container.phase-unglitching .glitch-flash {
          animation: flashPulse 0.6s ease-out forwards;
        }

        @keyframes flashPulse {
          0%   { opacity: 0.6; }
          30%  { opacity: 0.2; }
          100% { opacity: 0;   }
        }
      `}</style>

      {/* SVG filter for red channel shift */}
      <svg style={{ position: 'absolute', width: 0, height: 0 }}>
        <defs>
          <filter id="red-shift">
            <feColorMatrix type="matrix"
              values="1 0 0 0 0
                      0 0 0 0 0
                      0 0 0 0 0
                      0 0 0 1 0" />
          </filter>
        </defs>
      </svg>

      <div
        ref={containerRef}
        className={`glitch-container phase-${phase}`}
      >
        {/* Profile image */}
        <img
          src="/images/profile.png"
          alt="Frank Duff"
          className="glitch-img glitch-img--profile"
        />

        {/* Poster image */}
        <img
          src="/images/profile-poster-banner.jpg"
          alt="Frank Duff Poster"
          className="glitch-img glitch-img--poster"
        />

        {/* RGB channel ghosts */}
        <img src={showPoster ? "/images/profile-poster-banner.jpg" : "/images/profile.png"} className="glitch-channel glitch-channel--red" alt="" />
        <img src={showPoster ? "/images/profile-poster-banner.jpg" : "/images/profile.png"} className="glitch-channel glitch-channel--blue" alt="" />

        {/* Glitch overlays */}
        <div className="glitch-overlay" />
        <div className="glitch-scanlines" />
        <div className="glitch-flash" />
      </div>
    </>
  )
}
