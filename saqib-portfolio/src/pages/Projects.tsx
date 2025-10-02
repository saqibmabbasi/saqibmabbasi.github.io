import portfolio from '../data-files/portfolio.json';

export default function Projects() {
    return (
        <div class="max-w-6xl mx-auto p-4">
            <h1 class="text-3xl font-bold mb-8 text-center text-gray-800 dark:text-white">Projects</h1>
            
            <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {portfolio.map((project: any, index: number) => (
                    <div 
                        class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border-l-4 border-purple-500 hover:shadow-lg transition-shadow duration-300"
                    >
                        <div class="flex items-center justify-between mb-3">
                            <h2 class="text-xl font-semibold text-gray-800 dark:text-white">
                                {project.projectName}
                            </h2>
                            <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-100">
                                {project.natureOfProject}
                            </span>
                        </div>
                        
                        <div class="mt-4">
                            <div class="flex items-center text-sm text-gray-500 dark:text-gray-400">
                                <svg class="h-4 w-4 mr-1.5" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd" />
                                </svg>
                                <span>Project</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}