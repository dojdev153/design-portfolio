import React from 'react';

const Footer = () => {
    return (
        <footer className="py-12 px-6 border-t border-white/5">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-gray-500">
                <p>© {new Date().getFullYear()} HITAYEZU FRANK DUFF. All rights reserved.</p>
                <p className="flex items-center gap-2">
                    Built with <span className="text-accent-green">React</span> & <span className="text-accent-red">♥</span>
                </p>
                <div className="flex items-center gap-6">
                    <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                    <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
