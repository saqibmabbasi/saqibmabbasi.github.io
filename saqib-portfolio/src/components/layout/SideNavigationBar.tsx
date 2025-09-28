import { A } from "@solidjs/router";

import Icon from "./Icon";

export default function SideNavigationBar() {
    return <>
        <nav class="p-4 space-y-1">
            <A class="block px-3 py-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700" 
                href="/"><Icon name="home" class="w-6 h-6 text-blue-500" /></A>

            <A class="block px-3 py-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700" 
                href="/about-me">About Me</A>

            <A class="block px-3 py-2 rounded-md hover:bg-blue-600 dark:hover:bg-gray-700"
                href="/achievements">Achievements</A>

            <A class="block px-3 py-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700" 
                href='/projects'><Icon name="briefcase" class="w-6 h-6 text-blue-500" /></A>

            <A class="block px-3 py-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700" 
                href='/skills'>Skills</A>

            <A class="block px-3 py-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700" 
                href='/experiences'>Experiences</A>

            <A class="block px-3 py-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700" 
                href='/academics'><Icon name="school" class="w-6 h-6 text-blue-500" /></A>

        </nav>
    </>
}
