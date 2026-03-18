import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
    const tools = [
        { name: 'Adobe Photoshop', color: 'rgba(49, 168, 255, 0.2)', border: '#31a8ff', delay: 0 },
        { name: 'Adobe XD', color: 'rgba(255, 97, 241, 0.2)', border: '#ff61f1', delay: 0.5 },
        { name: 'Figma', color: 'rgba(162, 89, 255, 0.2)', border: '#a259ff', delay: 10 },
        { name: 'Framer', color: 'rgba(0, 85, 255, 0.2)', border: '#0055ff', delay: 1.5 },
        { name: 'Canva', color: 'rgba(0, 196, 204, 0.2)', border: '#00c4cc', delay: 2 },
    ];

    return (
        <section className="relative min-h-screen flex flex-col items-center justify-center pt-32 pb-20 px-6 overflow-hidden">

            <div className="max-w-7xl mx-auto text-center z-20">
                <motion.h1
                    className="text-6xl md:text-8xl lg:text-9xl font-display font-black leading-[0.9] mb-8"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="block text-white">Visual & Digital</span>
                    <span className="block text-accent-green">Design Portfolio</span>
                </motion.h1>

                {/* Center Card */}
                <motion.div
                    className="relative mt-12 mb-16 mx-auto w-full max-w-lg aspect-[4/3] glass-card flex flex-col items-center justify-center p-12"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.3 }}
                    style={{
                        background: 'linear-gradient(135deg, rgba(26, 42, 0, 0.8) 0%, rgba(10, 10, 10, 0.9) 100%)',
                        border: '1px solid rgba(170, 255, 0, 0.2)'
                    }}
                >
                    {/* Revolving Tools Container */}
                    <div className="relative mb-8 flex items-center justify-center">
                        {/* Profile Image */}
                        <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-accent-green shadow-[0_0_30px_rgba(170,255,0,0.3)] relative z-10">
                            <img src="/images/profile.png" alt="Frank Duff" className="w-full h-full object-cover" />
                        </div>

                        {/* Revolving Tools */}
                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                            {tools.map((tool, i) => {
                                const radius = 150; // distance from center
                                const initialAngle = (i * (360 / tools.length));

                                return (
                                    <motion.div
                                        key={tool.name}
                                        initial={{ opacity: 0 }}
                                        animate={{
                                            opacity: 1,
                                            rotate: [initialAngle, initialAngle + 360]
                                        }}
                                        transition={{
                                            rotate: {
                                                duration: 20,
                                                repeat: Infinity,
                                                ease: "linear"
                                            },
                                            opacity: { duration: 1 }
                                        }}
                                        className="absolute"
                                        style={{
                                            width: radius * 2,
                                            height: radius * 2,
                                        }}
                                    >
                                        <motion.div
                                            animate={{
                                                rotate: [-initialAngle, -(initialAngle + 360)]
                                            }}
                                            transition={{
                                                duration: 20,
                                                repeat: Infinity,
                                                ease: "linear"
                                            }}
                                            className="absolute top-0 left-1/2 -translate-x-1/2 glass px-4 py-2 rounded-full whitespace-nowrap text-[10px] font-bold tracking-widest border pointer-events-auto"
                                            style={{
                                                backgroundColor: tool.color,
                                                borderColor: tool.border
                                            }}
                                        >
                                            {tool.name}
                                        </motion.div>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>

                    <div className="w-full flex items-center justify-between mt-auto">
                        <div className="text-xl font-bold flex items-center gap-2">
                            <span className="w-6 h-6 border-2 border-white rounded-full flex items-center justify-center text-[10px]">⊙</span>
                            HITAYEZU FRANK DUFF
                        </div>
                        <div className="flex gap-3 items-center">
                            <span className="text-xl filter drop-shadow-[0_0_8px_rgba(255,0,0,0.5)]">🔖</span>
                            <span className="text-xl filter drop-shadow-[0_0_8px_rgba(255,0,0,0.5)]">❤️</span>
                            <span className="text-xl filter drop-shadow-[0_0_8px_rgba(0,170,255,0.5)]">↗️</span>
                        </div>
                    </div>
                </motion.div>

                {/* Bottom Thumbnails */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto px-4">
                    {[1, 2, 3, 4].map((i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1 + i * 0.1 }}
                            className="aspect-square glass-card hover:border-accent-green transition-all cursor-pointer group"
                        >
                            <img
                                src={`/images/${i === 1 ? 'Tradewise.png' : i === 2 ? 'akaguriroo.png' : i === 3 ? 'brailleWalk.png' : 'portfolio.png'}`}
                                alt="Work thumbnail"
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                        </motion.div>
                    ))}
                </div>

                {/* Info Bar */}
                <div className="mt-16 w-full max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between glass px-8 py-5 rounded-2xl gap-8">
                    <div className="text-sm">
                        <span className="text-gray-500 mr-2">Design Tools:</span>
                        <span className="font-bold">Figma · Photoshop · Framer · Canva · Adobe XD</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="w-5 h-5 bg-black border border-white/20 rounded"></div>
                        <div className="w-5 h-5 bg-accent-red rounded"></div>
                        <div className="w-5 h-5 bg-[#1a2a00] rounded"></div>
                        <div className="w-5 h-5 bg-accent-green rounded"></div>
                        <div className="w-5 h-5 bg-white rounded"></div>
                    </div>
                    <div className="text-sm">
                        <span className="text-gray-500 mr-2">Experience:</span>
                        <span className="font-bold">1.5 Years</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
