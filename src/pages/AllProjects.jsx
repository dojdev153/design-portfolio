import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const AllProjects = () => {
    // Use the same project list but show all
    const projects = [
        {
            title: 'StockWise',
            description: 'StockWise provides real-time tracking, data-driven insights, and transparent planning for farmers, veterinarians, and authorities across the nation.',
            image: '/images/Tradewise.png',
            figmaLink: 'https://www.figma.com/design/6rkXfF8HKFZLJaCO7DgySA/TradeWise?node-id=0-1&t=ol7c353hcVLE98Un-1',
            liveLink: 'https://trade-wise-beryl.vercel.app/',
            tags: ['React', 'Tailwind', 'Framer Motion']
        },
        {
            title: 'Akaguriroo',
            description: 'A comprehensive e-commerce platform for agricultural products, connecting farmers directly with buyers.',
            image: '/images/akaguriroo.png',
            figmaLink: 'https://www.figma.com/design/eUsaHIuGqvQ052PK5Gtonf/Akaguriroo?node-id=13-14355&t=2bOg3mUny3RmjqSo-1',
            liveLink: 'https://akaguriroo.com',
            tags: ['Next.js', 'PostgreSQL', 'Prisma']
        },
        {
            title: 'Personal Portfolio',
            description: 'My personal design portfolio showcasing visual and digital design work with a futuristic glassmorphism aesthetic.',
            image: '/images/portfolio.png',
            figmaLink: 'https://www.figma.com/design/wHWwf0Rq3N4DGcgo83mvru/portfolio?node-id=41-666&t=bgNgOeMw1vm9sXx1-1',
            liveLink: 'https://design-portfolio-pi-wine.vercel.app/',
            tags: ['React', 'Vite', 'Glassmorphism']
        },
        {
            title: 'Web Dev Portfolio',
            description: 'A specialized portfolio focusing on web development, technical implementation, and interactive user interfaces.',
            image: '/images/portfolio-web-dev.png',
            figmaLink: 'https://www.figma.com/design/wHWwf0Rq3N4DGcgo83mvru/portfolio?node-id=48-323&t=bgNgOeMw1vm9sXx1-1',
            liveLink: null,
            tags: ['Next.js', 'Fullstack', 'Web Dev']
        },
        {
            title: 'BrailleWalk',
            description: 'An innovative navigation assistant for the visually impaired using advanced sensor technology.',
            image: '/images/brailleWalk.png',
            figmaLink: 'https://www.figma.com/design/tXb1IzzS0Sg8OxJHamquYY/BrailleWalk?node-id=0-1&t=AlCvhcXmXHrXsSOD-1',
            liveLink: null,
            tags: ['UX Design', 'Accessibility', 'IoT']
        }
    ];

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <section className="py-32 px-6 bg-[#0a0a0a] min-h-screen">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-8"
                >
                    <div>
                        <Link to="/" className="text-accent-green text-sm font-bold uppercase tracking-widest mb-8 inline-block hover:underline">
                            ← Back to Home
                        </Link>
                        <h2 className="text-accent-green font-display text-lg font-bold tracking-widest uppercase mb-4">Portfolio Archive</h2>
                        <h3 className="text-5xl md:text-7xl font-display font-black text-white italic uppercase underline decoration-accent-green/30">All Figma Projects</h3>
                    </div>
                    <p className="text-gray-500 max-w-sm">
                        A complete collection of my design explorations, from initial wireframes to high-fidelity interactive prototypes.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative"
                        >
                            <div className="relative aspect-[16/10] overflow-hidden rounded-3xl glass-card border-white/10 mb-8">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                                <div className="absolute top-6 left-6 flex gap-2">
                                    {project.tags.map(tag => (
                                        <span key={tag} className="px-3 py-1 bg-black/50 backdrop-blur-md rounded-full text-[10px] font-bold text-white/70 border border-white/10 uppercase tracking-tighter">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="px-2">
                                <h4 className="text-3xl font-display font-bold text-white mb-4 group-hover:text-accent-green transition-colors">
                                    {project.title}
                                </h4>
                                <p className="text-gray-400 mb-8 leading-relaxed max-w-md">
                                    {project.description}
                                </p>

                                <div className="flex gap-4">
                                    <a
                                        href={project.figmaLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl text-xs font-bold uppercase tracking-widest text-white transition-all flex items-center gap-2"
                                    >
                                        Figma Link
                                    </a>
                                    {project.liveLink && (
                                        <a
                                            href={project.liveLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="px-6 py-3 bg-accent-green/10 hover:bg-accent-green/20 border border-accent-green/20 rounded-xl text-xs font-bold uppercase tracking-widest text-accent-green transition-all"
                                        >
                                            Live Demo
                                        </a>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AllProjects;
