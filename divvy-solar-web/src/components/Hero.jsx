import React from 'react';

const Hero = () => {
    return (
        <header className="relative h-[600px] w-full bg-gray-900 overflow-hidden">
            <img alt="Solar Farm at Sunset" className="absolute inset-0 w-full h-full object-cover opacity-80" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAjAdE49HEkaNsBys8SUSdbjURCJrH3-N6p8PXjBbukx8PIlwc_5DodEe7VrDrD2rix6JvmlutsBsDByzj1UwSTRcJAq14l3sErqAh81QBEGmF_5tfQNMuYscaGiBbhu5q8VOwfWDMT271lTmMgFbAWxwMetX9hiW0Eh0xUFKf_sS1NyhC5iK-WjD9HXudC6SfAxAGlZzOO60XGy23zkvwXPPgNm32kQ7pumSzprXY3NiGo_4sogjeKLMRwBEmm9LYLXb-ZMCFI6G8" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent"></div>
            <div className="relative container mx-auto px-4 md:px-8 h-full flex flex-col justify-center">
                <div className="max-w-3xl space-y-4">
                    <h1 className="text-4xl md:text-6xl font-bold font-display text-white leading-tight drop-shadow-lg text-shadow">
                        Efficient and expert <br /> installation
                    </h1>
                    <p className="text-lg md:text-xl text-gray-200 font-light max-w-xl drop-shadow-md">
                        Embrace a new dawn for solar energy with a most trusted Indian brand since 2018.
                    </p>
                    <div className="pt-6">
                        <a href="#" className="bg-[color:var(--color-primary)] text-gray-900 text-sm font-bold uppercase py-3 px-8 rounded-full hover:bg-yellow-400 transition">
                            Learn More
                        </a>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Hero;
