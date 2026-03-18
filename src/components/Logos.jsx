import React from 'react';
import { motion } from 'framer-motion';

const Logos = () => {
    const logos = [
        {
            name: 'Akaguriroo',
            desc: 'Used on akaguriroo.com',
            image: '/images/akagurirooLogo.png',
            tool: 'Adobe Illustrator',
            link: 'https://akaguriroo.com'
        },
        {
            name: 'BlinkTech',
            desc: 'Used on blinktechnologiz.com',
            image: '/images/blinkTechLogo.png',
            tool: 'Adobe Illustrator',
            link: 'https://www.blinktechnologiz.com/'
        },
        {
            name: 'TradeWise',
            desc: 'Agricultural management branding',
            image: '/images/akagurirooLogo.png', // Placeholder or use appropriate if available
            tool: 'Figma',
            link: '#'
        },
        {
            name: 'BrailleWalk',
            desc: 'Accessibility tech branding',
            image: '/images/akagurirooLogo.png', // Placeholder
            tool: 'Adobe Illustrator',
            link: '#'
        }
    ];

    return (
        <section id="logos" className="py-32 px-6 bg-[#060806]">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8"
                >
                    <div>
                        <h2 className="text-accent-red font-display text-lg font-bold tracking-widest uppercase mb-4">Identity Design</h2>
                        <h3 className="text-5xl md:text-7xl font-display font-black text-white italic">Logo Work</h3>
                    </div>
                    <div className="text-right">
                        <p className="text-gray-500 text-sm max-w-xs leading-relaxed">
                            Crafting unique visual identities that resonate with brand values and user expectations.
                        </p>
                    </div>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {logos.map((logo, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group glass-card border-white/5 p-8 rounded-[32px] hover:border-accent-green/50 transition-all duration-500 overflow-hidden relative"
                        >
                            <div className="aspect-square flex items-center justify-center mb-8 relative">
                                <img
                                    src={logo.image}
                                    alt={logo.name}
                                    className="w-3/4 h-3/4 object-contain group-hover:scale-110 transition-transform duration-700"
                                />
                            </div>

                            <div className="relative z-10 flex flex-col h-full">
                                <h4 className="text-xl font-bold text-white mb-2">{logo.name}</h4>
                                <p className="text-gray-500 text-xs mb-4">{logo.desc}</p>

                                <div className="mt-auto flex items-center justify-between pt-4 border-t border-white/5">
                                    <span className="text-[10px] font-bold text-white/30 uppercase tracking-widest">{logo.tool}</span>
                                    {logo.link !== '#' && (
                                        <a
                                            href={logo.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-accent-green text-xs font-bold hover:underline"
                                        >
                                            Visit Site
                                        </a>
                                    )}
                                </div>
                            </div>

                            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-accent-green/10 rounded-full blur-3xl group-hover:bg-accent-green/20 transition-colors" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Logos;
