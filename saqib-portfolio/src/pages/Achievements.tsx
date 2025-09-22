import achievements from "../data-files/achievements";


export default function Achievements(){
    return (
        <ul>
            {achievements.map(p => (
                <li>{p.title} ({p.beneficiary})</li>
            ))}
        </ul>
    );
}
