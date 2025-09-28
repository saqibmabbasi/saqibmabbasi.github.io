// import './index.css';
import './index.css';
/* @refresh reload */
import { render } from 'solid-js/web'
import { Router, Route, Navigate } from "@solidjs/router";
import { createSignal } from "solid-js";

import AboutMe from "./pages/AboutMe"
import Academics from "./pages/Academics";
import Achievements from "./pages/Achievements"
import Experience from "./components/page/Experience.tsx"
import Experiences from "./pages/Experiences"
import Home from './pages/Home';
import Project from './components/page/Project.tsx';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import SocialLinks from './components/layout/SocialLinks';
import NotFound from "./pages/NotFound";

// import Header from "./components/layout/Header.tsx";
import SideNavigationMenu from "./components/layout/SideNavigationMenu.tsx";
import SideNavigationBar from "./components/layout/SideNavigationBar.tsx";
import Footer from "./components/layout/Footer.tsx";
import Branding from "./components/page/Branding.tsx";

import Icon from "./components/layout/Icon";

const [sidebarOpen, setSidebarOpen] = createSignal(true);


const App = (props) => (
  <>
    <div class="flex h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      {/* Sidebar */}
      <aside
        class={`${sidebarOpen() ? "w-64" : "w-20"
          } bg-white dark:bg-gray-800 shadow-md transition-all duration-300`}
      >
        <div class="flex items-center justify-between p-4 border-b dark:border-gray-700">
          <h1 class={`${sidebarOpen() ? "block" : "hidden"} text-xl font-bold`}>
            <div class="flex items-center gap-2 text-blue-600">
              <Icon name="user" class="w-6 h-6 text-blue-500" />
              <span>User Profile</span>
            </div>
          </h1>
          <button
            class="text-gray-500 dark:text-gray-300"
            onClick={() => setSidebarOpen(!sidebarOpen())}
          >
            ☰
          </button>
        </div>
        <div class={`${sidebarOpen() ? "block" : "hidden"}`}>
          <SideNavigationMenu></SideNavigationMenu>
        </div>
        <div class={`${!sidebarOpen() ? "block" : "hidden"}`}>
          <SideNavigationBar></SideNavigationBar>
        </div>
      </aside>

      {/* Main Content */}
      <main class="flex-1 flex flex-col">
        {/* Header */}
        <header class="flex justify-between items-center p-4 bg-white dark:bg-gray-800 shadow-sm">
          <h2 class="text-xl font-semibold"><Branding></Branding></h2>

          <SocialLinks></SocialLinks>
          <button
            class="px-3 py-1 rounded bg-blue-600 text-white hover:bg-blue-700"
            onClick={() => document.documentElement.classList.toggle("dark")}>
            <Icon name="moon" class="w-6 h-6 text-blue-500" />
          </button>
        </header>

        {/* Content */}
        <section class="flex-1 flex flex-col">
          <div>
            {props.children}
          </div>
        </section>

        <Footer></Footer>
      </main>
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
      <Route path="/projects" component={Projects} />
      <Route path="/skills" component={Skills} />
      <Route path="/academics" component={Academics} />
      <Route path="/experiences" component={Experiences} />
      {/* <Route path="/social-links" component={SocialLinks} /> */}
      {/* <Route path="/project" component={Project} /> */}

      <Route path="/public" element={<Navigate href="/" />} />

      <Route path="*paramName" component={NotFound} />
    </Router>
  ),
  // <h1 class="text-4xl font-bold text-blue-600">Hello Tailwind!</h1>, 
  document.getElementById("root")

);

//  render(() => <DashboardLayout />, document.getElementById("root") as HTMLElement);