import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-[#0f1225] text-white pt-16 pb-6 mt-auto">
            <div className="container mx-auto px-4 md:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
                    <div className="space-y-4">
                        <div className="flex items-center gap-2 mb-4">
                            <svg fill="none" height="40" viewBox="0 0 24 24" width="40" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="#1E3A8A" stroke="#FBBF24" strokeLinejoin="round" strokeWidth="2"></path>
                            </svg>
                            <div className="flex flex-col leading-none">
                                <span className="text-2xl font-bold font-display uppercase tracking-wider text-white">Divvy<span className="text-[color:var(--color-primary)]">Solar</span></span>
                                <span className="text-[0.6rem] text-gray-500 uppercase tracking-widest">Renewable Energy For All</span>
                            </div>
                        </div>
                        <p className="text-sm text-gray-400 leading-relaxed">
                            Leading India's transition to renewable energy since 2018 with expert EPC solutions.
                        </p>
                        <div className="flex space-x-4 pt-4">
                            <a href="https://facebook.com/divvysolar" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[color:var(--color-primary)] hover:text-gray-900 transition duration-300">
                                <i className="fab fa-facebook-f text-sm"></i>
                            </a>
                            <a href="https://linkedin.com/company/divvysolar" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[color:var(--color-primary)] hover:text-gray-900 transition duration-300">
                                <i className="fab fa-linkedin-in text-sm"></i>
                            </a>
                            <a href="https://instagram.com/divvysolar" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[color:var(--color-primary)] hover:text-gray-900 transition duration-300">
                                <i className="fab fa-instagram text-sm"></i>
                            </a>
                        </div>
                    </div>
                    <div>
                        <h4 className="text-lg font-bold mb-6 border-b-2 border-[color:var(--color-primary)] inline-block pb-1">Quick Links</h4>
                        <ul className="space-y-3 text-sm text-gray-400">
                            <li><Link className="hover:text-[color:var(--color-primary)] transition" to="/">Home</Link></li>
                            <li><Link className="hover:text-[color:var(--color-primary)] transition" to="/services">Core Solutions</Link></li>
                            <li><Link className="hover:text-[color:var(--color-primary)] transition" to="/about">About Us</Link></li>
                            <li><Link className="hover:text-[color:var(--color-primary)] transition" to="/blog">Our Blog</Link></li>
                            <li><Link className="hover:text-[color:var(--color-primary)] transition" to="/contact">Contact Us</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-lg font-bold mb-6 border-b-2 border-[color:var(--color-primary)] inline-block pb-1">Head Office</h4>
                        <p className="text-sm text-gray-400 mb-4 leading-relaxed">
                            Lower Ground, SJ Tower,<br />
                            Opposite Community Centre,<br />
                            Sector-13, Dabra Road, Hisar-<br />
                            125001 (HR)
                        </p>
                        <h5 className="text-sm font-bold text-white mt-4 mb-2">Branch Office</h5>
                        <p className="text-sm text-gray-400 leading-relaxed">
                            Unit- 859, Tower- B1, Floor- 8,<br />
                            Spaze I-Tech Park, Sector 49, Gurgaon
                        </p>
                    </div>
                    <div>
                        <h4 className="text-lg font-bold mb-6 border-b-2 border-[color:var(--color-primary)] inline-block pb-1">Sales</h4>
                        <p className="text-sm text-gray-400 mb-4 leading-relaxed">
                            626, First Floor, Opp. Franco<br />
                            Hotel, Sec-55, Phase-I, Mohali
                        </p>
                        <div className="pt-4">
                            <p className="text-xs text-gray-500 font-bold uppercase mb-1">Email us</p>
                            <a href="mailto:info@divvysolar.in" className="text-[color:var(--color-primary)] hover:underline">info@divvysolar.in</a>
                        </div>
                    </div>
                </div>
                <div className="border-t border-gray-800 pt-6 text-center text-xs text-gray-500 font-bold uppercase tracking-wide">
                    © Copyright 2025. Divvy Solar Power &amp; Solutions Pvt. Ltd.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
