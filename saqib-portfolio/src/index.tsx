/* @refresh reload */
import './index.css';
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
import SocialLinks from './pages/SocialLinks';
import NotFound from "./pages/NotFound";

import Header from "./components/layout/Header.tsx";
import SideNavigation from "./components/layout/SideNavigation.tsx";
import Footer from "./components/layout/Footer.tsx";

const [sidebarOpen, setSidebarOpen] = createSignal(true);

const App = (props) => (
    <>
    <div class="flex h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      {/* Sidebar */}
      <aside
        class={`${
          sidebarOpen() ? "w-80" : "w-20"
        } bg-white dark:bg-gray-800 shadow-md transition-all duration-300`}
      >
        <div class="flex items-center justify-between p-4 border-b dark:border-gray-700">
          <h1 class={`${sidebarOpen() ? "block" : "hidden"} text-xl font-bold`}>
            Admin
          </h1>
          <button
            class="text-gray-500 dark:text-gray-300"
            onClick={() => setSidebarOpen(!sidebarOpen())}
          >
            ☰
          </button>
        </div>
        <SideNavigation></SideNavigation>
      </aside>

      {/* Main Content */}
      <main class="flex-1 flex flex-col">
        {/* Header */}
        <Header></Header>

        {/* Content */}
        <section class="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div>
            {props.children}
          </div>
        </section>

        <Footer></Footer>
      </main>
    </div>
  );






      {/* <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <h1 className="text-4xl font-bold text-blue-600">
          Tailwind is working 🎉
        </h1>
        <Header></Header>
        <SocialLinks></SocialLinks>
        <SideNavigation></SideNavigation>
        
    </div> */}

      
    </>
);

render(
  () => (
    // <DashboardLayout />,
    <Router root={App}>
        <Route path="/" component={Home} />
        <Route path="/about-me" component={AboutMe} />
        <Route path="/achievements" component={Achievements} />
        <Route path="/academics" component={Academics} />
        <Route path="/experience" component={Experience} />
        <Route path="/experiences" component={Experiences} />
        <Route path="/project" component={Project} />
        <Route path="/projects" component={Projects} />
        <Route path="/skills" component={Skills} />
        <Route path="/social-links" component={SocialLinks} />

        <Route path="/public" element={<Navigate href="/" />} />

        <Route path="*paramName" component={NotFound} />
    </Router>
  ),
  <h1 class="text-4xl font-bold text-blue-600">Hello Tailwind!</h1>, 
  document.getElementById("root")
 
);

//  render(() => <DashboardLayout />, document.getElementById("root") as HTMLElement);