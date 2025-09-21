import { A } from "@solidjs/router";

export default function SideNavigation() {
    return <>
        <nav className="nav flex-column">
            <A className="nav-link" href="/">Home</A>
            <A className="nav-link" href="/about-me">About Me</A>
            <A className="nav-link" href="/achievements">Achievements</A>
            <A className="nav-link" href='/academics'>Academics</A>
            <A className="nav-link" href='/experiences'>Experiences</A>
            <A className="nav-link" href='/projects'>Projects</A>
            <A className="nav-link" href='/skills'>Skills</A>
        </nav>
    </>
}