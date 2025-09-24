import { A } from "@solidjs/router";

export default function SideNavigation() {
    return <>
        <nav class="p-4 space-y-2">
            <A class="block px-3 py-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700" 
                href="/">Home</A>
            <A class="block px-3 py-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700" 
                href="/about-me">About Me</A>
            <A class="block px-3 py-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700" 
                href="/achievements">Achievements</A>
            <A class="block px-3 py-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700" 
                href='/academics'>Academics</A>
            <A class="block px-3 py-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700" 
                href='/experiences'>Experiences</A>
            <A class="block px-3 py-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700" 
                href='/projects'>Projects</A>
            <A class="block px-3 py-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700" 
                href='/skills'>Skills</A>
        </nav>
    </>
}


{/* <nav class="p-4 space-y-2">
          <a
            href="#"
            class="block px-3 py-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700"
          >
            Dashboard
          </a>
          <a
            href="#"
            class="block px-3 py-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700"
          >
            Users
          </a>
          <a
            href="#"
            class="block px-3 py-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700"
          >
            Settings
          </a>
        </nav> */}