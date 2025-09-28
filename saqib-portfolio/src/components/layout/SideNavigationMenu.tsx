import { A } from "@solidjs/router";

import Icon from "../components/layout/Icon";

export default function SideNavigationMenu() {
    return <>
        <nav class="p-4 space-y-1">
            <A class="block px-3 py-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700" 
                href="/"><Icon name="home" class="w-6 h-6 text-blue-500" />Home</A>

            <A class="block px-3 py-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700" 
                href="/about-me">About Me</A>

            <A class="block px-3 py-2 rounded-md hover:bg-blue-600 dark:hover:bg-gray-700"
                href="/achievements">Achievements</A>

            <A class="block px-3 py-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700" 
                href='/projects'>Portfolio</A>

            <A class="block px-3 py-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700" 
                href='/skills'>Skills</A>

            <A class="block px-3 py-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700" 
                href='/experiences'>Experiences</A>

            <A class="block px-3 py-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700" 
                href='/academics'>Academics</A>

        </nav>
    </>
}
