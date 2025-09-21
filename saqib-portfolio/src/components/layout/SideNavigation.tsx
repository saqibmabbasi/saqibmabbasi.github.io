import { A } from "@solidjs/router";

export default function SideNavigation() {
    return <>
        <h2>Side Navigation</h2>
        <nav style={{ display: "flex", gap: "1rem" }}>
            <A href="/public">Home</A>
            | <A href="/about-me">About Me</A>
            | <A href="/achievements">Achievements</A>
            | <A href='/academics'>Academics</A>
            {/*| <A href='/experience'>Experience</A>*/}
            | <A href='/experiences'>Experiences</A>
            | <A href='/project'>Project</A>
            | <A href='/projects'>Projects</A>
            | <A href='/skills'>Skills</A>
            | <A href='/social-links'>SocialLinks</A>
        </nav>
        </>
}