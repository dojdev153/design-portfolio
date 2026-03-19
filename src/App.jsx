import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import AllProjects from './pages/AllProjects';
import CustomCursor from './components/CustomCursor';
import CornerRipples from './components/CornerRipples';
import './styles/ripples.css'; // Import the new ripple styles

function App() {
    return (
        <Router>
            <div className="relative min-h-screen bg-background text-white selection:bg-accent-green selection:text-black">
                <CustomCursor />
                <CornerRipples />
                <div className="bg-glow" />
                <div className="bg-noise" />

                <Navbar />

                <main>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/projects" element={<AllProjects />} />
                    </Routes>
                </main>

                <Footer />
            </div>
        </Router>
    );
}

export default App;
