/* @refresh reload */
import { render } from 'solid-js/web'
import { Router, Route, A } from "@solidjs/router";
import './index.css'

import AboutMe from "./pages/AboutMe"
import Academics from "./pages/Academics";
import Achievements from "./pages/Achievements"
import Experience from "./pages/Experience"
import Experiences from "./pages/Experiences"
import Home from './pages/Home';
import Project from './pages/Project';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import SocialLinks from './pages/SocialLinks';
import NotFound from "./pages/NotFound";

const App = (props) => (
  <>
    <nav style={{ display: "flex", gap: "1rem" }}>
        <A href="/">Home</A> 
        | <A href="/about-me">About Me</A> 
        | <A href="/achievements">Achievements</A> 
        | <A href='/academics'>Academics</A>
        | <A href='/experience'>Experience</A>
        | <A href='/experiences'>Experiences</A>
        | <A href='/project'>Project</A>
        | <A href='/projects'>Projects</A>
        | <A href='/skills'>Skills</A>
        | <A href='/social-links'>SocialLinks</A>
    </nav>
    <h1>Saqib Mustafa Abbasi</h1>
    {props.children}
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
        <Route path="*paramName" component={NotFound} />
    </Router>
  ),
  document.getElementById("root")
);
