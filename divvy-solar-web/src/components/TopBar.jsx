import React from 'react';

const TopBar = () => {
    return (
        <div className="bg-[#1a1f3c] text-white text-xs py-2 px-4 md:px-8 flex justify-between items-center font-display">
            <div className="flex items-center space-x-6">
                <div className="flex items-center space-x-2">
                    <i className="fas fa-phone-alt text-[color:var(--color-primary)]"></i>
                    <span>+91 9254969114</span>
                </div>
                <div className="flex items-center space-x-2">
                    <i className="fas fa-envelope text-[color:var(--color-primary)]"></i>
                    <span>info@divvysolar.in</span>
                </div>
            </div>
            <div className="flex items-center space-x-4">
                <a className="hover:text-[color:var(--color-primary)] transition" href="#"><i className="fab fa-facebook-f"></i></a>
                <a className="hover:text-[color:var(--color-primary)] transition" href="#"><i className="fab fa-linkedin-in"></i></a>
                <a className="hover:text-[color:var(--color-primary)] transition" href="#"><i className="fab fa-instagram"></i></a>
            </div>
        </div>
    );
};

export default TopBar;
