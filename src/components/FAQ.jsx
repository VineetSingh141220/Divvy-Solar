import React, { useState } from 'react';

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const faqs = [
        {
            question: "What does EPC mean in solar projects?",
            answer: "EPC stands for Engineering, Procurement, and Construction. We handle everything from system design and equipment sourcing to complete installation and commissioning."
        },
        {
            question: "How long does it take to install a solar system?",
            answer: "Installation timelines vary based on system size and complexity, generally ranging from a few days to a few weeks."
        },
        {
            question: "What types of solar systems do you install?",
            answer: "We install residential, commercial, and industrial solar systems including both rooftop and ground-mounted solutions."
        },
        {
            question: "Is financing or EMI available?",
            answer: "Yes, we offer flexible financing options and EMI plans to make solar adoption easier for you."
        },
        {
            question: "Do you help with government approvals and paperwork?",
            answer: "Absolutely. We manage all necessary government approvals, permits, and paperwork as part of our turnkey service."
        }
    ];

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className="py-20 bg-[color:var(--color-background-light)] dark:bg-[color:var(--color-background-dark)]">
            <div className="container mx-auto px-4 md:px-8">
                <div className="flex flex-col lg:flex-row gap-16">
                    <div className="lg:w-1/3">
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-light font-display text-gray-800 dark:text-gray-100 mb-6 leading-tight">
                            Complete <br />
                            <span className="font-bold text-[color:var(--color-secondary)] dark:text-[color:var(--color-primary)]">Professional</span> <br />
                            Solar FAQ
                        </h2>
                    </div>
                    <div className="lg:w-2/3 space-y-4">
                        {faqs.map((faq, index) => (
                            <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-sm overflow-hidden border border-gray-100 dark:border-gray-700">
                                <button
                                    className={`w-full p-5 text-left flex justify-between items-center transition ${activeIndex === index ? 'bg-[#1a1f3c] text-white' : 'hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-800 dark:text-white'}`}
                                    onClick={() => toggleFAQ(index)}
                                >
                                    <span className="font-bold text-sm md:text-base">{faq.question}</span>
                                    <i className={`fas ${activeIndex === index ? 'fa-minus text-[color:var(--color-primary)]' : 'fa-plus text-gray-400 dark:text-gray-500'}`}></i>
                                </button>
                                {activeIndex === index && (
                                    <div className="p-6 bg-gray-50 dark:bg-gray-800/50">
                                        <p className="text-sm text-gray-600 dark:text-gray-300">
                                            {faq.answer}
                                        </p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FAQ;
