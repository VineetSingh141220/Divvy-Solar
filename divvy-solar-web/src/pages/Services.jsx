import React from 'react';

const Services = () => {
    const services = [
        {
            title: "Residential Solar",
            description: "Save on electricity bills and power your home with clean, renewable energy. Our residential solutions are custom-designed to fit your roof and energy needs.",
            icon: "home",
            img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAjAdE49HEkaNsBys8SUSdbjURCJrH3-N6p8PXjBbukx8PIlwc_5DodEe7VrDrD2rix6JvmlutsBsDByzj1UwSTRcJAq14l3sErqAh81QBEGmF_5tfQNMuYscaGiBbhu5q8VOwfWDMT271lTmMgFbAWxwMetX9hiW0Eh0xUFKf_sS1NyhC5iK-WjD9HXudC6SfAxAGlZzOO60XGy23zkvwXPPgNm32kQ7pumSzprXY3NiGo_4sogjeKLMRwBEmm9LYLXb-ZMCFI6G8"
        },
        {
            title: "Commercial & Industrial Solar",
            description: "Reduce operational costs and carbon footprint for your business. We offer scalable solar solutions for factories, offices, and large facilities.",
            icon: "factory",
            img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCwi2ffsuBYZeVKMaU7gsZoTn-N7sgX3D0eI1bHHhQsbpfOZZ7t3us9O8DhLYmcIxm-cxrBazH3I4nQ0pbDas0tSvl7QF49qP3dKBzAVVBKqbS--lNQPPb2-n5skgH2NYu3GhmWmMiTkmbGVGHJJgMUjrPpobyUsaP66YsENL-KuHHM3MR04vxFAaNvN4soY28DrjlZpE22n3dGavLun5HyoZn1zQgrLkHg8oJD-CJlNEL1mJXVjHx0ASayaPbuu4FKc0KG2tNqFro"
        },
        {
            title: "Utility Scale Projects",
            description: "We partner with governments and large organizations to develop utility-scale solar farms that power entire communities.",
            icon: "public",
            img: "https://lh3.googleusercontent.com/aida-public/AB6AXuB2zgJVtn7r_uDftlsEZDKGLdbL4rctmtyq9NQwpjFden7ddNuhMFrf4c2QvfZB2jFz4OqLL7MSsveJ1whm1DHNrcvXlHtz8WOb04RtXiPYzh8ypG1tMo_rM5dZmeZgWlKWknkhREH-C4JkdAQ3wsRT4VcNZc4yD66gAyB6Jy2mhs2A5m4Nd3KCS4c2insfbQep5okMVGSEViMzqZEII8zF-dtom1P1TV9if6gEZNi3gF1D_HLlGSn73NPrOaemnM4WPabStnvIxK0"
        },
        {
            title: "Operation & Maintenance (O&M)",
            description: "Ensure your solar plant operates at peak efficiency with our comprehensive O&M services, including cleaning, monitoring, and repairs.",
            icon: "build",
            img: "https://lh3.googleusercontent.com/aida-public/AB6AXuC74ACS_NmO58TXHGV27WIA4qDDNYI8_FRZN4CTlxVR1PE2qa7OPM-aRvX2Zvb0YJk7NyoJGQaxE0fz3sivzNGphaMDnF5lzt9-ZsiEEzQ0I1YIfnJgdIGCnE1IYk7Yo0252OJzzn3sGxBOByuntSujxEUYUWYFFUVFXcTIVV5QT9sdbXm6kt4HQkdd-LRW-uWrU4kQgAtn9jXyPd4pICof6hm6o8iy-UXcnYiiv1u-cQKn_Hvdhl2TAhZST9uxFWxtwpjjixFDHFE"
        }
    ];

    return (
        <main>
            <section className="relative h-[400px] w-full bg-gray-900 overflow-hidden flex items-center justify-center">
                <img alt="Solar Services" className="absolute inset-0 w-full h-full object-cover opacity-60" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB2zgJVtn7r_uDftlsEZDKGLdbL4rctmtyq9NQwpjFden7ddNuhMFrf4c2QvfZB2jFz4OqLL7MSsveJ1whm1DHNrcvXlHtz8WOb04RtXiPYzh8ypG1tMo_rM5dZmeZgWlKWknkhREH-C4JkdAQ3wsRT4VcNZc4yD66gAyB6Jy2mhs2A5m4Nd3KCS4c2insfbQep5okMVGSEViMzqZEII8zF-dtom1P1TV9if6gEZNi3gF1D_HLlGSn73NPrOaemnM4WPabStnvIxK0" />
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40"></div>
                <div className="relative container mx-auto px-4 md:px-8 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold font-display text-white mb-4 drop-shadow-lg text-shadow">
                        Core Solutions
                    </h1>
                    <p className="text-xl text-gray-200 font-light max-w-2xl mx-auto drop-shadow-md">
                        Comprehensive solar energy services tailored for every need.
                    </p>
                </div>
            </section>

            <section className="py-20 bg-[color:var(--color-surface-light)] dark:bg-[color:var(--color-background-dark)]">
                <div className="container mx-auto px-4 md:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {services.map((service, index) => (
                            <div key={index} className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 transform hover:-translate-y-1 group">
                                <div className="h-64 overflow-hidden relative">
                                    <img src={service.img} alt={service.title} className="w-full h-full object-cover transition duration-500 group-hover:scale-110" />
                                    <div className="absolute top-4 right-4 bg-[color:var(--color-primary)] p-3 rounded-full text-white shadow-md">
                                        <span className="material-icons text-2xl">{service.icon}</span>
                                    </div>
                                </div>
                                <div className="p-8">
                                    <h3 className="text-2xl font-bold font-display text-gray-900 dark:text-white mb-4 group-hover:text-[color:var(--color-secondary)] transition-colors">
                                        {service.title}
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                                        {service.description}
                                    </p>
                                    <a href="#" className="inline-flex items-center text-[color:var(--color-secondary)] dark:text-[color:var(--color-primary)] font-bold uppercase tracking-wide text-sm hover:underline">
                                        Read More <span className="material-icons text-sm ml-1">arrow_forward</span>
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Call to Action Strip */}
            <section className="bg-[color:var(--color-secondary)] py-16">
                <div className="container mx-auto px-4 md:px-8 text-center text-white">
                    <h2 className="text-3xl font-bold font-display mb-6">Ready to switch to solar?</h2>
                    <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">Contact us today for a free consultation and find out how much you can save.</p>
                    <a href="/contact" className="bg-[color:var(--color-primary)] text-gray-900 font-bold py-3 px-8 rounded-full hover:bg-white transition duration-300 uppercase tracking-wider shadow-lg">
                        Get a Quote
                    </a>
                </div>
            </section>
        </main>
    );
};

export default Services;
