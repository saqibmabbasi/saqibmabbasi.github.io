import { A } from "@solidjs/router";

import Icon from "./Icon";

export default function SideNavigationBar() {
    return <>
        <nav class="p-4 space-y-1">
            <A class="flex items-center justify-center p-3 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700" 
                href="/"><Icon name="home" class="w-6 h-6 text-blue-500" /></A>

            <A class="flex items-center justify-center p-3 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700" 
                href="/about-me"><Icon name="user" class="w-6 h-6 text-blue-500" /></A>

            <A class="flex items-center justify-center p-3 rounded-md hover:bg-blue-600 dark:hover:bg-gray-700"
                href="/achievements"><Icon name="landmark" class="w-6 h-6 text-blue-500" /></A>

            <A class="flex items-center justify-center p-3 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700" 
                href='/projects'><Icon name="briefcase" class="w-6 h-6 text-blue-500" /></A>

            <A class="flex items-center justify-center p-3 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700" 
                href='/skills'><Icon name="settings" class="w-6 h-6 text-blue-500" /></A>

            <A class="flex items-center justify-center p-3 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700" 
                href='/timeline'><Icon name="history" class="w-6 h-6 text-blue-500" /></A>

        </nav>
    </>
}