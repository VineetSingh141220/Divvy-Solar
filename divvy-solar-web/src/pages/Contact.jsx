import React from 'react';

const Contact = () => {
    return (
        <main>
            <section className="relative h-[400px] w-full bg-gray-900 overflow-hidden flex items-center justify-center">
                <img alt="Contact Divvy Solar" className="absolute inset-0 w-full h-full object-cover opacity-60" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCwi2ffsuBYZeVKMaU7gsZoTn-N7sgX3D0eI1bHHhQsbpfOZZ7t3us9O8DhLYmcIxm-cxrBazH3I4nQ0pbDas0tSvl7QF49qP3dKBzAVVBKqbS--lNQPPb2-n5skgH2NYu3GhmWmMiTkmbGVGHJJgMUjrPpobyUsaP66YsENL-KuHHM3MR04vxFAaNvN4soY28DrjlZpE22n3dGavLun5HyoZn1zQgrLkHg8oJD-CJlNEL1mJXVjHx0ASayaPbuu4FKc0KG2tNqFro" />
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40"></div>
                <div className="relative container mx-auto px-4 md:px-8 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold font-display text-white mb-4 drop-shadow-lg text-shadow">
                        Contact Us
                    </h1>
                    <p className="text-xl text-gray-200 font-light max-w-2xl mx-auto drop-shadow-md">
                        Have questions? Get in touch with our solar experts today.
                    </p>
                </div>
            </section>

            <section className="py-20 bg-[color:var(--color-surface-light)] dark:bg-[color:var(--color-background-dark)]">
                <div className="container mx-auto px-4 md:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                        {/* Contact Information */}
                        <div>
                            <h2 className="text-3xl font-bold font-display text-[color:var(--color-secondary)] dark:text-white mb-8">Get In Touch</h2>
                            <div className="space-y-8">
                                <div className="flex items-start group">
                                    <div className="w-12 h-12 bg-[color:var(--color-primary)]/10 text-[color:var(--color-primary)] rounded-full flex items-center justify-center mr-6 flex-shrink-0 group-hover:bg-[color:var(--color-primary)] group-hover:text-white transition-colors duration-300">
                                        <span className="material-icons">location_on</span>
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-1">Head Office</h4>
                                        <p className="text-gray-600 dark:text-gray-400">Lower Ground, SJ Tower, Opposite Community Centre, Sector-13, Dabra Road, Hisar- 125001 (HR)</p>
                                    </div>
                                </div>
                                <div className="flex items-start group">
                                    <div className="w-12 h-12 bg-[color:var(--color-primary)]/10 text-[color:var(--color-primary)] rounded-full flex items-center justify-center mr-6 flex-shrink-0 group-hover:bg-[color:var(--color-primary)] group-hover:text-white transition-colors duration-300">
                                        <span className="material-icons">phone</span>
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-1">Phone Number</h4>
                                        <p className="text-gray-600 dark:text-gray-400">+91 92549 69114</p>
                                    </div>
                                </div>
                                <div className="flex items-start group">
                                    <div className="w-12 h-12 bg-[color:var(--color-primary)]/10 text-[color:var(--color-primary)] rounded-full flex items-center justify-center mr-6 flex-shrink-0 group-hover:bg-[color:var(--color-primary)] group-hover:text-white transition-colors duration-300">
                                        <span className="material-icons">email</span>
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-1">Email Address</h4>
                                        <p className="text-gray-600 dark:text-gray-400">info@divvysolar.in</p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-12">
                                <h3 className="text-xl font-bold font-display text-gray-900 dark:text-white mb-6">Follow Us</h3>
                                <div className="flex space-x-4">
                                    <a href="#" className="w-10 h-10 bg-white dark:bg-gray-800 shadow-md rounded-full flex items-center justify-center text-[color:var(--color-secondary)] hover:bg-[color:var(--color-primary)] hover:text-white transition duration-300"><i className="fab fa-facebook-f"></i></a>
                                    <a href="#" className="w-10 h-10 bg-white dark:bg-gray-800 shadow-md rounded-full flex items-center justify-center text-[color:var(--color-secondary)] hover:bg-[color:var(--color-primary)] hover:text-white transition duration-300"><i className="fab fa-linkedin-in"></i></a>
                                    <a href="#" className="w-10 h-10 bg-white dark:bg-gray-800 shadow-md rounded-full flex items-center justify-center text-[color:var(--color-secondary)] hover:bg-[color:var(--color-primary)] hover:text-white transition duration-300"><i className="fab fa-instagram"></i></a>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="bg-white dark:bg-gray-800 p-10 rounded-2xl shadow-xl">
                            <h3 className="text-2xl font-bold font-display text-gray-900 dark:text-white mb-8">Send a Message</h3>
                            <form className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2 font-display uppercase tracking-wide">Full Name</label>
                                        <input type="text" className="w-full bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg px-4 py-3 focus:outline-none focus:border-[color:var(--color-primary)] dark:text-white transition" placeholder="John Doe" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2 font-display uppercase tracking-wide">Email Address</label>
                                        <input type="email" className="w-full bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg px-4 py-3 focus:outline-none focus:border-[color:var(--color-primary)] dark:text-white transition" placeholder="john@example.com" />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2 font-display uppercase tracking-wide">Phone Number</label>
                                    <input type="tel" className="w-full bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg px-4 py-3 focus:outline-none focus:border-[color:var(--color-primary)] dark:text-white transition" placeholder="+91 00000 00000" />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2 font-display uppercase tracking-wide">Message</label>
                                    <textarea rows="4" className="w-full bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg px-4 py-3 focus:outline-none focus:border-[color:var(--color-primary)] dark:text-white transition" placeholder="How can we help you?"></textarea>
                                </div>
                                <button type="submit" className="w-full bg-[color:var(--color-secondary)] text-white font-bold py-4 rounded-lg hover:bg-[color:var(--color-primary)] hover:text-gray-900 transition duration-300 uppercase tracking-widest shadow-lg">Send Message</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Contact;
