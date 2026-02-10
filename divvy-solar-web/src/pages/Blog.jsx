import React from 'react';

const Blog = () => {
    const posts = [
        {
            title: "Unlocking Solar Potential in India: Key Trends & Insights for 2025!",
            desc: "Are you ready to embrace the sunshine and transform your homes and businesses? As we know, India is taking steps towards solar power...",
            img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBv62G7W8IV0Ocs1FyaEnVjKcSYm0J36SBN648GAucqOq0Q9ig9-gqB5MEgOtjIb9mjC0Dstdo-R4ZkXiYlWTHAq6LngVz06P3qIjxvZxqNLCTwwsAwOHtrfGx1UDOBwPzCqNHWbzmrM3g2zRThC4Z1gR1q5GOgXcYq8LgGyDM0q6wx0w6uZDKNgpuTF88g-VaBezt-nVmcoZezd_wAIQ10gHn5VcaxqV3X6MeK3uWwUWH4_WmYdcqUEY2ai87FQcm_fW-K4QIANQ8",
            date: "May 15, 2025",
            category: "Insight"
        },
        {
            title: "Solar Power Is The Future: Why Now is the Ideal Time",
            desc: "Why Now is the Perfect Time to Make the Transition: As the world rapidly moves toward a more sustainable future, technological advancements...",
            img: "https://lh3.googleusercontent.com/aida-public/AB6AXuB2zgJVtn7r_uDftlsEZDKGLdbL4rctmtyq9NQwpjFden7ddNuhMFrf4c2QvfZB2jFz4OqLL7MSsveJ1whm1DHNrcvXlHtz8WOb04RtXiPYzh8ypG1tMo_rM5dZmeZgWlKWknkhREH-C4JkdAQ3wsRT4VcNZc4yD66gAyB6Jy2mhs2A5m4Nd3KCS4c2insfbQep5okMVGSEViMzqZEII8zF-dtom1P1TV9if6gEZNi3gF1D_HLlGSn73NPrOaemnM4WPabStnvIxK0",
            date: "April 20, 2025",
            category: "Future"
        },
        {
            title: "Mastering EPC Solutions in Solar Energy",
            desc: "Everyone is talking about a global shift toward renewable energy, as traditional fossil fuels are no longer a viable option...",
            img: "https://lh3.googleusercontent.com/aida-public/AB6AXuC74ACS_NmO58TXHGV27WIA4qDDNYI8_FRZN4CTlxVR1PE2qa7OPM-aRvX2Zvb0YJk7NyoJGQaxE0fz3sivzNGphaMDnF5lzt9-ZsiEEzQ0I1YIfnJgdIGCnE1IYk7Yo0252OJzzn3sGxBOByuntSujxEUYUWYFFUVFXcTIVV5QT9sdbXm6kt4HQkdd-LRW-uWrU4kQgAtn9jXyPd4pICof6hm6o8iy-UXcnYiiv1u-cQKn_Hvdhl2TAhZST9uxFWxtwpjjixFDHFE",
            date: "March 10, 2025",
            category: "Solutions"
        }
    ];

    return (
        <main>
            <section className="relative h-[400px] w-full bg-gray-900 overflow-hidden flex items-center justify-center">
                <img alt="Divvy Solar Blog" className="absolute inset-0 w-full h-full object-cover opacity-60" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC74ACS_NmO58TXHGV27WIA4qDDNYI8_FRZN4CTlxVR1PE2qa7OPM-aRvX2Zvb0YJk7NyoJGQaxE0fz3sivzNGphaMDnF5lzt9-ZsiEEzQ0I1YIfnJgdIGCnE1IYk7Yo0252OJzzn3sGxBOByuntSujxEUYUWYFFUVFXcTIVV5QT9sdbXm6kt4HQkdd-LRW-uWrU4kQgAtn9jXyPd4pICof6hm6o8iy-UXcnYiiv1u-cQKn_Hvdhl2TAhZST9uxFWxtwpjjixFDHFE" />
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40"></div>
                <div className="relative container mx-auto px-4 md:px-8 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold font-display text-white mb-4 drop-shadow-lg text-shadow">
                        Latest Insights
                    </h1>
                    <p className="text-xl text-gray-200 font-light max-w-2xl mx-auto drop-shadow-md">
                        Stay updated with the latest trends and news in the solar industry.
                    </p>
                </div>
            </section>

            <section className="py-20 bg-[color:var(--color-surface-light)] dark:bg-[color:var(--color-background-dark)]">
                <div className="container mx-auto px-4 md:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {posts.map((post, index) => (
                            <div key={index} className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 flex flex-col h-full group">
                                <div className="h-60 overflow-hidden relative">
                                    <img alt={post.title} className="w-full h-full object-cover transition duration-500 group-hover:scale-110" src={post.img} />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-40"></div>
                                    <span className="absolute top-4 left-4 bg-[color:var(--color-primary)] text-gray-900 text-xs font-bold px-3 py-1 rounded uppercase shadow-sm">{post.category}</span>
                                </div>
                                <div className="p-8 flex-grow flex flex-col">
                                    <div className="flex items-center text-gray-500 dark:text-gray-400 text-xs mb-4">
                                        <span className="material-icons text-sm mr-1">calendar_today</span>
                                        {post.date}
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 font-display line-clamp-2 min-h-[3.5rem] group-hover:text-[color:var(--color-secondary)] transition-colors">
                                        {post.title}
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-6 flex-grow leading-relaxed">
                                        {post.desc}
                                    </p>
                                    <a className="inline-block w-full text-center border-2 border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 py-3 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-[color:var(--color-secondary)] hover:text-white hover:border-[color:var(--color-secondary)] dark:hover:bg-[color:var(--color-primary)] dark:hover:text-[#1a1f3c] dark:hover:border-[color:var(--color-primary)] transition duration-300" href="#">
                                        Read Full Article
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Blog;
