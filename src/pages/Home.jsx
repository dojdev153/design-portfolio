import React from 'react';
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import Logos from '../components/Logos';
import Banners from '../components/Banners';
import About from '../components/About';
import Contact from '../components/Contact';

const Home = () => {
    return (
        <>
            <Hero />
            <Projects />
            <Logos />
            <Banners />
            <About />
            <Contact />
        </>
    );
};

export default Home;
