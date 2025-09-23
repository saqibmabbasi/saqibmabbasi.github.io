import skills from "../data-files/skills";

export default function Skills(){
    return (
        <ul>
            {skills.map(p => (
                <li>{p.type} <br/>
                    <ul>
                        {p.skills.map(s => (
                            <li>{s.name} ({s.level})</li>
                        ))};
                    </ul>
                </li>
            ))}
        </ul>
    );
}
