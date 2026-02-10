import React from 'react';

const About = () => {
    const stats = [
        { label: "Years Experience", value: "7+" },
        { label: "Projects Completed", value: "500+" },
        { label: "Happy Clients", value: "1000+" },
        { label: "MW Installed", value: "50+" },
    ];

    const team = [
        {
            name: "XYZ",
            role: "Founder & CEO",
            img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAjAdE49HEkaNsBys8SUSdbjURCJrH3-N6p8PXjBbukx8PIlwc_5DodEe7VrDrD2rix6JvmlutsBsDByzj1UwSTRcJAq14l3sErqAh81QBEGmF_5tfQNMuYscaGiBbhu5q8VOwfWDMT271lTmMgFbAWxwMetX9hiW0Eh0xUFKf_sS1NyhC5iK-WjD9HXudC6SfAxAGlZzOO60XGy23zkvwXPPgNm32kQ7pumSzprXY3NiGo_4sogjeKLMRwBEmm9LYLXb-ZMCFI6G8" // Reusing hero image for now or placeholder
        },
        {
            name: "ABC",
            role: "Head of Operations",
            img: "https://lh3.googleusercontent.com/aida-public/AB6AXuC74ACS_NmO58TXHGV27WIA4qDDNYI8_FRZN4CTlxVR1PE2qa7OPM-aRvX2Zvb0YJk7NyoJGQaxE0fz3sivzNGphaMDnF5lzt9-ZsiEEzQ0I1YIfnJgdIGCnE1IYk7Yo0252OJzzn3sGxBOByuntSujxEUYUWYFFUVFXcTIVV5QT9sdbXm6kt4HQkdd-LRW-uWrU4kQgAtn9jXyPd4pICof6hm6o8iy-UXcnYiiv1u-cQKn_Hvdhl2TAhZST9uxFWxtwpjjixFDHFE" // Reusing news image
        },

        {
            name: "DEF",
            role: "Lead Engineer",
            img: "https://lh3.googleusercontent.com/aida-public/AB6AXuB2zgJVtn7r_uDftlsEZDKGLdbL4rctmtyq9NQwpjFden7ddNuhMFrf4c2QvfZB2jFz4OqLL7MSsveJ1whm1DHNrcvXlHtz8WOb04RtXiPYzh8ypG1tMo_rM5dZmeZgWlKWknkhREH-C4JkdAQ3wsRT4VcNZc4yD66gAyB6Jy2mhs2A5m4Nd3KCS4c2insfbQep5okMVGSEViMzqZEII8zF-dtom1P1TV9if6gEZNi3gF1D_HLlGSn73NPrOaemnM4WPabStnvIxK0" // Reusing news image
        }
    ];

    return (
        <main>
            {/* Hero Section */}
            <section className="relative h-[400px] w-full bg-gray-900 overflow-hidden flex items-center justify-center">
                <img alt="About Divvy Solar" className="absolute inset-0 w-full h-full object-cover opacity-60" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAjAdE49HEkaNsBys8SUSdbjURCJrH3-N6p8PXjBbukx8PIlwc_5DodEe7VrDrD2rix6JvmlutsBsDByzj1UwSTRcJAq14l3sErqAh81QBEGmF_5tfQNMuYscaGiBbhu5q8VOwfWDMT271lTmMgFbAWxwMetX9hiW0Eh0xUFKf_sS1NyhC5iK-WjD9HXudC6SfAxAGlZzOO60XGy23zkvwXPPgNm32kQ7pumSzprXY3NiGo_4sogjeKLMRwBEmm9LYLXb-ZMCFI6G8" />
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40"></div>
                <div className="relative container mx-auto px-4 md:px-8 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold font-display text-white mb-4 drop-shadow-lg text-shadow">
                        About Divvy Solar
                    </h1>
                    <p className="text-xl text-gray-200 font-light max-w-2xl mx-auto drop-shadow-md">
                        Pioneering renewable energy solutions for a sustainable future.
                    </p>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="py-20 bg-[color:var(--color-surface-light)] dark:bg-[color:var(--color-background-dark)]">
                <div className="container mx-auto px-4 md:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold font-display text-[color:var(--color-secondary)] dark:text-white mb-6">
                                Our Mission
                            </h2>
                            <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                                At Divvy Solar, our mission is to accelerate the adoption of renewable energy across India. We believe in a future where clean, sustainable power is accessible to everyone—from individual homeowners to large industrial complexes.
                            </p>
                            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                Since our inception in 2018, we have been dedicated to providing top-tier solar solutions that not only reduce carbon footprints but also deliver significant economic value to our clients.
                            </p>
                        </div>
                        <div className="grid grid-cols-2 gap-6">
                            {stats.map((stat, index) => (
                                <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md text-center border-t-4 border-[color:var(--color-primary)]">
                                    <span className="block text-3xl font-bold text-[color:var(--color-secondary)] dark:text-white mb-2">{stat.value}</span>
                                    <span className="text-sm text-gray-500 dark:text-gray-400 font-medium uppercase tracking-wide">{stat.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Us Section */}
            <section className="py-20 bg-white dark:bg-[#1a1f2e]">
                <div className="container mx-auto px-4 md:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold font-display text-[color:var(--color-secondary)] dark:text-white mb-4">Why Choose Divvy Solar?</h2>
                        <div className="flex justify-center space-x-1">
                            <span className="w-8 h-1 bg-[color:var(--color-primary)] rounded-full"></span>
                            <span className="w-2 h-1 bg-[color:var(--color-primary)] rounded-full"></span>
                            <span className="w-2 h-1 bg-[color:var(--color-primary)] rounded-full"></span>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                        <div className="p-8 rounded-2xl bg-gray-50 dark:bg-gray-800 hover:shadow-lg transition duration-300 border border-transparent hover:border-[color:var(--color-primary)]">
                            <div className="w-16 h-16 mx-auto bg-[color:var(--color-primary)]/10 rounded-full flex items-center justify-center mb-6 text-[color:var(--color-primary)]">
                                <span className="material-icons text-3xl">verified_user</span>
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">Trusted Expertise</h3>
                            <p className="text-gray-600 dark:text-gray-400 text-sm">Over 7 years of proven experience in delivering high-performance solar installations.</p>
                        </div>
                        <div className="p-8 rounded-2xl bg-gray-50 dark:bg-gray-800 hover:shadow-lg transition duration-300 border border-transparent hover:border-[color:var(--color-primary)]">
                            <div className="w-16 h-16 mx-auto bg-[color:var(--color-primary)]/10 rounded-full flex items-center justify-center mb-6 text-[color:var(--color-primary)]">
                                <span className="material-icons text-3xl">engineering</span>
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">End-to-End Solutions</h3>
                            <p className="text-gray-600 dark:text-gray-400 text-sm">Comprehensive EPC services from initial site survey to final grid synchronization.</p>
                        </div>
                        <div className="p-8 rounded-2xl bg-gray-50 dark:bg-gray-800 hover:shadow-lg transition duration-300 border border-transparent hover:border-[color:var(--color-primary)]">
                            <div className="w-16 h-16 mx-auto bg-[color:var(--color-primary)]/10 rounded-full flex items-center justify-center mb-6 text-[color:var(--color-primary)]">
                                <span className="material-icons text-3xl">savings</span>
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">Maximum Savings</h3>
                            <p className="text-gray-600 dark:text-gray-400 text-sm">Optimized designs to ensure the highest energy yield and return on investment.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Team Section Placeholder */}
            <section className="py-20 bg-[color:var(--color-surface-light)] dark:bg-[color:var(--color-background-dark)]">
                <div className="container mx-auto px-4 md:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold font-display text-[color:var(--color-secondary)] dark:text-white mb-4">Meet Our Leadership</h2>
                        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">Driven by passion and expertise.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {team.map((member, index) => (
                            <div key={index} className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg group">
                                <div className="h-64 overflow-hidden">
                                    <img src={member.img} alt={member.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition duration-500 transform group-hover:scale-105" />
                                </div>
                                <div className="p-6 text-center">
                                    <h3 className="text-xl font-bold text-gray-900 dark:text-white font-display">{member.name}</h3>
                                    <p className="text-[color:var(--color-primary)] font-medium text-sm uppercase tracking-wide">{member.role}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
};

export default About;
