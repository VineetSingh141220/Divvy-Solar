import React from 'react';
import { Link } from 'react-router-dom';

const CTA = () => {
    return (
        <section className="relative h-[300px] w-full bg-[color:var(--color-secondary)] overflow-hidden flex items-center">
            <img alt="Solar Panels Detail" className="absolute inset-0 w-full h-full object-cover opacity-30 mix-blend-overlay" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCwi2ffsuBYZeVKMaU7gsZoTn-N7sgX3D0eI1bHHhQsbpfOZZ7t3us9O8DhLYmcIxm-cxrBazH3I4nQ0pbDas0tSvl7QF49qP3dKBzAVVBKqbS--lNQPPb2-n5skgH2NYu3GhmWmMiTkmbGVGHJJgMUjrPpobyUsaP66YsENL-KuHHM3MR04vxFAaNvN4soY28DrjlZpE22n3dGavLun5HyoZn1zQgrLkHg8oJD-CJlNEL1mJXVjHx0ASayaPbuu4FKc0KG2tNqFro" />
            <div className="container mx-auto px-4 md:px-8 relative z-10 flex flex-col md:flex-row justify-between items-center w-full">
                <div className="max-w-2xl text-white mb-6 md:mb-0">
                    <h2 className="text-3xl md:text-4xl font-bold font-display mb-3">Invest in tailored solar tech solutions.</h2>
                    <p className="text-gray-300">
                        Harnessing the sun's power and customizing solar solutions can reduce your energy bills and carbon footprint, and increase your property value.
                    </p>
                </div>
                <Link to="/contact" className="bg-[#1a1f3c] border border-gray-600 hover:bg-[color:var(--color-primary)] hover:text-[#1a1f3c] hover:border-[color:var(--color-primary)] text-white font-bold py-4 px-10 rounded-full transition duration-300 text-sm uppercase tracking-wider shadow-xl">
                    Consult Now
                </Link>
            </div>
        </section>
    );
};

export default CTA;
