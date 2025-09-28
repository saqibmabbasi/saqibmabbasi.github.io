import { A } from "@solidjs/router";

import sociallinks from '../../data-files/social-network.json';

export default function SocialLinks(){
    return (
        <>

            <div class="flex justify-between items-center">
                {sociallinks.map(p => (
                    <div class="bg-blue-300 p-4">
                        <A href={p.url} title={p.title}>
                            <span class={p.icon}></span> {p.name}
                        </A>
                    </div>
                 ))}
            </div>

            {/* <div class="flex flex-wrap gap-4">
                {sociallinks.map(p => (
                <div class="bg-blue-300 p-4 w-48">
                    <A href={p.url} title={p.title}>
                        <span class={p.icon}></span>
                        {p.name}
                    </A>
                </div>
            ))}
            </div> */}
        </>
    )
}
