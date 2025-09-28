import { A } from "@solidjs/router";

import sociallinks from '../data-files/social-network.json';

export default function SocialLinks(){
    return (
        <>
            <div>
                {sociallinks.map(p => (
                <div>
                    <A href={p.url} title={p.title}>
                        <span class={p.icon}></span>
                        {p.name}
                    </A>
                </div>
            ))}
            </div>
        </>
    )
}
