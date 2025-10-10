// import './index.css';
import './index.css';
/* @refresh reload */
import { render } from 'solid-js/web'
import { Router, Route, Navigate } from "@solidjs/router";
import { createSignal, onMount, onCleanup, createEffect } from "solid-js";
import type { Component, JSX } from "solid-js";

import AboutMe from "./pages/AboutMe"
import Academics from "./pages/Academics";
import Achievements from "./pages/Achievements"
// import Experience from "./components/page/Experience.tsx"
import Experiences from "./pages/Experiences"
import Home from './pages/Home';
// import Project from './components/page/Project.tsx';
import Portfolio from './pages/Portfolio';
import Skills from './pages/Skills';
import SocialLinks from './components/layout/SocialLinks';
import NotFound from "./pages/NotFound";
import Timeline from "./pages/Timeline";

// import Header from "./components/layout/Header.tsx";
import SideNavigationMenu from "./components/layout/SideNavigationMenu.tsx";
import SideNavigationBar from "./components/layout/SideNavigationBar.tsx";
import MobileNavigationMenu from "./components/layout/MobileNavigationMenu.tsx";
import Footer from "./components/layout/Footer.tsx";
import Branding from "./components/page/Branding.tsx";

import Icon from "./components/layout/Icon";

const [sidebarOpen, setSidebarOpen] = createSignal(true);
const [isMobile, setIsMobile] = createSignal(false);
const [isDarkMode, setIsDarkMode] = createSignal(true);

// Check screen size and set mobile state
const checkScreenSize = () => {
  setIsMobile(window.innerWidth < 768); // Tailwind's md breakpoint
  // On mobile, close sidebar by default
  if (window.innerWidth < 768) {
    setSidebarOpen(false);
  }
};

// Initialize theme based on html class
onMount(() => {
  checkScreenSize();
  window.addEventListener('resize', checkScreenSize);
  setIsDarkMode(document.documentElement.classList.contains("dark"));
});

onCleanup(() => {
  window.removeEventListener('resize', checkScreenSize);
});

// Watch for changes to the dark class on the html element
createEffect(() => {
  const observer = new MutationObserver(() => {
    setIsDarkMode(document.documentElement.classList.contains("dark"));
  });
  
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["class"]
  });
  
  return () => observer.disconnect();
});

const toggleTheme = () => {
  document.documentElement.classList.toggle("dark");
  setIsDarkMode(document.documentElement.classList.contains("dark"));
};

const App: Component<{ children?: JSX.Element }> = (props) => (
  <>
    <div class="flex h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      {/* Mobile header with hamburger menu */}
      <div class="md:hidden fixed top-0 left-0 right-0 z-10 bg-white dark:bg-gray-800 shadow-md p-4 flex justify-between items-center">
        <h2 class="text-xl font-semibold"><Branding sidebarOpen={sidebarOpen()} /></h2>
        <button
          class="text-gray-500 dark:text-gray-300"
          onClick={() => setSidebarOpen(!sidebarOpen())}
        >
          <Icon name="home" class="w-6 h-6" />
        </button>
      </div>

      {/* Sidebar - hidden on mobile by default, shown when sidebarOpen is true */}
      <aside
        class={`${isMobile() ? (sidebarOpen() ? "absolute inset-y-0 left-0 z-20 w-64" : "hidden") : (sidebarOpen() ? "w-64" : "w-20")
          } bg-white dark:bg-gray-800 shadow-md transition-all duration-300 md:relative flex flex-col`}
      >
        {/* Branding and menu toggler in the same section */}
        <div class="flex items-center justify-between p-4 border-b dark:border-gray-700">
          <Branding sidebarOpen={sidebarOpen()} />
          <button
            class="text-gray-500 dark:text-gray-300"
            onClick={() => setSidebarOpen(!sidebarOpen())}
          >
            ☰
          </button>
          {/* Close button for mobile */}
          <button
            class="text-gray-500 dark:text-gray-300 md:hidden"
            onClick={() => setSidebarOpen(false)}
          >
            ✕
          </button>
        </div>
        {/* Show appropriate menu based on device and sidebar state */}
        <div class="flex-1 overflow-y-auto">
          <div class={`${isMobile() ? (sidebarOpen() ? "block" : "hidden") : "block"}`}>
            {isMobile() ? (
              <MobileNavigationMenu />
            ) : sidebarOpen() ? (
              <SideNavigationMenu />
            ) : (
              <SideNavigationBar />
            )}
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main class={`flex-1 flex flex-col ${isMobile() ? "pt-16" : ""}`}>
        {/* Header - hidden on mobile since we have the top bar */}
        <header class="hidden md:flex justify-between items-center p-4 bg-white dark:bg-gray-800 shadow-sm">
          <h2 class="text-xl font-semibold"></h2>

          <SocialLinks></SocialLinks>
        </header>

        {/* Content */}
        <section class="flex-1 flex flex-col overflow-auto">
          <div class="p-4">
            {props.children}
          </div>
        </section>

        <Footer></Footer>
      </main>

      {/* Floating theme toggler on the right side of the page */}
      <button
        class="fixed right-4 bottom-4 md:right-8 md:bottom-8 w-12 h-12 rounded-full bg-blue-600 text-white shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200 z-30 flex items-center justify-center"
        onClick={toggleTheme}
        title="Toggle theme"
      >
        {isDarkMode() ? (
          <Icon name="sun" class="w-6 h-6" />
        ) : (
          <Icon name="moon" class="w-6 h-6" />
        )}
      </button>
    </div>
  </>
);

render(
  () => (
    // <DashboardLayout />,
    <Router root={App}>
      <Route path="/" component={Home} />
      <Route path="/about-me" component={AboutMe} />
      <Route path="/achievements" component={Achievements} />
      <Route path="/projects" component={Portfolio} />
      <Route path="/skills" component={Skills} />
      <Route path="/academics" component={Academics} />
      <Route path="/experiences" component={Experiences} />
      <Route path="/timeline" component={Timeline} />
      {/* <Route path="/social-links" component={SocialLinks} /> */}
      {/* <Route path="/project" component={Project} /> */}

      <Route path="/public" component={() => <Navigate href="/" />} />

      <Route path="*paramName" component={NotFound} />
    </Router>
  ),
  // <h1 class="text-4xl font-bold text-blue-600">Hello Tailwind!</h1>, 
  document.getElementById("root") as HTMLElement

);

//  render(() => <DashboardLayout />, document.getElementById("root") as HTMLElement);