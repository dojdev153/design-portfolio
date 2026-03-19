import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import AllProjects from './pages/AllProjects';
import CustomCursor from './components/CustomCursor';

function App() {
    return (
        <Router>
            <div className="relative min-h-screen bg-background text-white selection:bg-accent-green selection:text-black">
                <CustomCursor />
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
