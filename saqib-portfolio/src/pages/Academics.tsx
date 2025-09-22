import academics from "../data-files/academics";

export default function Academics(){
    return (
        <ul>
            {academics.map(p => (
                <li>{p.instituteName} ({p.campusName} - {p.degree} - {p.fieldOfStudy} - {p.year})</li>
            ))}
        </ul>
    );
}
