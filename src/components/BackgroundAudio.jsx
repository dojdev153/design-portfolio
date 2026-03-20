import { useEffect, useRef, useState } from 'react'

export default function BackgroundAudio() {
  const audioRef = useRef(null)
  const [playing, setPlaying] = useState(false)
  const [volume, setVolume] = useState(0.3)   // 30% default — not too loud

  useEffect(() => {
    const audio = audioRef.current
    audio.volume = volume
    audio.loop = true

    // Browsers block autoplay until user interacts with page
    // This tries to play on first ANY click/key anywhere on the page
    const tryPlay = () => {
      audio.play()
        .then(() => {
          setPlaying(true)
          // Remove listeners once playing starts
          document.removeEventListener('click', tryPlay)
          document.removeEventListener('keydown', tryPlay)
          document.removeEventListener('scroll', tryPlay)
        })
        .catch(() => { }) // silently ignore if blocked
    }

    document.addEventListener('click', tryPlay)
    document.addEventListener('keydown', tryPlay)
    document.addEventListener('scroll', tryPlay)

    return () => {
      document.removeEventListener('click', tryPlay)
      document.removeEventListener('keydown', tryPlay)
      document.removeEventListener('scroll', tryPlay)
      audio.pause()
    }
  }, [])

  // Sync volume changes
  useEffect(() => {
    if (audioRef.current) audioRef.current.volume = volume
  }, [volume])

  const toggle = () => {
    const audio = audioRef.current
    if (playing) {
      audio.pause()
      setPlaying(false)
    } else {
      audio.play()
      setPlaying(true)
    }
  }

  return (
    <>
      <style>{`
        .audio-control {
          position: fixed;
          bottom: 28px;
          right: 28px;
          z-index: 9000;
          display: flex;
          align-items: center;
          gap: 10px;
        }

        /* Volume slider — hidden by default, shows on hover */
        .audio-slider-wrap {
          width: 0px;
          overflow: hidden;
          transition: width 0.3s ease;
          display: flex;
          align-items: center;
        }

        .audio-control:hover .audio-slider-wrap {
          width: 80px;
        }

        .audio-slider {
          -webkit-appearance: none;
          appearance: none;
          width: 80px;
          height: 3px;
          background: rgba(170,255,0,0.3);
          border-radius: 2px;
          outline: none;
          cursor: pointer;
        }

        .audio-slider::-webkit-slider-thumb {
          -webkit-appearance: none;
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: #aaff00;
          cursor: pointer;
        }

        /* Play/pause button */
        .audio-btn {
          width: 42px;
          height: 42px;
          border-radius: 50%;
          border: 1.5px solid rgba(170,255,0,0.6);
          background: rgba(170,255,0,0.06);
          backdrop-filter: blur(10px);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: background 0.2s, border-color 0.2s, transform 0.2s;
          flex-shrink: 0;
        }

        .audio-btn:hover {
          background: rgba(170,255,0,0.15);
          border-color: #aaff00;
          transform: scale(1.08);
        }

        /* Pulsing ring when playing */
        .audio-btn.is-playing {
          box-shadow: 0 0 0 0 rgba(170,255,0,0.4);
          animation: audioPulse 2s ease-out infinite;
        }

        @keyframes audioPulse {
          0%   { box-shadow: 0 0 0 0px  rgba(170,255,0,0.4); }
          70%  { box-shadow: 0 0 0 10px rgba(170,255,0,0);   }
          100% { box-shadow: 0 0 0 0px  rgba(170,255,0,0);   }
        }

        /* Sound wave bars icon when playing */
        .sound-bars {
          display: flex;
          align-items: flex-end;
          gap: 2px;
          height: 14px;
        }

        .sound-bar {
          width: 3px;
          background: #aaff00;
          border-radius: 2px;
          transform-origin: bottom;
        }

        .is-playing .sound-bar:nth-child(1) { animation: bar1 0.8s ease-in-out infinite; }
        .is-playing .sound-bar:nth-child(2) { animation: bar2 0.8s ease-in-out infinite 0.15s; }
        .is-playing .sound-bar:nth-child(3) { animation: bar3 0.8s ease-in-out infinite 0.3s; }
        .is-playing .sound-bar:nth-child(4) { animation: bar4 0.8s ease-in-out infinite 0.1s; }

        @keyframes bar1 { 0%,100%{height:4px}  50%{height:14px} }
        @keyframes bar2 { 0%,100%{height:10px} 50%{height:4px}  }
        @keyframes bar3 { 0%,100%{height:6px}  50%{height:12px} }
        @keyframes bar4 { 0%,100%{height:12px} 50%{height:5px}  }

        /* Muted icon */
        .mute-icon {
          width: 16px;
          height: 16px;
          color: #aaff00;
        }
      `}</style>

      {/* Hidden audio element */}
      <audio ref={audioRef} src="/audio/background.mp3" preload="auto" />

      {/* Fixed bottom-right control */}
      <div className="audio-control">

        {/* Volume slider — slides out on hover */}
        <div className="audio-slider-wrap">
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={volume}
            onChange={e => setVolume(parseFloat(e.target.value))}
            className="audio-slider"
          />
        </div>

        {/* Play / Pause button */}
        <button
          onClick={toggle}
          className={`audio-btn ${playing ? 'is-playing' : ''}`}
          title={playing ? 'Pause music' : 'Play music'}
        >
          {playing ? (
            /* Animated sound bars when playing */
            <div className="sound-bars">
              <div className="sound-bar" style={{ height: '4px' }} />
              <div className="sound-bar" style={{ height: '10px' }} />
              <div className="sound-bar" style={{ height: '6px' }} />
              <div className="sound-bar" style={{ height: '12px' }} />
            </div>
          ) : (
            /* Static mute icon when paused */
            <svg className="mute-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
              <line x1="23" y1="9" x2="17" y2="15" />
              <line x1="17" y1="9" x2="23" y2="15" />
            </svg>
          )}
        </button>

      </div>
    </>
  )
}
