import React from 'react';

const LatestNews = () => {
    const news = [
        {
            title: "Unlocking Solar Potential in India: Key Trends & Insights for 2025!",
            desc: "Are you ready to embrace the sunshine and transform your homes and businesses? As we know, India is taking steps towards solar power...",
            img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBv62G7W8IV0Ocs1FyaEnVjKcSYm0J36SBN648GAucqOq0Q9ig9-gqB5MEgOtjIb9mjC0Dstdo-R4ZkXiYlWTHAq6LngVz06P3qIjxvZxqNLCTwwsAwOHtrfGx1UDOBwPzCqNHWbzmrM3g2zRThC4Z1gR1q5GOgXcYq8LgGyDM0q6wx0w6uZDKNgpuTF88g-VaBezt-nVmcoZezd_wAIQ10gHn5VcaxqV3X6MeK3uWwUWH4_WmYdcqUEY2ai87FQcm_fW-K4QIANQ8",
            tag: "Insight"
        },
        {
            title: "Solar Power Is The Future: Why Now is the Ideal Time",
            desc: "Why Now is the Perfect Time to Make the Transition: As the world rapidly moves toward a more sustainable future, technological advancements...",
            img: "https://lh3.googleusercontent.com/aida-public/AB6AXuB2zgJVtn7r_uDftlsEZDKGLdbL4rctmtyq9NQwpjFden7ddNuhMFrf4c2QvfZB2jFz4OqLL7MSsveJ1whm1DHNrcvXlHtz8WOb04RtXiPYzh8ypG1tMo_rM5dZmeZgWlKWknkhREH-C4JkdAQ3wsRT4VcNZc4yD66gAyB6Jy2mhs2A5m4Nd3KCS4c2insfbQep5okMVGSEViMzqZEII8zF-dtom1P1TV9if6gEZNi3gF1D_HLlGSn73NPrOaemnM4WPabStnvIxK0",
            tag: "Future"
        },
        {
            title: "Mastering EPC Solutions in Solar Energy",
            desc: "Everyone is talking about a global shift toward renewable energy, as traditional fossil fuels are no longer a viable option...",
            img: "https://lh3.googleusercontent.com/aida-public/AB6AXuC74ACS_NmO58TXHGV27WIA4qDDNYI8_FRZN4CTlxVR1PE2qa7OPM-aRvX2Zvb0YJk7NyoJGQaxE0fz3sivzNGphaMDnF5lzt9-ZsiEEzQ0I1YIfnJgdIGCnE1IYk7Yo0252OJzzn3sGxBOByuntSujxEUYUWYFFUVFXcTIVV5QT9sdbXm6kt4HQkdd-LRW-uWrU4kQgAtn9jXyPd4pICof6hm6o8iy-UXcnYiiv1u-cQKn_Hvdhl2TAhZST9uxFWxtwpjjixFDHFE",
            tag: "Solutions"
        }
    ];

    return (
        <section className="py-20 bg-[color:var(--color-surface-light)] dark:bg-[#1a1f2e]">
            <div className="container mx-auto px-4 md:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold font-display text-[color:var(--color-secondary)] dark:text-white mb-4">Latest News</h2>
                    <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
                        A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradise.
                    </p>
                    <div className="flex justify-center space-x-1 mb-8">
                        <span className="w-2 h-1 bg-[color:var(--color-secondary)] dark:bg-[color:var(--color-primary)] rounded-full"></span>
                        <span className="w-8 h-1 bg-[color:var(--color-secondary)] dark:bg-[color:var(--color-primary)] rounded-full"></span>
                        <span className="w-2 h-1 bg-[color:var(--color-secondary)] dark:bg-[color:var(--color-primary)] rounded-full"></span>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {news.map((item, index) => (
                        <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden group hover:shadow-xl transition duration-300 flex flex-col h-full">
                            <div className="h-56 overflow-hidden relative">
                                <img alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" src={item.img} />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-60"></div>
                                <span className="absolute top-4 left-4 bg-[color:var(--color-primary)] text-gray-900 text-xs font-bold px-3 py-1 rounded uppercase">{item.tag}</span>
                            </div>
                            <div className="p-6 flex-grow flex flex-col">
                                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3 font-display line-clamp-2">
                                    {item.title}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-400 text-sm mb-6 flex-grow">
                                    {item.desc}
                                </p>
                                <a className="inline-block w-full text-center border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 py-2 rounded-full text-xs font-bold uppercase tracking-wide hover:bg-[color:var(--color-secondary)] hover:text-white hover:border-[color:var(--color-secondary)] dark:hover:bg-[color:var(--color-primary)] dark:hover:text-[#1a1f3c] dark:hover:border-[color:var(--color-primary)] transition duration-300" href="#">
                                    Learn More
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default LatestNews;
