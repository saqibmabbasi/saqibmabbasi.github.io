import home from '../data-files/home';

export default function Home(){
    return (
        <>
            <h2>{home.name}</h2>
            <ul>
                {home.titles.map(t => (
                    <li>{t.title}</li>
                ))}
            </ul>
        </>
    );
}
