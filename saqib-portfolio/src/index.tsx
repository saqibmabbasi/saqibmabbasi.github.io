/* @refresh reload */
import './index.css';
import { render } from 'solid-js/web'
import { Router, Route, Navigate } from "@solidjs/router";

// import "bootstrap/dist/css/bootstrap.min.css";

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
        <Header></Header>
        <SideNavigation></SideNavigation>
        <div>
            {props.children}
        </div>
        <Footer></Footer>
    </>
);

render(
  () => (
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
