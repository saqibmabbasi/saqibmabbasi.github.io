import portfolio from '../data-files/portfolio.json';

export default function Portfolio() {
    return (
        <div class="max-w-6xl mx-auto p-4">
            <h1 class="text-3xl font-bold mb-8 text-center text-gray-800 dark:text-white">Portfolio</h1>
            
            <div class="space-y-12">
                {portfolio.map((section: any, sectionIndex: number) => (
                    <div>
                        <h2 class="text-2xl font-bold mb-6 text-gray-700 dark:text-gray-300 border-b-2 border-purple-500 pb-2">
                            {section.section}
                        </h2>
                        
                        {section.projects.length > 0 ? (
                            <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                                {section.projects.map((project: any, projectIndex: number) => (
                                    <div 
                                        class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border-l-4 border-purple-500 hover:shadow-lg transition-shadow duration-300"
                                    >
                                        <div class="flex items-center justify-between mb-3">
                                            <h3 class="text-xl font-semibold text-gray-800 dark:text-white">
                                                {project.projectName}
                                            </h3>
                                            <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-100">
                                                {project.natureOfProject}
                                            </span>
                                        </div>
                                        
                                        <p class="text-gray-600 dark:text-gray-300 mb-4 text-sm">
                                            {project.description}
                                        </p>
                                        
                                        <div class="mb-3">
                                            <span class="text-xs font-medium text-gray-500 dark:text-gray-400">
                                                Company: 
                                            </span>
                                            <span class="text-sm text-gray-700 dark:text-gray-300 ml-2">
                                                {project.companyName}
                                            </span>
                                        </div>
                                        
                                        <div class="border-t border-gray-200 dark:border-gray-700 pt-3">
                                            <h4 class="text-xs font-medium text-gray-500 dark:text-gray-400 mb-1">
                                                Technologies:
                                            </h4>
                                            <div class="flex flex-wrap gap-2">
                                                {project.technologies.frontEnd && (
                                                    <span class="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100">
                                                        FE: {project.technologies.frontEnd}
                                                    </span>
                                                )}
                                                {project.technologies.backEnd && (
                                                    <span class="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100">
                                                        BE: {project.technologies.backEnd}
                                                    </span>
                                                )}
                                                {project.technologies.database && (
                                                    <span class="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-100">
                                                        DB: {project.technologies.database}
                                                    </span>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <p class="text-gray-500 dark:text-gray-400 italic">No projects available in this section.</p>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}