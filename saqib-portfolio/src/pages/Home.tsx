import home from '../data-files/home.json';

export default function Home(){
    return (
        <div class="max-w-6xl mx-auto p-4">
            <div class="text-center py-12">
                <h1 class="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-6">
                    {home.name}
                </h1>
                <div class="flex flex-wrap justify-center gap-3">
                    {home.titles.map((t: any, index: number) => (
                        <span 
                            class="inline-flex items-center px-4 py-2 rounded-full text-base font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100"
                        >
                            {t.title}
                        </span>
                    ))}
                </div>
            </div>
            
            <div class="mt-16 bg-white dark:bg-gray-800 rounded-lg shadow-md p-8">
                <h2 class="text-2xl font-semibold text-center mb-6 text-gray-800 dark:text-white">
                    Welcome to My Portfolio
                </h2>
                <p class="text-center text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                    Explore my professional journey, skills, achievements, and experiences. 
                    Navigate through the sidebar to learn more about my background and capabilities.
                </p>
            </div>
        </div>
    );
}