import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import GlitchProfile from './GlitchProfile';

const About = () => {
    const skills = [
        'Visual Design', 'UI/UX Design', 'Branding', 'Photography',
        'Figma', 'Photoshop', 'Adobe XD', 'Framer', 'Canva',
        'Logo Design', 'Web Design', 'Typography', 'Illustration', 'Digital Art'
    ];

    const [phase, setPhase] = useState('profile');
    const [posterGlitch, setPosterGlitch] = useState(false);

    useEffect(() => {
        let cycleTimeout;

        const cycle = () => {
            // Glitch in
            setPhase('glitching');
            setPosterGlitch(true);

            // Show poster after glitch (0.15s)
            cycleTimeout = setTimeout(() => {
                setPhase('poster');
                setPosterGlitch(false);

                // Hold poster for exactly 0.5s as previously requested
                cycleTimeout = setTimeout(() => {
                    // Glitch out
                    setPhase('unglitching');
                    setPosterGlitch(true);

                    // Return to clean profile (0.15s)
                    cycleTimeout = setTimeout(() => {
                        setPhase('profile');
                        setPosterGlitch(false);

                        // Stay on default profile for 0.5 seconds before looping to poster
                        cycleTimeout = setTimeout(cycle, 500);
                    }, 150);
                }, 500); // <-- 0.5 sec poster visibility
            }, 150);
        };

        // Start correctly with profile Default, delay first glitch
        setPhase('profile');
        cycleTimeout = setTimeout(cycle, 500);

        return () => clearTimeout(cycleTimeout);
    }, []);

    return (
        <section
            id="about"
            style={{
                padding: '80px 24px',        /* controlled padding — no excess */
                background: '#060806',
                position: 'relative',
                overflow: 'hidden',
            }}
        >
            <div style={{
                maxWidth: '1280px',
                margin: '0 auto',
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                gap: '60px',
                flexWrap: 'wrap',
            }}>

                {/* ── LEFT COLUMN ── */}
                <div style={{
                    flexShrink: 0,
                    width: '400px',          /* fixed width */
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '16px',
                }}>
                    {/* Profile card — tall enough to show face */}
                    <div style={{ width: '400px', height: '500px' }}>
                        <GlitchProfile phase={phase} />
                    </div>
                </div>

                {/* ── RIGHT COLUMN ── */}
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    style={{ flex: 1, minWidth: '280px' }}
                >
                    <h2 style={{
                        color: '#aaff00',
                        fontSize: '14px',
                        fontWeight: 700,
                        letterSpacing: '0.15em',
                        textTransform: 'uppercase',
                        marginBottom: '16px',
                    }}>
                        About Me
                    </h2>
                    <h3 style={{
                        fontSize: 'clamp(36px, 5vw, 64px)',
                        fontWeight: 900,
                        color: 'white',
                        fontStyle: 'italic',
                        textTransform: 'uppercase',
                        marginBottom: '24px',
                        lineHeight: 1.1,
                    }}>
                        Creative Designer
                    </h3>

                    <p style={{
                        color: 'rgba(255,255,255,0.5)',
                        fontSize: '17px',
                        lineHeight: 1.75,
                        marginBottom: '32px',
                    }}>
                        I'm HITAYEZU FRANK DUFF, a passionate Visual & Digital Designer with over
                        1.5 years of experience crafting premium digital experiences. I specialize
                        in merging aesthetics with functionality to create interfaces that not only
                        look stunning but also feel alive. I am specialized in digital art using
                        graphic tablets – since that's how I create my graphics.
                    </p>

                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                        {skills.map((skill) => (
                            <span
                                key={skill}
                                style={{
                                    padding: '8px 18px',
                                    borderRadius: '999px',
                                    border: '1px solid rgba(255,255,255,0.15)',
                                    fontSize: '10px',
                                    fontWeight: 700,
                                    color: 'white',
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.1em',
                                    background: 'rgba(255,255,255,0.04)',
                                    cursor: 'default',
                                    transition: 'border-color 0.2s',
                                }}
                                onMouseEnter={e => e.target.style.borderColor = '#aaff00'}
                                onMouseLeave={e => e.target.style.borderColor = 'rgba(255,255,255,0.15)'}
                            >
                                {skill}
                            </span>
                        ))}
                    </div>
                </motion.div>

            </div>
        </section>
    );
};

export default About;