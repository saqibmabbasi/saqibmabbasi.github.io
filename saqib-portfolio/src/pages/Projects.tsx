import portfolio from '../data-files/portfolio.json';

export default function Projects() {
    return (
        <div className="grid gap-4 grid-cols-[repeat(auto-fit,minmax(200px,1fr))]">
            {portfolio.map(p => (
                <div className="p-4">
                    {p.projectName} ({p.natureOfProject})
                </div>
            ))}
        </div>
    );
}
