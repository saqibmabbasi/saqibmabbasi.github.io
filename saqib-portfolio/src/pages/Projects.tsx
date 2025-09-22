import portfolio from '../data-files/portfolio.json';

export default function Projects() {
    return (
        <ul>
            {portfolio.map(p => (
                <li>{p.projectName} ({p.natureOfProject})</li>
            ))}
        </ul>
    );
}
