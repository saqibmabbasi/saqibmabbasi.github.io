import aboutme from '../data-files/about-me.json';

export default function AboutMe(){
    return (
        <div class="max-w-6xl mx-auto p-4">
            <h1 class="text-3xl font-bold mb-8 text-center text-gray-800 dark:text-white">About Me</h1>
            
            <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-8">
                <h2 class="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">{aboutme.name}</h2>
                
                <div class="mb-6">
                    <h3 class="text-xl font-medium mb-3 text-gray-700 dark:text-gray-300">Professional Objective</h3>
                    <p class="text-gray-600 dark:text-gray-300 leading-relaxed">
                        {aboutme.objective}
                    </p>
                </div>
                
                <div>
                    <h3 class="text-xl font-medium mb-3 text-gray-700 dark:text-gray-300">Professional Details</h3>
                    <p class="text-gray-600 dark:text-gray-300 leading-relaxed">
                        {aboutme.details}
                    </p>
                </div>
            </div>
        </div>
    );
}