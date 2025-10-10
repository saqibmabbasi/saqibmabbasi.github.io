import experiences from '../data-files/experiences.json';
import academics from '../data-files/academics.json';

// Define types for our data
type Experience = {
  companyName: string;
  designation: string;
  fromDate: string;
  toDate: string;
  tasks: { task: string }[];
  type: 'experience';
};

type Academic = {
  instituteName: string;
  campusName: string;
  degree: string;
  fieldOfStudy: string;
  year: string;
  board?: string;
  type: 'academic';
};

// Function to convert experiences to a unified format
const formatExperiences = (experiences: any[]): Experience[] => {
  return experiences.map(exp => ({
    ...exp,
    type: 'experience'
  }));
};

// Function to convert academics to a unified format
const formatAcademics = (academics: any[]): Academic[] => {
  return academics.map(acd => ({
    ...acd,
    type: 'academic'
  }));
};

// Function to sort timeline items by date (most recent first)
const sortTimelineItems = (items: (Experience | Academic)[]) => {
  // For experiences, we'll use the fromDate for sorting
  // For academics, we'll use the year field
  return [...items].sort((a, b) => {
    let dateA, dateB;
    
    if (a.type === 'experience') {
      const expA = a as Experience;
      // For "Present", we'll use a future date to ensure it's at the top
      dateA = expA.toDate === 'Present' ? new Date(8640000000000000) : new Date(expA.toDate);
    } else {
      const acdA = a as Academic;
      dateA = new Date(parseInt(acdA.year), 11); // Using December as default month
    }
    
    if (b.type === 'experience') {
      const expB = b as Experience;
      // For "Present", we'll use a future date to ensure it's at the top
      dateB = expB.toDate === 'Present' ? new Date(8640000000000000) : new Date(expB.toDate);
    } else {
      const acdB = b as Academic;
      dateB = new Date(parseInt(acdB.year), 11); // Using December as default month
    }
    
    return dateB.getTime() - dateA.getTime();
  });
};

export default function Timeline() {
  // Format and combine all timeline items
  const experienceItems = formatExperiences(experiences);
  const academicItems = formatAcademics(academics);
  const allItems = sortTimelineItems([...experienceItems, ...academicItems]);
  
  return (
    <div class="max-w-6xl mx-auto p-4">
      <h1 class="text-3xl font-bold mb-8 text-center text-gray-800 dark:text-white">My Journey</h1>
      
      <div class="relative">
        {/* Vertical line */}
        <div class="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-300 dark:bg-gray-600 transform -translate-x-1/2"></div>
        
        <div class="space-y-12">
          {allItems.map((item, index) => (
            <div class={`relative flex items-start ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
              {/* Timeline icon */}
              <div class="absolute left-1/2 w-8 h-8 rounded-full z-10 transform -translate-x-1/2 flex items-center justify-center bg-white dark:bg-gray-800">
                {item.type === 'experience' ? (
                  <svg class="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clip-rule="evenodd" />
                    <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
                  </svg>
                ) : (
                  <svg class="w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                  </svg>
                )}
              </div>
              
              {/* Content */}
              <div class={`w-1/2 ${index % 2 === 0 ? 'pr-8 md:pr-12 lg:pr-16' : 'pl-8 md:pl-12 lg:pl-16'}`}>
                {item.type === 'experience' ? (
                  <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border-l-4 border-green-500">
                    <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
                      <div>
                        <h2 class="text-xl font-semibold text-gray-800 dark:text-white">
                          {item.companyName}
                        </h2>
                        <h3 class="text-lg font-medium text-gray-700 dark:text-gray-300">
                          {item.designation}
                        </h3>
                      </div>
                      <div class="flex-shrink-0">
                        <span class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100">
                          {item.fromDate} - {item.toDate}
                        </span>
                      </div>
                    </div>
                    
                    <div>
                      <h4 class="text-md font-medium text-gray-700 dark:text-gray-300 mb-3">Key Responsibilities:</h4>
                      <ul class="space-y-2">
                        {item.tasks.map((task, taskIndex) => (
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
                ) : (
                  <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border-l-4 border-blue-500">
                    <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                      <div>
                        <h2 class="text-xl font-semibold text-gray-800 dark:text-white">
                          {item.degree}
                        </h2>
                        <h3 class="text-lg font-medium text-gray-700 dark:text-gray-300 mb-2">
                          {item.fieldOfStudy}
                        </h3>
                        <div class="flex flex-wrap items-center gap-2 text-gray-600 dark:text-gray-400">
                          <span class="font-medium">{item.instituteName}</span>
                          {item.campusName && (
                            <span>- {item.campusName}</span>
                          )}
                          {item.board && (
                            <span>({item.board})</span>
                          )}
                        </div>
                      </div>
                      <div class="flex-shrink-0">
                        <span class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100">
                          {item.year}
                        </span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              
              {/* Empty div for the other side */}
              <div class="w-1/2"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}