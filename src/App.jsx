import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Logos from './components/Logos';
import Banners from './components/Banners';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
    return (
        <div className="relative min-h-screen bg-background">
            <div className="bg-glow" />
            <div className="bg-noise" />

            <Navbar />

            <main>
                <Hero />
                <Projects />
                <Logos />
                <Banners />
                <About />
                <Contact />
            </main>

            <Footer />
        </div>
    );
}

export default App;
