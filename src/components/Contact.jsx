import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
    return (
        <section id="contact" className="py-32 px-6 bg-[#0a0a0a] relative overflow-hidden">
            <div className="max-w-3xl mx-auto text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-accent-red font-display text-lg font-bold tracking-widest uppercase mb-4">Get In Touch</h2>
                    <h3 className="text-5xl md:text-7xl font-display font-black text-white italic mb-12">Let's Create Together</h3>

                    <div className="glass-card border-white/5 p-10 rounded-[40px] mb-12">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left mb-10">
                            <div>
                                <h4 className="text-gray-500 text-xs font-bold uppercase tracking-widest mb-2">Email</h4>
                                <a href="mailto:hitayezufrank@gmail.com" className="text-xl text-white hover:text-accent-green transition-colors">hitayezufrank@gmail.com</a>
                            </div>
                            <div>
                                <h4 className="text-gray-500 text-xs font-bold uppercase tracking-widest mb-2">Social</h4>
                                <div className="flex gap-4">
                                    <a href="#" className="w-10 h-10 rounded-full glass-card border-white/10 flex items-center justify-center hover:text-accent-green transition-all">FB</a>
                                    <a href="#" className="w-10 h-10 rounded-full glass-card border-white/10 flex items-center justify-center hover:text-accent-green transition-all">IG</a>
                                    <a href="#" className="w-10 h-10 rounded-full glass-card border-white/10 flex items-center justify-center hover:text-accent-green transition-all">TW</a>
                                    <a href="#" className="w-10 h-10 rounded-full glass-card border-white/10 flex items-center justify-center hover:text-accent-green transition-all">IN</a>
                                </div>
                            </div>
                        </div>

                        <form className="space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <input
                                    type="text"
                                    placeholder="Your Name"
                                    className="w-full bg-black/40 border border-white/5 rounded-2xl px-6 py-4 text-white text-sm focus:border-accent-green outline-none transition-colors"
                                />
                                <input
                                    type="email"
                                    placeholder="Your Email"
                                    className="w-full bg-black/40 border border-white/5 rounded-2xl px-6 py-4 text-white text-sm focus:border-accent-green outline-none transition-colors"
                                />
                            </div>
                            <textarea
                                placeholder="Write your message here..."
                                rows="4"
                                className="w-full bg-black/40 border border-white/5 rounded-2xl px-6 py-4 text-white text-sm focus:border-accent-green outline-none transition-colors"
                            ></textarea>
                            <button className="w-full py-5 bg-accent-green font-display font-black text-black uppercase tracking-[0.2em] rounded-2xl hover:bg-white transition-all transform hover:-translate-y-1 active:translate-y-0 shadow-lg shadow-accent-green/20">
                                Send Message
                            </button>
                        </form>
                    </div>
                </motion.div>
            </div>

            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(170,255,0,0.05)_0%,transparent_70%)] pointer-events-none" />
        </section>
    );
};

export default Contact;
