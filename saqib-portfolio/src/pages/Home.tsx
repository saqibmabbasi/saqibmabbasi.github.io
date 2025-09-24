import home from '../data-files/home';

export default function Home(){
    return (
        <>
            <div className="min-h-screen flex items-center justify-center bg-gray-100">
                <h1 className="text-4xl font-bold text-blue-600">
                    Tailwind is working 🎉
                </h1>
            </div>
            <h2>{home.name}</h2>
            <ul>
                {home.titles.map(t => (
                    <li>{t.title}</li>
                ))}
            </ul>
        </>
    );
}
