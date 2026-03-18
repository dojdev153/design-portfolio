import React from 'react';
import { motion } from 'framer-motion';

const Logos = () => {
    const logos = [
        {
            name: 'Akaguriroo Logo',
            client: 'Akaguriroo',
            image: '/images/akagurirooLogo.png',
            tools: ['Illustrator', 'Figma']
        },
        {
            name: 'Blink Tech Logo',
            client: 'Blink Tech',
            image: '/images/blinkTechLogo.png',
            tools: ['Photoshop', 'Illustrator']
        }
    ];

    return (
        <section id="logos" className="py-24 px-6 md:px-12">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl font-display font-bold mb-12">Logo Work</h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {logos.map((logo, index) => (
                        <motion.div
                            key={logo.name}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group glass-card p-12 flex flex-col items-center justify-center min-h-[400px] hover:border-accent-green transition-all relative overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                            <div className="w-48 h-48 mb-8 z-10 filter grayscale group-hover:grayscale-0 transition-all duration-700">
                                <img src={logo.image} alt={logo.name} className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-700" />
                            </div>

                            <div className="text-center z-10">
                                <h3 className="text-xl font-bold mb-4">{logo.name}</h3>
                                <div className="flex items-center justify-center gap-2">
                                    {logo.tools.map(tool => (
                                        <span key={tool} className="text-[10px] font-bold tracking-widest uppercase px-3 py-1 bg-white/5 border border-white/10 rounded-full text-gray-400">
                                            {tool}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Logos;
