import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    const skills = ['Figma', 'Adobe Photoshop', 'Framer', 'Canva', 'Adobe XD'];

    return (
        <section id="about" className="py-24 px-6 md:px-12">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
                {/* Left Side: Text */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="flex-1"
                >
                    <h2 className="text-4xl font-display font-bold mb-6">About Me</h2>
                    <p className="text-gray-400 text-lg leading-relaxed mb-8">
                        Hello! I'm <span className="text-white font-bold">HITAYEZU FRANK DUFF</span>, a UI/UX & Graphic Designer based in <span className="text-accent-green">Rwanda, Kigali 📍</span>.
                        With 1.5 years of experience, I specialize in creating futuristic, user-centric digital experiences and bold visual identities.
                        My approach combines glassmorphism, high-contrast layouts, and intuitive interaction design to make products stand out.
                    </p>

                    <div className="space-y-4">
                        <h3 className="text-md font-bold uppercase tracking-widest text-gray-500">Core Expertise</h3>
                        <div className="flex flex-wrap gap-3">
                            {skills.map(skill => (
                                <span key={skill} className="px-5 py-2 glass rounded-full text-sm font-bold border-accent-green/20 text-accent-green">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                </motion.div>

                {/* Right Side: Profile Card */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="flex-1 w-full max-w-md aspect-square glass-card p-4 relative"
                >
                    <div className="w-full h-full rounded-2xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
                        <img src="/images/profile.png" alt="Frank Duff" className="w-full h-full object-cover" />
                    </div>

                    {/* Decorative Elements */}
                    <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent-green/20 rounded-full blur-3xl" />
                    <div className="absolute -top-6 -left-6 w-32 h-32 bg-accent-lime/20 rounded-full blur-3xl" />
                </motion.div>
            </div>
        </section>
    );
};

export default About;
