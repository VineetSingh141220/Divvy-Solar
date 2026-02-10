import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="sticky top-0 z-50 bg-white dark:bg-gray-900 shadow-md border-b border-gray-100 dark:border-gray-800 transition-colors duration-300">
            <div className="container mx-auto px-4 md:px-8 py-4 flex justify-between items-center">
                <div className="flex items-center">
                    <Link to="/" className="flex items-center gap-2">
                        <div className="bg-[color:var(--color-primary)]/20 p-1 rounded">
                            <svg className="text-[color:var(--color-primary)]" fill="none" height="32" viewBox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="#FBBF24" stroke="#1E3A8A" strokeLinejoin="round" strokeWidth="2"></path>
                            </svg>
                        </div>
                        <div className="flex flex-col leading-none">
                            <span className="text-xl font-bold font-display text-[#1E3A8A] dark:text-white uppercase tracking-wider">Divvy<span className="text-[color:var(--color-primary)]">Solar</span></span>
                            <span className="text-[0.6rem] text-gray-500 dark:text-gray-400 uppercase tracking-widest">Renewable Energy For All</span>
                        </div>
                    </Link>
                </div>
                <div className="hidden md:flex items-center space-x-8 text-sm font-medium uppercase tracking-wide">
                    <Link to="/" className="text-[color:var(--color-primary)] font-bold">Home</Link>
                    <div className="relative group cursor-pointer">
                        <span className="flex items-center hover:text-[color:var(--color-primary)] dark:text-gray-200 dark:hover:text-[color:var(--color-primary)] transition">
                            Core Solutions <i className="fas fa-chevron-down ml-1 text-xs"></i>
                        </span>
                    </div>
                    <Link to="/about" className="hover:text-[color:var(--color-primary)] dark:text-gray-200 dark:hover:text-[color:var(--color-primary)] transition">About</Link>
                    <a className="hover:text-[color:var(--color-primary)] dark:text-gray-200 dark:hover:text-[color:var(--color-primary)] transition" href="#">Blog</a>
                </div>
                <a className="hidden md:block border-2 border-[#1E3A8A] dark:border-[color:var(--color-primary)] text-[#1E3A8A] dark:text-[color:var(--color-primary)] hover:bg-[#1E3A8A] hover:text-white dark:hover:bg-[color:var(--color-primary)] dark:hover:text-[#1E3A8A] px-6 py-2 rounded-full text-sm font-semibold transition duration-300 uppercase" href="#">
                    Schedule a<br /><span className="text-[0.65rem]">Consultation</span>
                </a>
                <button
                    className="md:hidden text-gray-700 dark:text-gray-200 focus:outline-none"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    <i className="fas fa-bars text-2xl"></i>
                </button>
            </div>
            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800">
                    <div className="bg-[#1a1f3c] text-white p-4">
                        <Link to="/" className="block py-2 text-[color:var(--color-primary)] font-bold">Home</Link>
                        <a className="block py-2 hover:text-[color:var(--color-primary)]" href="#">Core Solutions</a>
                        <Link to="/about" className="block py-2 hover:text-[color:var(--color-primary)]">About</Link>
                        <a className="block py-2 hover:text-[color:var(--color-primary)]" href="#">Blog</a>
                        <a className="block mt-4 text-center border-2 border-[color:var(--color-primary)] text-[color:var(--color-primary)] py-2 rounded-full font-bold" href="#">
                            Schedule a Consultation
                        </a>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
