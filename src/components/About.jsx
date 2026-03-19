import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import GlitchProfile from './GlitchProfile';
import GlitchPoster from './GlitchPoster';

const About = () => {
    const skills = [
        'Visual Design', 'UI/UX Design', 'Branding', 'Photography',
        'Figma', 'Photoshop', 'Adobe XD', 'Framer', 'Canva',
        'Logo Design', 'Web Design', 'Typography', 'Illustration', 'Digital Art'
    ];

    const [phase, setPhase] = useState('profile');
    const [posterGlitch, setPosterGlitch] = useState(false);

    useEffect(() => {
        const cycle = () => {
            // SNAP to glitching instantly
            setPhase('glitching');
            setPosterGlitch(true);

            // After 150ms glitch → show poster
            setTimeout(() => {
                setPhase('poster');
                setPosterGlitch(false);

                // Hold poster for 1.5s then glitch back
                setTimeout(() => {
                    setPhase('unglitching');
                    setPosterGlitch(true);

                    // After 150ms glitch → back to profile
                    setTimeout(() => {
                        setPhase('profile');
                        setPosterGlitch(false);
                    }, 150);

                }, 1500);
            }, 150);
        };

        // NO initial delay — starts immediately on load
        cycle();

        // Loops every 3.5s (150 + 1500 + 150 + buffer)
        const interval = setInterval(cycle, 3500);

        return () => clearInterval(interval);
    }, []);

    return (
        <section id="about" className="py-32 px-6 bg-[#060806] relative overflow-hidden">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-20">
                {/* Image Section */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    style={{ position: 'relative', width: '45%', display: 'flex', flexDirection: 'column', gap: '24px' }}
                >
                    <GlitchProfile phase={phase} />
                    <GlitchPoster isGlitching={posterGlitch} />
                </motion.div>

                {/* Content Section */}
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="w-full lg:w-1/2"
                >
                    <h2 className="text-accent-green font-display text-lg font-bold tracking-widest uppercase mb-4">About Me</h2>
                    <h3 className="text-5xl md:text-7xl font-display font-black text-white italic uppercase mb-8">Creative Designer</h3>

                    <p className="text-gray-400 text-lg leading-relaxed mb-10">
                        I'm HITAYEZU FRANK DUFF, a passionate Visual & Digital Designer with over 1.5 years of experience crafting premium digital experiences. I specialize in merging aesthetics with functionality to create interfaces that not only look stunning but also feel alive. I am specialized in digital art using graphic tablets - since that's how I create my graphics.
                    </p>

                    <div className="flex flex-wrap gap-3">
                        {skills.map((skill, index) => (
                            <span
                                key={skill}
                                className="px-5 py-2 rounded-full glass-card border-white/10 text-[10px] font-bold text-white uppercase tracking-widest hover:border-accent-green transition-colors"
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
