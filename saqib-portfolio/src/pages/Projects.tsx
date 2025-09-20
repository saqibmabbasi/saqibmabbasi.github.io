import projects from '../data-files/projects.json';

export default function Projects() {
    return (
        <ul>
            {projects.map(p => (
                <li key={p.id}>{p.name} ({p.tech})</li>
            ))}
        </ul>
    );
}
