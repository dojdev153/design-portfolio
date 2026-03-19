import { useRef } from 'react'

export default function GlitchProfile({ phase = 'profile' }) {
  const containerRef = useRef(null)
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
          object-position: top center;
        }

        /* Profile: ALWAYS visible by default */
        .glitch-img--profile {
          filter: grayscale(100%);
          z-index: 1;
          opacity: 1;
        }

        /* Poster: hidden by default */
        .glitch-img--poster {
          z-index: 2;
          opacity: 0;
        }

        /* Show poster ONLY during poster phase */
        .glitch-container.phase-poster .glitch-img--poster,
        .glitch-container.phase-unglitching .glitch-img--poster {
          opacity: 1;
        }
        .glitch-container.phase-poster .glitch-img--profile,
        .glitch-container.phase-unglitching .glitch-img--profile {
          opacity: 0;
        }

        /* Glitch slice animation */
        .glitch-container.phase-glitching .glitch-img,
        .glitch-container.phase-unglitching .glitch-img {
          animation: imageSlices 0.15s steps(1) forwards;
        }

        @keyframes imageSlices {
          0%   { clip-path: inset(10% 0 80% 0); transform: translateX(-8px);            filter: hue-rotate(90deg)  brightness(1.5); }
          20%  { clip-path: inset(60% 0 20% 0); transform: translateX(10px);             filter: hue-rotate(180deg) brightness(2) saturate(3); }
          40%  { clip-path: inset(30% 0 50% 0); transform: translateX(-5px) skewX(2deg); filter: hue-rotate(270deg) brightness(1.8); }
          60%  { clip-path: inset(70% 0 5%  0); transform: translateX(12px);             filter: hue-rotate(0deg)   brightness(2.2); }
          80%  { clip-path: inset(5%  0 70% 0); transform: translateX(-10px);            filter: hue-rotate(90deg)  brightness(1.6); }
          100% { clip-path: inset(0%  0 0%  0); transform: translateX(0);                filter: none; }
        }

        /* Colored overlay slices */
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
          animation: overlaySlices 0.15s steps(1) forwards;
        }

        @keyframes overlaySlices {
          0%   { clip-path: inset(10% 0 80% 0); transform: translateX(-8px);              background: rgba(170,255,0,0.25); }
          20%  { clip-path: inset(60% 0 20% 0); transform: translateX(10px);               background: rgba(255,0,80,0.2);   }
          40%  { clip-path: inset(30% 0 50% 0); transform: translateX(-5px) skewX(3deg);   background: rgba(0,200,255,0.15); }
          60%  { clip-path: inset(70% 0 5%  0); transform: translateX(12px);               background: rgba(170,255,0,0.25); }
          80%  { clip-path: inset(5%  0 70% 0); transform: translateX(-10px) skewX(-2deg); background: rgba(255,0,80,0.15);  }
          100% { clip-path: inset(0%  0 0%  0); transform: translateX(0);                  opacity: 0; }
        }

        /* RGB channel ghosts */
        .glitch-channel {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: top center;
          z-index: 8;
          pointer-events: none;
          opacity: 0;
        }

        .glitch-container.phase-glitching .glitch-channel--red,
        .glitch-container.phase-unglitching .glitch-channel--red {
          opacity: 0.5;
          mix-blend-mode: screen;
          filter: url(#red-shift);
          animation: channelR 0.15s steps(2) forwards;
        }

        .glitch-container.phase-glitching .glitch-channel--blue,
        .glitch-container.phase-unglitching .glitch-channel--blue {
          opacity: 0.5;
          mix-blend-mode: screen;
          filter: url(#blue-shift);
          animation: channelB 0.15s steps(2) forwards;
        }

        @keyframes channelR {
          0%   { transform: translateX(-8px); opacity: 0.6; }
          50%  { transform: translateX(5px);  opacity: 0.3; }
          100% { transform: translateX(0);    opacity: 0;   }
        }

        @keyframes channelB {
          0%   { transform: translateX(8px);  opacity: 0.6; }
          50%  { transform: translateX(-5px); opacity: 0.3; }
          100% { transform: translateX(0);    opacity: 0;   }
        }

        /* Scanlines */
        .glitch-scanlines {
          position: absolute;
          inset: 0;
          z-index: 9;
          pointer-events: none;
          opacity: 0;
          background: repeating-linear-gradient(
            to bottom,
            transparent 0px, transparent 3px,
            rgba(0,0,0,0.35) 3px, rgba(0,0,0,0.35) 4px
          );
        }

        .glitch-container.phase-glitching .glitch-scanlines,
        .glitch-container.phase-unglitching .glitch-scanlines {
          animation: scanPulse 0.15s steps(3) forwards;
        }

        @keyframes scanPulse {
          0%   { opacity: 1;   }
          50%  { opacity: 0.5; }
          100% { opacity: 0;   }
        }

        /* Green flash */
        .glitch-flash {
          position: absolute;
          inset: 0;
          z-index: 11;
          pointer-events: none;
          opacity: 0;
          background: rgba(170,255,0,0.1);
        }

        .glitch-container.phase-glitching .glitch-flash,
        .glitch-container.phase-unglitching .glitch-flash {
          animation: flashPulse 0.15s steps(1) forwards;
        }

        @keyframes flashPulse {
          0%   { opacity: 0.7; }
          50%  { opacity: 0.3; }
          100% { opacity: 0;   }
        }
      `}</style>

      <svg style={{ position: 'absolute', width: 0, height: 0 }}>
        <defs>
          <filter id="red-shift">
            <feColorMatrix type="matrix" values="1 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 1 0" />
          </filter>
          <filter id="blue-shift">
            <feColorMatrix type="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 1 0 0  0 0 0 1 0" />
          </filter>
        </defs>
      </svg>

      <div
        ref={containerRef}
        className={`glitch-container phase-${phase}`}
      >
        {/* DEFAULT: grayscale profile photo — always visible at start */}
        <img
          src="/images/profile.png"
          alt="Frank Duff"
          className="glitch-img glitch-img--profile"
        />

        {/* GLITCHES TO: cyber poster */}
        <img
          src="/images/profile-poster-banner.jpg"
          alt="Frank Duff Poster"
          className="glitch-img glitch-img--poster"
        />

        {/* RGB ghost channels */}
        <img
          src={showPoster ? "/images/profile-poster-banner.jpg" : "/images/profile.png"}
          className="glitch-channel glitch-channel--red"
          alt=""
        />
        <img
          src={showPoster ? "/images/profile-poster-banner.jpg" : "/images/profile.png"}
          className="glitch-channel glitch-channel--blue"
          alt=""
        />

        <div className="glitch-overlay" />
        <div className="glitch-scanlines" />
        <div className="glitch-flash" />
      </div>
    </>
  )
}