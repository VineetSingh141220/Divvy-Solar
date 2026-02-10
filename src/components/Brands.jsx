import React from 'react';

const Brands = () => {
    return (
        <section className="py-16 bg-[color:var(--color-background-light)] dark:bg-[#1a1f2e] border-t border-gray-100 dark:border-gray-800">
            <div className="container mx-auto px-4 text-center">
                <h3 className="text-xl md:text-2xl font-bold font-display text-gray-800 dark:text-gray-200 mb-10">Top Brands We Trust for Your Solar System Needs</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center opacity-80">
                    <div className="h-12 flex items-center justify-center p-4 bg-[color:var(--color-background-light)] dark:bg-gray-200 rounded shadow-sm w-32">
                        <img alt="Waaree" className="max-h-8 object-contain" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBkkbK__1wxTZxvPKskw2CT8gBS5vLApueUhOh9GrrtwcWMfJb1L_wd6ucdDaPRYnrNFcRCR414NyJnbTrIZ6k7BAwavMhADn4bVd1dK0tSMpTFDrXD7sbAjxPYQoy6IMO-WYCq_6QfEZ57DrZXDTV451xh46PixyV6Z-j4NHo1Tq4udIDs8zZq07Hm5eGZ23OgyxjQ4BpnrwxSMPAToDJX8LASRJFgBVHaDbGaA6b2d9lCCfC2Iq0pjxgzwCTa28fJUQARr86PRe0" />
                    </div>
                    <div className="h-12 flex items-center justify-center p-4 bg-[color:var(--color-background-light)] dark:bg-gray-200 rounded shadow-sm w-32">
                        <span className="text-red-600 font-bold text-xs uppercase tracking-tighter flex items-center"><i className="fas fa-sun mr-1"></i> Vikram</span>
                    </div>
                    <div className="h-12 flex items-center justify-center p-4 bg-[color:var(--color-background-light)] dark:bg-gray-200 rounded shadow-sm w-32">
                        <span className="text-orange-500 font-bold text-sm italic">K-Solare</span>
                    </div>
                    <div className="h-12 flex items-center justify-center p-4 bg-[color:var(--color-background-light)] dark:bg-gray-200 rounded shadow-sm w-32">
                        <span className="text-blue-600 font-bold text-sm uppercase">Jakson</span>
                    </div>
                    <div className="h-12 flex items-center justify-center p-4 bg-[color:var(--color-background-light)] dark:bg-gray-200 rounded shadow-sm w-32">
                        <span className="text-purple-800 font-bold text-sm">adani | Solar</span>
                    </div>
                    <div className="h-12 flex items-center justify-center p-4 bg-[color:var(--color-background-light)] dark:bg-gray-200 rounded shadow-sm w-32">
                        <span className="text-red-600 font-bold text-sm uppercase">HAVELLS</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Brands;
