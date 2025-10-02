import skills from "../data-files/skills.json";

// Function to determine color based on skill level
const getLevelColor = (level: string) => {
  const levelNum = parseInt(level);
  if (levelNum >= 80) return 'bg-green-500';
  if (levelNum >= 60) return 'bg-blue-500';
  if (levelNum >= 40) return 'bg-yellow-500';
  return 'bg-red-500';
};

// Function to determine width based on skill level
const getLevelWidth = (level: string) => {
  return `${parseInt(level)}%`;
};

export default function Skills(){
    return (
        <div class="max-w-6xl mx-auto p-4">
            <h1 class="text-3xl font-bold mb-8 text-center">My Skills</h1>
            <div class="grid gap-8 md:grid-cols-2">
                {skills.map((skillCategory: any, index: number) => (
                    <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                        <h2 class="text-2xl font-semibold mb-6 pb-2 border-b border-gray-200 dark:border-gray-700">
                            {skillCategory.type}
                        </h2>
                        <div class="space-y-6">
                            {skillCategory.skills.map((skill: any, skillIndex: number) => (
                                <div>
                                    <div class="flex justify-between mb-2">
                                        <span class="font-medium">{skill.name}</span>
                                        <span class="text-sm font-medium">{skill.level}%</span>
                                    </div>
                                    <div class="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                                        <div 
                                            class={`h-2.5 rounded-full ${getLevelColor(skill.level)}`}
                                            style={{ width: getLevelWidth(skill.level) }}
                                        ></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}