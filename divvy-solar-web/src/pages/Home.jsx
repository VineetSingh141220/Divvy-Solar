import React from 'react';
import Hero from '../components/Hero';
import Execution from '../components/Execution';
import CTA from '../components/CTA';
import LatestNews from '../components/LatestNews';
import FAQ from '../components/FAQ';
import Brands from '../components/Brands';

const Home = () => {
    return (
        <main>
            <Hero />
            <Execution />
            <CTA />
            <LatestNews />
            <FAQ />
            <Brands />
        </main>
    );
};

export default Home;
