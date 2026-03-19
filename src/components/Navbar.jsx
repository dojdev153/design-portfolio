import React from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Navbar = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const isHome = location.pathname === '/';

    const handleNavClick = (e, id) => {
        if (!isHome) {
            e.preventDefault();
            navigate('/#' + id);
            // Small delay to allow navigation then scrolling
            setTimeout(() => {
                const element = document.getElementById(id);
                if (element) element.scrollIntoView({ behavior: 'smooth' });
            }, 100);
        }
    };

    const navLinks = [
        { name: 'Work', id: 'work' },
        { name: 'Logos', id: 'logos' },
        { name: 'Banners', id: 'banners' },
        { name: 'About', id: 'about' },
        { name: 'Contact', id: 'contact' },
    ];

    return (
        <nav className="fixed top-0 left-0 w-full z-50 flex items-center justify-center p-6 sm:p-8">
            <motion.div
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="w-full max-w-5xl glass rounded-full px-6 md:px-10 py-4 flex items-center justify-between shadow-2xl backdrop-blur-3xl border border-white/5"
            >
                {/* Logo */}
                <Link to="/" className="text-2xl font-display font-black text-accent-green tracking-tighter hover:scale-105 transition-transform">
                    FD.
                </Link>

                {/* Desktop Menu */}
                <ul className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <li key={link.id}>
                            <a
                                href={isHome ? `#${link.id}` : `/#${link.id}`}
                                onClick={(e) => handleNavClick(e, link.id)}
                                className="text-[10px] font-bold uppercase tracking-widest text-white/50 hover:text-white transition-colors"
                            >
                                {link.name}
                            </a>
                        </li>
                    ))}
                </ul>

                {/* Right CTA */}
                <div className="flex items-center gap-6">
                    <div className="hidden lg:flex items-center gap-2">
                        <div className="w-2 h-2 bg-accent-green rounded-full animate-pulse shadow-[0_0_8px_#aaff00]" />
                        <span className="text-[10px] font-bold uppercase tracking-widest text-white/40">Available for projects</span>
                    </div>
                    <button
                        onClick={(e) => handleNavClick(e, 'contact')}
                        className="bg-accent-green text-black px-6 py-2.5 rounded-full text-[10px] font-display font-black uppercase tracking-widest hover:bg-white hover:scale-105 transition-all shadow-lg shadow-accent-green/20"
                    >
                        Hire Me
                    </button>
                </div>
            </motion.div>
        </nav>
    );
};

export default Navbar;
