import { A } from "@solidjs/router";
import branding from '../../data-files/branding.json';

export default function Branding(props: { sidebarOpen?: boolean }) {
    return (
        <A href={branding.name_route} class="flex items-center">
            <h3 class="text-lg font-bold text-blue-600 dark:text-blue-400">
                {props.sidebarOpen ? branding.name : branding.shortName}
            </h3>
        </A>
    );
}