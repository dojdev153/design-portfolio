import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Linkedin, Instagram, Twitter, Box } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="py-24 px-6 md:px-12 bg-background/50">
            <div className="max-w-4xl mx-auto text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-5xl md:text-7xl font-display font-bold mb-6">Let's Work Together</h2>
                    <p className="text-gray-400 text-lg mb-12">Currently open to new projects and opportunities.</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16 text-left">
                    {/* Contact Info */}
                    <div className="space-y-8">
                        <div className="flex items-center gap-4 group">
                            <div className="w-12 h-12 glass rounded-xl flex items-center justify-center group-hover:bg-accent-green group-hover:text-black transition-all">
                                <Mail size={20} />
                            </div>
                            <div>
                                <p className="text-xs text-gray-500 uppercase tracking-widest font-bold">Email Me</p>
                                <a href="mailto:frankduffhitayezufrank@gmail.com" className="text-lg font-bold hover:text-accent-green transition-colors">frankduffhitayezufrank@gmail.com</a>
                            </div>
                        </div>

                        <div className="flex items-center gap-4 group">
                            <div className="w-12 h-12 glass rounded-xl flex items-center justify-center group-hover:bg-accent-green group-hover:text-black transition-all">
                                <Phone size={20} />
                            </div>
                            <div>
                                <p className="text-xs text-gray-500 uppercase tracking-widest font-bold">Call Me</p>
                                <a href="tel:+250788442902" className="text-lg font-bold hover:text-accent-green transition-colors">+250 788 442 902</a>
                            </div>
                        </div>

                        <div className="flex items-center gap-4 group">
                            <div className="w-12 h-12 glass rounded-xl flex items-center justify-center group-hover:bg-accent-green group-hover:text-black transition-all">
                                <MapPin size={20} />
                            </div>
                            <div>
                                <p className="text-xs text-gray-500 uppercase tracking-widest font-bold">Location</p>
                                <p className="text-lg font-bold">Rwanda, Kigali</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-4 pt-4">
                            <a href="#" className="w-12 h-12 glass rounded-full flex items-center justify-center hover:bg-accent-green hover:text-black transition-all"><Box size={20} /></a>
                            <a href="#" className="w-12 h-12 glass rounded-full flex items-center justify-center hover:bg-accent-green hover:text-black transition-all"><Linkedin size={20} /></a>
                            <a href="#" className="w-12 h-12 glass rounded-full flex items-center justify-center hover:bg-accent-green hover:text-black transition-all"><Instagram size={20} /></a>
                            <a href="#" className="w-12 h-12 glass rounded-full flex items-center justify-center hover:bg-accent-green hover:text-black transition-all"><Twitter size={20} /></a>
                        </div>
                    </div>

                    {/* Form */}
                    <motion.form
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="glass-card p-8 space-y-6"
                    >
                        <div>
                            <label className="block text-xs uppercase tracking-widest text-gray-500 font-bold mb-2">Name</label>
                            <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-accent-green transition-all" placeholder="John Doe" />
                        </div>
                        <div>
                            <label className="block text-xs uppercase tracking-widest text-gray-500 font-bold mb-2">Email</label>
                            <input type="email" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-accent-green transition-all" placeholder="john@example.com" />
                        </div>
                        <div>
                            <label className="block text-xs uppercase tracking-widest text-gray-500 font-bold mb-2">Message</label>
                            <textarea rows="4" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-accent-green transition-all resize-none" placeholder="Your message here..."></textarea>
                        </div>
                        <button type="submit" className="w-full bg-accent-green text-black font-bold py-4 rounded-xl hover:bg-accent-lime transition-all shadow-[0_0_20px_rgba(170,255,0,0.2)]">
                            Send Message
                        </button>
                    </motion.form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
