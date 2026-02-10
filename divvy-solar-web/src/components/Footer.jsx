import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-[#0f1225] text-white pt-16 pb-6">
            <div className="container mx-auto px-4 md:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
                    <div className="space-y-4">
                        <div className="flex items-center gap-2 mb-4">
                            <svg fill="none" height="40" viewBox="0 0 24 24" width="40" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="#1E3A8A" stroke="#FBBF24" strokeLinejoin="round" strokeWidth="2"></path>
                            </svg>
                            <div className="flex flex-col leading-none">
                                <span className="text-2xl font-bold font-display uppercase tracking-wider">Divvy<span className="text-gray-400">Solar</span></span>
                                <span className="text-[0.6rem] text-gray-500 uppercase tracking-widest">Renewable Energy For All</span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h4 className="text-lg font-bold mb-6 border-b-2 border-[color:var(--color-primary)] inline-block pb-1">Quick Links</h4>
                        <ul className="space-y-3 text-sm text-gray-400">
                            <li><a className="hover:text-[color:var(--color-primary)] transition" href="#">Home</a></li>
                            <li><a className="hover:text-[color:var(--color-primary)] transition" href="#">About</a></li>
                            <li><a className="hover:text-[color:var(--color-primary)] transition" href="#">Blog</a></li>
                            <li><a className="hover:text-[color:var(--color-primary)] transition" href="#">Contact</a></li>
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
                        <h5 className="text-sm font-bold text-white mt-4 mb-2">CO-Office</h5>
                        <p className="text-sm text-gray-400 leading-relaxed">
                            Unit- 859, Tower- B1, Floor- 8,<br />
                            Spaze I-Tech Park, Sector 49,<br />
                            Gurgaon-Sohna Road, Gurgaon<br />
                            122018
                        </p>
                    </div>
                    <div>
                        <h4 className="text-lg font-bold mb-6 border-b-2 border-[color:var(--color-primary)] inline-block pb-1">Sales Office</h4>
                        <p className="text-sm text-gray-400 mb-4 leading-relaxed">
                            626, First Floor, Opp. Franco<br />
                            Hotel, Sec-55, Phase-I, Mohali<br />
                            (Punjab) 140501
                        </p>
                        <h5 className="text-sm font-bold text-white mt-4 mb-2">Sales &amp; Services Office</h5>
                        <p className="text-sm text-gray-400 leading-relaxed">
                            Plot no 14 Phase No -VII (ADJ)<br />
                            Focal Point Near Munish Forging<br />
                            Gobindgarh, Ludhiana (Punjab)<br />
                            141003
                        </p>
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
