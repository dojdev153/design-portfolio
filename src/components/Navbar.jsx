import React from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
    return (
        <nav className="fixed top-0 left-0 w-full z-50 px-6 py-4 md:px-12">
            <div className="max-w-7xl mx-auto flex items-center justify-between glass px-6 py-3 rounded-full">
                <div className="text-2xl font-bold text-accent-green">FD.</div>

                <div className="hidden md:flex items-center space-x-8 text-sm font-medium">
                    <a href="#work" className="hover:text-accent-green transition-colors">Work</a>
                    <a href="#logos" className="hover:text-accent-green transition-colors">Logos</a>
                    <a href="#banners" className="hover:text-accent-green transition-colors">Banners</a>
                    <a href="#about" className="hover:text-accent-green transition-colors">About</a>
                    <a href="#contact" className="hover:text-accent-green transition-colors">Contact</a>
                </div>

                <div className="flex items-center space-x-4">
                    <div className="hidden sm:flex items-center space-x-2 text-xs">
                        <span className="w-2 h-2 bg-accent-green rounded-full animate-pulse"></span>
                        <span className="text-gray-400 font-medium">Available for projects</span>
                    </div>
                    <button className="bg-accent-green text-black text-sm px-5 py-2 rounded-full font-bold hover:bg-accent-lime transition-all">
                        Hire Me
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
