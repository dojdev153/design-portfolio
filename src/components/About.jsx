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
            // Trigger BOTH at the same time
            setPhase('glitching');
            setPosterGlitch(true);

            // Phase 2: Show poster cleanly (after 0.6s glitch-in)
            setTimeout(() => {
                setPhase('poster');
                setPosterGlitch(false);
            }, 600);

            // Phase 3: Glitch back out (after 0.6s in + 0.5s hold = 1.1s)
            setTimeout(() => {
                setPhase('unglitching');
                setPosterGlitch(true);

                // Phase 4: Back to profile cleanly (after another 0.6s glitch-out)
                setTimeout(() => {
                    setPhase('profile');
                    setPosterGlitch(false);
                }, 600);
            }, 1100);
        };

        const initial = setTimeout(cycle, 5000);
        const interval = setInterval(cycle, 6700);

        return () => { clearTimeout(initial); clearInterval(interval); };
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
                    className="w-full lg:w-1/2 flex flex-col gap-6 relative"
                >
                    <div className="rounded-[40px] overflow-hidden glass-card border-white/10 aspect-[4/5] md:aspect-square group shadow-2xl relative">
                        <GlitchProfile phase={phase} />
                    </div>

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
