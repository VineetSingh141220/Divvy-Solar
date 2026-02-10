import React from 'react';

const Execution = () => {
    const steps = [
        {
            icon: "assignment",
            title: "Site Assessment & energy analysis",
            desc: "Precision solar planning with analysis of your roof and energy needs to design maximum savings."
        },
        {
            icon: "extension",
            title: "Customise design and permit approval",
            desc: "Tailored solar designs with stress-free permit approvals."
        },
        {
            icon: "solar_power",
            title: "Panel Installation & Wiring",
            desc: "Expert installation with weatherproof wiring and perfect panel alignment."
        },
        {
            icon: "fact_check",
            title: "System testing and activation",
            desc: "Complete performance diagnostics and safety checks before flawless grid integration."
        },
        {
            icon: "support_agent",
            title: "Performance monitoring & maintenance",
            desc: "24/7 remote monitoring with bi-annual maintenance for peak performance."
        },
        {
            icon: "description",
            title: "Customer training & handover documentation",
            desc: "Complete training with all documentation handed over for worry-free solar ownership."
        }
    ];

    return (
        <section className="py-20 bg-[color:var(--color-surface-light)] dark:bg-[color:var(--color-background-dark)]">
            <div className="container mx-auto px-4 md:px-8">
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold font-display text-[color:var(--color-secondary)] dark:text-white mb-4">Execution</h2>
                    <p className="text-gray-600 dark:text-gray-400 mb-6">
                        We are providing comprehensive solar solutions with over 7+ years of experience in advanced photovoltaic systems and concentrated solar power and our EPC expertise ensures seamless installation.
                    </p>
                    <div className="flex justify-center space-x-1">
                        <span className="w-2 h-1 bg-[color:var(--color-primary)] rounded-full"></span>
                        <span className="w-2 h-1 bg-[color:var(--color-primary)] rounded-full"></span>
                        <span className="w-8 h-1 bg-[color:var(--color-primary)] rounded-full"></span>
                        <span className="w-2 h-1 bg-[color:var(--color-primary)] rounded-full"></span>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12">
                    {steps.map((step, index) => (
                        <div key={index} className="flex group">
                            <div className="mr-6 flex-shrink-0">
                                <div className="w-16 h-16 rounded-full border border-gray-200 dark:border-gray-700 flex items-center justify-center group-hover:border-[color:var(--color-primary)] group-hover:bg-[color:var(--color-primary)]/10 transition-colors duration-300">
                                    <span className="material-icons text-3xl text-gray-700 dark:text-gray-300 group-hover:text-[color:var(--color-primary)]">{step.icon}</span>
                                </div>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 font-display">{step.title}</h3>
                                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                                    {step.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Execution;
