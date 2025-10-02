import academics from "../data-files/academics.json";

export default function Academics(){
    return (
        <div class="max-w-6xl mx-auto p-4">
            <h1 class="text-3xl font-bold mb-8 text-center text-gray-800 dark:text-white">Academic Background</h1>
            
            <div class="space-y-6">
                {academics.map((academic: any, index: number) => (
                    <div 
                        class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border-l-4 border-blue-500"
                    >
                        <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                            <div>
                                <h2 class="text-xl font-semibold text-gray-800 dark:text-white">
                                    {academic.degree}
                                </h2>
                                <h3 class="text-lg font-medium text-gray-700 dark:text-gray-300 mb-2">
                                    {academic.fieldOfStudy}
                                </h3>
                                <div class="flex flex-wrap items-center gap-2 text-gray-600 dark:text-gray-400">
                                    <span class="font-medium">{academic.instituteName}</span>
                                    {academic.campusName && (
                                        <span>- {academic.campusName}</span>
                                    )}
                                    {academic.board && (
                                        <span>({academic.board})</span>
                                    )}
                                </div>
                            </div>
                            <div class="flex-shrink-0">
                                <span class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100">
                                    {academic.year}
                                </span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}