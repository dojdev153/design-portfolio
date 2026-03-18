import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    const skills = [
        'Visual Design', 'UI/UX Design', 'Branding', 'Photography',
        'Figma', 'Photoshop', 'Adobe XD', 'Framer', 'Canva',
        'Logo Design', 'Web Design', 'Typography', 'Illustration'
    ];

    return (
        <section id="about" className="py-32 px-6 bg-[#060806] relative overflow-hidden">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-20">
                {/* Image Section */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="w-full lg:w-1/2 relative"
                >
                    <div className="relative z-10 rounded-[40px] overflow-hidden glass-card border-white/10 aspect-square group shadow-2xl">
                        <img
                            src="/images/profile.png"
                            alt="HITAYEZU FRANK DUFF"
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                    </div>
                    {/* Decorative Elements */}
                    <div className="absolute -top-10 -left-10 w-40 h-40 bg-accent-green/20 rounded-full blur-[80px]" />
                    <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-accent-red/10 rounded-full blur-[80px]" />
                </motion.div>

                {/* Content Section */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="w-full lg:w-1/2"
                >
                    <h2 className="text-accent-green font-display text-lg font-bold tracking-widest uppercase mb-4">About Me</h2>
                    <h3 className="text-5xl md:text-7xl font-display font-black text-white italic mb-8">Creative Designer</h3>

                    <p className="text-gray-400 text-lg leading-relaxed mb-10">
                        I'm HITAYEZU FRANK DUFF, a passionate Visual & Digital Designer with over 1.5 years of experience crafting premium digital experiences. I specialize in merging aesthetics with functionality to create interfaces that not only look stunning but also feel alive.
                    </p>

                    <div className="flex flex-wrap gap-3">
                        {skills.map((skill, index) => (
                            <motion.span
                                key={skill}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05 }}
                                className="px-5 py-2 rounded-full glass-card border-white/5 text-[10px] font-bold text-white uppercase tracking-widest hover:border-accent-green transition-colors"
                            >
                                {skill}
                            </motion.span>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
