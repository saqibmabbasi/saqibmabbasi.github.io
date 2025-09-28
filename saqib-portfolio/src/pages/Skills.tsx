import skills from "../data-files/skills";

export default function Skills(){
    return (
        <>
            <ul className="grid gap-4 grid-cols-[repeat(auto-fit,minmax(200px,1fr))]">
                {skills.map(p => (
                    <li className="p-4">{p.type} <br/>
                        <ul className="grid gap-4 grid-cols-[repeat(auto-fit,minmax(200px,1fr))]">
                            {p.skills.map(s => (
                                <li className="p-4">{s.name} ({s.level})</li>
                            ))}
                        </ul>
                    </li>
                ))}
            </ul>
        </>
    );
}