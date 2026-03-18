import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Banners = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    const banners = [
        { id: 1, image: '/images/banner.png', title: 'Marketing Banner 1' },
        { id: 2, image: '/images/banner.png', title: 'Marketing Banner 2' },
        { id: 3, image: '/images/banner.png', title: 'Corporate Branding' },
        { id: 4, image: '/images/banner.png', title: 'Social Media Kit' },
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
                    <h3 className="text-5xl md:text-7xl font-display font-black text-white italic">Banner Designs</h3>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {banners.map((banner, index) => (
                        <motion.div
                            key={banner.id}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            onClick={() => setSelectedImage(banner.image)}
                            className="relative aspect-video overflow-hidden rounded-2xl glass-card border-white/5 cursor-pointer group"
                        >
                            <img
                                src={banner.image}
                                alt={banner.title}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                <span className="px-6 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 text-white text-xs font-bold tracking-widest uppercase">
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
