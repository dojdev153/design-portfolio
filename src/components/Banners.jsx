import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Banners = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    const banners = [
        { id: 1, image: '/images/banner.png', title: 'Featured Branding' },
    ];

    return (
        <section id="banners" className="py-32 px-6 bg-[#0a0a0a]">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="mb-20"
                >
                    <h2 className="text-accent-green font-display text-lg font-bold tracking-widest uppercase mb-4">Visual Design</h2>
                    <h3 className="text-5xl md:text-7xl font-display font-black text-white italic uppercase">Banner Designs</h3>
                </motion.div>

                <div className="flex justify-center">
                    {banners.map((banner) => (
                        <motion.div
                            key={banner.id}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            onClick={() => setSelectedImage(banner.image)}
                            className="relative w-full max-w-4xl aspect-[21/9] overflow-hidden rounded-3xl glass-card border-white/5 cursor-pointer group shadow-2xl"
                        >
                            <img
                                src={banner.image}
                                alt={banner.title}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                <span className="px-8 py-3 bg-white/10 backdrop-blur-md rounded-full border border-white/20 text-white text-xs font-bold tracking-[0.2em] uppercase">
                                    View Full Design
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Lightbox Modal */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedImage(null)}
                        className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-12 cursor-zoom-out"
                    >
                        <motion.img
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            src={selectedImage}
                            alt="Full view"
                            className="max-w-full max-h-full object-contain rounded-xl"
                        />
                        <button
                            className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors text-4xl"
                            onClick={() => setSelectedImage(null)}
                        >
                            ×
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Banners;
