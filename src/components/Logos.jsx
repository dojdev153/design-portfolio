import React from 'react';
import { motion } from 'framer-motion';

const Logos = () => {
    const logos = [
        {
            name: 'Akaguriroo',
            image: '/images/akagurirooLogo.png',
            link: 'https://akaguriroo.com'
        },
        {
            name: 'BlinkTech',
            image: '/images/blinkTechLogo.png',
            link: 'https://www.blinktechnologiz.com'
        }
    ];

    return (
        <section id="logos" className="py-32 px-6 bg-[#060806]">
            <div className="max-w-7xl mx-auto text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-20"
                >
                    <h2 className="text-accent-red font-display text-lg font-bold tracking-widest uppercase mb-4">Identity Design</h2>
                    <h3 className="text-5xl md:text-7xl font-display font-black text-white italic uppercase underline decoration-accent-red/30">Logo Work</h3>
                </motion.div>

                <div className="flex flex-wrap justify-center gap-8">
                    {logos.map((logo, index) => (
                        <motion.a
                            key={index}
                            href={logo.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative w-32 h-32 md:w-40 md:h-40 glass-card border-white/5 flex items-center justify-center rounded-2xl hover:border-accent-green/50 transition-all duration-500 hover:-translate-y-2"
                        >
                            <img
                                src={logo.image}
                                alt={logo.name}
                                className="w-2/3 h-2/3 object-contain transition-transform duration-500 group-hover:scale-110"
                            />

                            {/* Hover Tooltip */}
                            <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 bg-accent-green text-black px-3 py-1 rounded text-[10px] font-black uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-20">
                                Visit Site ↗
                            </div>

                            <div className="absolute inset-0 bg-accent-green/5 opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity" />
                        </motion.a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Logos;
