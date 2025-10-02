import experiences from '../data-files/experiences.json';

export default function Experiences(){
    return (
        <div class="max-w-6xl mx-auto p-4">
            <h1 class="text-3xl font-bold mb-8 text-center text-gray-800 dark:text-white">Professional Experience</h1>
            
            <div class="space-y-8">
                {experiences.map((experience: any, index: number) => (
                    <div 
                        class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border-l-4 border-green-500"
                    >
                        <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
                            <div>
                                <h2 class="text-xl font-semibold text-gray-800 dark:text-white">
                                    {experience.companyName}
                                </h2>
                                <h3 class="text-lg font-medium text-gray-700 dark:text-gray-300">
                                    {experience.designation}
                                </h3>
                            </div>
                            <div class="flex-shrink-0">
                                <span class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100">
                                    {experience.fromDate} - {experience.toDate}
                                </span>
                            </div>
                        </div>
                        
                        <div>
                            <h4 class="text-md font-medium text-gray-700 dark:text-gray-300 mb-3">Key Responsibilities:</h4>
                            <ul class="space-y-2">
                                {experience.tasks.map((task: any, taskIndex: number) => (
                                    <li class="flex items-start">
                                        <svg class="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                                        </svg>
                                        <span class="text-gray-600 dark:text-gray-300">{task.task}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}