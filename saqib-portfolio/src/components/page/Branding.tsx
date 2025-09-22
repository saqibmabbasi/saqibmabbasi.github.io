import branding from '../data-files/branding.json';

export default function Branding() {
    return <>
        {<A href="{branding.name_route}"><h3>{branding.name}</h3></A>}
        </>
}
