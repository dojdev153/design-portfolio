import React from 'react';
import { motion } from 'framer-motion';

const Logos = () => {
    const logos = [
        {
            name: 'Akaguriroo',
            desc: 'The visual identity for Akaguriroo represents the fusion of technology and agriculture, designed to be scalable and recognizable.',
            image: '/images/akagurirooLogo.png',
            link: 'https://akaguriroo.com'
        },
        {
            name: 'BlinkTech',
            desc: 'A modern, tech-forward logo for BlinkTechnologiz, emphasizing speed and digital precision in every pixel.',
            image: '/images/blinkTechLogo.png',
            link: 'https://www.blinktechnologiz.com'
        }
    ];

    return (
        <section id="logos" className="py-32 px-6 bg-[#060806]">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-20 text-center"
                >
                    <h2 className="text-accent-red font-display text-lg font-bold tracking-widest uppercase mb-4">Identity Design</h2>
                    <h3 className="text-5xl md:text-7xl font-display font-black text-white italic uppercase underline decoration-accent-red/30">Logo Work</h3>
                </motion.div>

                <div className="flex flex-col gap-8 max-w-4xl mx-auto">
                    {logos.map((logo, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group flex flex-col md:flex-row items-center gap-8 glass-card border-white/5 p-8 rounded-3xl hover:border-accent-green/50 transition-all duration-500"
                        >
                            {/* Logo Box */}
                            <div className="w-32 h-32 md:w-40 md:h-40 glass-card border-white/10 flex items-center justify-center rounded-2xl shrink-0">
                                <img
                                    src={logo.image}
                                    alt={logo.name}
                                    className="w-2/3 h-2/3 object-contain group-hover:scale-110 transition-transform duration-500"
                                />
                            </div>

                            {/* Description Section */}
                            <div className="flex-1 text-center md:text-left">
                                <h4 className="text-2xl font-bold text-white mb-2">{logo.name}</h4>
                                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                                    {logo.desc}
                                </p>
                                <a
                                    href={logo.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 px-6 py-2 bg-accent-green/10 hover:bg-accent-green rounded-xl text-accent-green hover:text-black text-xs font-bold uppercase tracking-widest transition-all"
                                >
                                    Visit Site ↗
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Logos;
