import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';

const Banners = () => {
    const banners = [
        {
            id: 1,
            image: '/images/banner.png',
            title: 'Marketing Campaign Banner',
            tool: 'Photoshop'
        }
    ];

    const [selectedBanner, setSelectedBanner] = useState(null);

    return (
        <section id="banners" className="py-24 px-6 md:px-12 bg-background/50">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl font-display font-bold mb-12">Banner Designs</h2>

                <div className="grid grid-cols-1 gap-8">
                    {banners.map((banner) => (
                        <motion.div
                            key={banner.id}
                            className="relative group glass-card overflow-hidden cursor-pointer"
                            whileHover={{ y: -10 }}
                            onClick={() => setSelectedBanner(banner)}
                        >
                            <img src={banner.image} alt={banner.title} className="w-full aspect-[21/9] object-cover" />

                            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all flex flex-col items-center justify-center gap-4">
                                <Maximize2 className="text-accent-green w-10 h-10" />
                                <div className="text-center">
                                    <p className="text-xl font-bold">{banner.title}</p>
                                    <span className="text-xs uppercase tracking-widest text-accent-green">{banner.tool}</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Lightbox */}
                <AnimatePresence>
                    {selectedBanner && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-12 bg-black/95 backdrop-blur-xl"
                            onClick={() => setSelectedBanner(null)}
                        >
                            <button
                                className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors"
                                onClick={() => setSelectedBanner(null)}
                            >
                                <X size={40} />
                            </button>

                            <motion.div
                                initial={{ scale: 0.9, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ scale: 0.9, opacity: 0 }}
                                className="relative max-w-7xl w-full glass-card border-none"
                                onClick={(e) => e.stopPropagation()}
                            >
                                <img src={selectedBanner.image} alt={selectedBanner.title} className="w-full h-auto" />
                                <div className="p-6 bg-black/50 backdrop-blur-md flex items-center justify-between">
                                    <div>
                                        <h3 className="text-xl font-bold">{selectedBanner.title}</h3>
                                        <p className="text-accent-green text-sm uppercase tracking-widest">Created with {selectedBanner.tool}</p>
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
};

export default Banners;
