import achievements from "../data-files/achievements";


export default function Achievements(){
    return (
        <div className="grid gap-4 grid-cols-[repeat(auto-fit,minmax(200px,1fr))]">
            {achievements.map(p => (
                <div className="p-4">{p.title} ({p.beneficiary})</div>
            ))}
        </div>
    );
}
