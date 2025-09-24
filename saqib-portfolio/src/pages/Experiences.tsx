import experiences from '../data-files/experiences'

export default function Experiences(){
    return (
        <ul>
            {experiences.map(p => (
                <li>{p.companyName} ({p.designation} - {p.fromDate} - {p.toDate})
                    <ul>
                        {p.tasks.map(e => (
                            <li>{e.task}</li>
                        ))}
                    </ul>
                </li>
            ))}
        </ul>
    );
}
