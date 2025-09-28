import experiences from '../data-files/experiences'

export default function Experiences(){
    return (
        <div className="grid gap-4 grid-cols-[repeat(auto-fit,minmax(200px,1fr))]">
            {experiences.map(p => (
                <div className="p-4">{p.companyName} ({p.designation} - {p.fromDate} - {p.toDate})
                    <ul>
                        {p.tasks.map(e => (
                            <li className="p-4">{e.task}</li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
}
