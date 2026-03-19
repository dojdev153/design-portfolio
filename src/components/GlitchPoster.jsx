import { useEffect, useRef } from 'react'

export default function GlitchPoster({ isGlitching }) {
    const ref = useRef(null)

    return (
        <>
            <style>{`
        .poster-wrapper {
          position: relative;
          width: 100%;
          border-radius: 16px;
          overflow: hidden;
          margin-top: 24px;
          /* Optional: aspect ratio for height mapping */
          aspect-ratio: 16/9;

          /* Initial glitch reveal on mount */
          animation: posterReveal 1.2s steps(3) forwards;
        }

        @keyframes posterReveal {
          0%   { opacity: 0; clip-path: inset(100% 0 0 0); }
          20%  { opacity: 1; clip-path: inset(60% 0 10% 0); transform: translateX(-6px); }
          40%  { clip-path: inset(20% 0 50% 0); transform: translateX(8px); }
          60%  { clip-path: inset(80% 0 5% 0);  transform: translateX(-4px); }
          80%  { clip-path: inset(10% 0 30% 0); transform: translateX(6px); }
          100% { opacity: 1; clip-path: inset(0% 0 0% 0); transform: translateX(0); }
        }

        .poster-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          border-radius: 16px;
        }

        /* Permanent scanlines on top of poster */
        .poster-scanlines {
          position: absolute;
          inset: 0;
          background: repeating-linear-gradient(
            to bottom,
            transparent 0px,
            transparent 3px,
            rgba(0, 0, 0, 0.18) 3px,
            rgba(0, 0, 0, 0.18) 4px
          );
          pointer-events: none;
          z-index: 2;
          border-radius: 16px;
        }

        /* Permanent noise grain */
        .poster-noise {
          position: absolute;
          inset: 0;
          pointer-events: none;
          z-index: 3;
          border-radius: 16px;
          opacity: 0.04;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
          background-repeat: repeat;
          background-size: 128px 128px;
        }

        /* Lime green corner brackets — cyber frame */
        .poster-corner {
          position: absolute;
          width: 20px;
          height: 20px;
          z-index: 4;
          pointer-events: none;
        }
        .poster-corner--tl { top: 10px;    left: 10px;    border-top: 2px solid #aaff00;  border-left: 2px solid #aaff00;  }
        .poster-corner--tr { top: 10px;    right: 10px;   border-top: 2px solid #aaff00;  border-right: 2px solid #aaff00; }
        .poster-corner--bl { bottom: 10px; left: 10px;    border-bottom: 2px solid #aaff00; border-left: 2px solid #aaff00;  }
        .poster-corner--br { bottom: 10px; right: 10px;   border-bottom: 2px solid #aaff00; border-right: 2px solid #aaff00; }

        /* Glitch triggered from parent transition */
        .poster-wrapper.is-glitching {
          animation: posterSync 0.6s steps(1) forwards;
        }

        @keyframes posterSync {
          0%   { clip-path: inset(10% 0 80% 0); transform: translateX(-8px);  filter: hue-rotate(90deg)  brightness(1.3); }
          15%  { clip-path: inset(60% 0 20% 0); transform: translateX(10px);  filter: hue-rotate(180deg) brightness(1.1); }
          30%  { clip-path: inset(30% 0 50% 0); transform: translateX(-5px) skewX(2deg); filter: hue-rotate(270deg); }
          45%  { clip-path: inset(70% 0 5% 0);  transform: translateX(12px);  filter: hue-rotate(0deg)   brightness(1.4); }
          60%  { clip-path: inset(5% 0 70% 0);  transform: translateX(-10px); filter: hue-rotate(90deg); }
          75%  { clip-path: inset(45% 0 30% 0); transform: translateX(6px);   filter: brightness(1.2); }
          100% { clip-path: inset(0% 0 0% 0);   transform: translateX(0);     filter: none; }
        }

        /* RGB ghost layers */
        .poster-ghost {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 16px;
          pointer-events: none;
          opacity: 0;
          z-index: 5;
        }

        .poster-wrapper.is-glitching .poster-ghost--red {
          opacity: 0.35;
          mix-blend-mode: screen;
          filter: url(#poster-red);
          animation: ghostR 0.6s steps(2) forwards;
        }

        .poster-wrapper.is-glitching .poster-ghost--blue {
          opacity: 0.35;
          mix-blend-mode: screen;
          filter: url(#poster-blue);
          animation: ghostB 0.6s steps(2) forwards;
        }

        @keyframes ghostR {
          0%   { transform: translateX(-8px); opacity: 0.5; }
          50%  { transform: translateX(5px);  opacity: 0.3; }
          100% { transform: translateX(0);    opacity: 0;   }
        }

        @keyframes ghostB {
          0%   { transform: translateX(8px);  opacity: 0.5; }
          50%  { transform: translateX(-5px); opacity: 0.3; }
          100% { transform: translateX(0);    opacity: 0;   }
        }

        /* Flash on glitch */
        .poster-flash {
          position: absolute;
          inset: 0;
          z-index: 6;
          pointer-events: none;
          border-radius: 16px;
          opacity: 0;
          background: rgba(170, 255, 0, 0.1);
        }

        .poster-wrapper.is-glitching .poster-flash {
          animation: posterFlash 0.6s ease-out forwards;
        }

        @keyframes posterFlash {
          0%   { opacity: 0.7; }
          40%  { opacity: 0.2; }
          100% { opacity: 0;   }
        }
      `}</style>

            {/* SVG filters for RGB split */}
            <svg style={{ position: 'absolute', width: 0, height: 0 }}>
                <defs>
                    <filter id="poster-red">
                        <feColorMatrix type="matrix"
                            values="1 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 1 0" />
                    </filter>
                    <filter id="poster-blue">
                        <feColorMatrix type="matrix"
                            values="0 0 0 0 0  0 0 0 0 0  0 0 1 0 0  0 0 0 1 0" />
                    </filter>
                </defs>
            </svg>

            <div
                ref={ref}
                className={`poster-wrapper ${isGlitching ? 'is-glitching' : ''}`}
            >
                {/* Main poster */}
                <img src="/images/profile-poster-banner.jpg" alt="Frank Duff Poster" className="poster-img" />

                {/* RGB ghost images */}
                <img src="/images/profile-poster-banner.jpg" alt="" className="poster-ghost poster-ghost--red" />
                <img src="/images/profile-poster-banner.jpg" alt="" className="poster-ghost poster-ghost--blue" />

                {/* Permanent overlays */}
                <div className="poster-scanlines" />
                <div className="poster-noise" />
                <div className="poster-flash" />

                {/* Cyber corner brackets */}
                <div className="poster-corner poster-corner--tl" />
                <div className="poster-corner poster-corner--tr" />
                <div className="poster-corner poster-corner--bl" />
                <div className="poster-corner poster-corner--br" />
            </div>
        </>
    )
}
