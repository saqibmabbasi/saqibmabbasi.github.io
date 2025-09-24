/* @refresh reload */
import './index.css';
import { render } from 'solid-js/web'
import { Router, Route, Navigate } from "@solidjs/router";

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

const App = (props) => (
    <>
      {/* <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <h1 className="text-4xl font-bold text-blue-600">
          Tailwind is working 🎉
        </h1>
        <Header></Header>
        <SocialLinks></SocialLinks>
        <SideNavigation></SideNavigation>
        <div>
          {props.children}
        </div>
        <Footer></Footer>
      </div> */}
    </>
);

render(
  () => (
    <DashboardLayout />,
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
  document.getElementById("root")
 
);

//  render(() => <DashboardLayout />, document.getElementById("root") as HTMLElement);