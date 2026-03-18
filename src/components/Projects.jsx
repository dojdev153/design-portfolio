import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Layout } from 'lucide-react';

const Projects = () => {
    const projects = [
        {
            name: 'TradeWise',
            description: 'A comprehensive trading platform with real-time data.',
            image: '/images/Tradewise.png',
            figma: 'https://www.figma.com/design/6rkXfF8HKFZLJaCO7DgySA/TradeWise?node-id=0-1&t=ol7c353hcVLE98Un-1',
            live: null
        },
        {
            name: 'Akaguriroo',
            description: 'Full-featured e-commerce marketplace for local vendors.',
            image: '/images/akaguriroo.png',
            figma: 'https://www.figma.com/design/eUsaHIuGqvQ052PK5Gtonf/Akaguriroo?node-id=13-14355&t=2bOg3mUny3RmjqSo-1',
            live: 'https://akaguriroo.com'
        },
        {
            name: 'BrailleWalk',
            description: 'Assistive technology app for visually impaired navigation.',
            image: '/images/brailleWalk.png',
            figma: 'https://www.figma.com/design/tXb1IzzS0Sg8OxJHamquYY/BrailleWalk?node-id=0-1&t=AlCvhcXmXHrXsSOD-1',
            live: null
        }
    ];

    return (
        <section id="work" className="py-24 px-6 md:px-12 bg-background/50">
            <div className="max-w-7xl mx-auto">
                <div className="flex items-center gap-3 mb-12">
                    <Layout className="text-accent-green w-8 h-8" />
                    <h2 className="text-4xl font-display font-bold">Figma Projects</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.name}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group glass-card hover:scale-[1.02] hover:border-accent-green hover:shadow-[0_0_30px_rgba(170,255,0,0.1)] transition-all duration-500"
                        >
                            <div className="aspect-[16/10] overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700">
                                <img src={project.image} alt={project.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                            </div>

                            <div className="p-6">
                                <h3 className="text-xl font-bold mb-2 group-hover:text-accent-green transition-colors">{project.name}</h3>
                                <p className="text-gray-400 text-sm mb-6 leading-relaxed">{project.description}</p>

                                <div className="flex items-center gap-4">
                                    <a
                                        href={project.figma}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex-1 text-center py-2.5 rounded-xl border border-white/10 hover:border-accent-green text-sm font-bold transition-all text-gray-300 hover:text-white"
                                    >
                                        View in Figma
                                    </a>
                                    {project.live && (
                                        <a
                                            href={project.live}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex-1 text-center py-2.5 rounded-xl bg-accent-green text-black text-sm font-bold hover:bg-accent-lime transition-all"
                                        >
                                            Live Site
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

export default Projects;
