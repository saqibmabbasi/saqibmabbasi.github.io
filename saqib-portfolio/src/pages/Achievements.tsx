import achievements from "../data-files/achievements.json";

export default function Achievements(){
    return (
        <div class="max-w-6xl mx-auto p-4">
            <h1 class="text-3xl font-bold mb-8 text-center">My Achievements</h1>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                {achievements.map((achievement: any, index: number) => (
                    <div 
                        class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border-l-4 border-blue-500 hover:shadow-lg transition-shadow duration-300"
                    >
                        <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                            <div>
                                <h2 class="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                                    {achievement.title}
                                </h2>
                                <div class="flex items-center">
                                    <span class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100">
                                        <svg class="mr-1.5 h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        {achievement.beneficiary}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}