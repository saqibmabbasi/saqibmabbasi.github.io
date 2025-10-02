import { A } from "@solidjs/router";

import Icon from "./Icon";

export default function MobileNavigationMenu() {
    return <>
        <nav class="p-4 space-y-1">
            <A class="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700" 
                href="/"><Icon name="home" class="w-6 h-6 text-blue-500" /> <span>Home</span></A>

            <A class="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700" 
                href="/about-me"><Icon name="user" class="w-6 h-6 text-blue-500" /> <span>About Me</span></A>

            <A class="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-blue-600 dark:hover:bg-gray-700"
                href="/achievements"><Icon name="landmark" class="w-6 h-6 text-blue-500" /> <span>Achievements</span></A>

            <A class="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700" 
                href='/projects'><Icon name="briefcase" class="w-6 h-6 text-blue-500" /> <span>Portfolio</span></A>

            <A class="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700" 
                href='/skills'><Icon name="settings" class="w-6 h-6 text-blue-500" /> <span>Skills</span></A>

            <A class="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700" 
                href='/experiences'><Icon name="briefcase" class="w-6 h-6 text-blue-500" /> <span>Experiences</span></A>

            <A class="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700" 
                href='/academics'><Icon name="school" class="w-6 h-6 text-blue-500" /> <span>Academics</span></A>

        </nav>
    </>
}