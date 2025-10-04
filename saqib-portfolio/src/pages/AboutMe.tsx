import aboutme from '../data-files/about-me.json';

export default function AboutMe(){
    return (
        <div class="max-w-6xl mx-auto p-4">
            <div class="text-center mb-12">
                <h1 class="text-4xl font-bold mb-4 text-gray-800 dark:text-white">About Me</h1>
                <div class="w-24 h-1 bg-blue-500 mx-auto rounded"></div>
            </div>
            
            <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden mb-8">
                <div class="md:flex">
                    <div class="md:w-1/3 flex justify-center items-center p-8 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-700 dark:to-gray-900">
                        <div class="relative">
                            <img 
                                src={aboutme.image} 
                                alt={aboutme.name}
                                class="w-64 h-64 rounded-full object-cover border-4 border-white shadow-xl"
                            />
                            <div class="absolute bottom-4 right-4 bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                                IT Professional
                            </div>
                        </div>
                    </div>
                    
                    <div class="md:w-2/3 p-8">
                        <h2 class="text-3xl font-bold mb-2 text-gray-800 dark:text-white">{aboutme.name}</h2>
                        <p class="text-blue-500 font-medium mb-6">Senior IT Professional</p>
                        
                        <div class="mb-8">
                            <h3 class="text-xl font-semibold mb-4 text-gray-800 dark:text-white flex items-center">
                                <svg class="w-5 h-5 mr-2 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clip-rule="evenodd" />
                                </svg>
                                Professional Objective
                            </h3>
                            <p class="text-gray-600 dark:text-gray-300 leading-relaxed">
                                {aboutme.objective}
                            </p>
                        </div>
                        
                        <div>
                            <h3 class="text-xl font-semibold mb-4 text-gray-800 dark:text-white flex items-center">
                                <svg class="w-5 h-5 mr-2 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.789a1 1 0 00.788 0l7-3a1 1 0 000-1.84l-7-3zM3.219 8.379l-1.789 7.735a1 1 0 00.788 1.176l7 2a1 1 0 00.788 0l7-2a1 1 0 00.788-1.176l-1.789-7.735a.999.999 0 00-.356-.257l-4-1.789a1 1 0 00-.788 0l-4 1.789a.999.999 0 00-.356.257l-1.789 7.735z" />
                                </svg>
                                Professional Details
                            </h3>
                            <p class="text-gray-600 dark:text-gray-300 leading-relaxed">
                                {aboutme.details}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div class="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-700 dark:to-gray-900 rounded-xl p-6 shadow-md">
                    <div class="flex items-center mb-4">
                        <div class="bg-blue-100 dark:bg-blue-900 p-3 rounded-lg mr-4">
                            <svg class="w-6 h-6 text-blue-500 dark:text-blue-300" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <h3 class="text-lg font-semibold text-gray-800 dark:text-white">Experience</h3>
                    </div>
                    <p class="text-gray-600 dark:text-gray-300">
                        Over a decade of experience in IT domains including business analysis, software engineering, and system integration.
                    </p>
                </div>
                
                <div class="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-700 dark:to-gray-900 rounded-xl p-6 shadow-md">
                    <div class="flex items-center mb-4">
                        <div class="bg-blue-100 dark:bg-blue-900 p-3 rounded-lg mr-4">
                            <svg class="w-6 h-6 text-blue-500 dark:text-blue-300" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" />
                            </svg>
                        </div>
                        <h3 class="text-lg font-semibold text-gray-800 dark:text-white">Skills</h3>
                    </div>
                    <p class="text-gray-600 dark:text-gray-300">
                        Expertise in Oracle EBS, .NET development, database management, and modern web technologies.
                    </p>
                </div>
                
                <div class="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-700 dark:to-gray-900 rounded-xl p-6 shadow-md">
                    <div class="flex items-center mb-4">
                        <div class="bg-blue-100 dark:bg-blue-900 p-3 rounded-lg mr-4">
                            <svg class="w-6 h-6 text-blue-500 dark:text-blue-300" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                            </svg>
                        </div>
                        <h3 class="text-lg font-semibold text-gray-800 dark:text-white">Achievements</h3>
                    </div>
                    <p class="text-gray-600 dark:text-gray-300">
                        Successfully led projects in system migration, security implementation, and application development.
                    </p>
                </div>
            </div>
        </div>
    );
}