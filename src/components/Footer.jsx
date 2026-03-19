import React from 'react';
import '../styles/footer.css';

const Footer = () => {
    return (
        <footer className="footer-wrapper">

            {/* Big background name */}
            <div className="footer-bg-text font-display">FRANK DUFF</div>

            {/* Copyright sits on top */}
            <p className="footer-copyright">
                © 2026 HITAYEZU FRANK DUFF. All rights reserved.
            </p>

        </footer>
    );
};

export default Footer;
