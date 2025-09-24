import { A } from "@solidjs/router";

import sociallinks from '../data-files/social-network';

export default function SocialLinks(){
    return (
        <>
            <A href={sociallinks.url} title={sociallinks.title}>
                <span class={sociallinks.icon}></span>
                 {sociallinks.name}
            </A>
        </>
    )
}
