import aboutme from '../data-files/about-me';

export default function AboutMe(){
    return (
        <>
            <p>{aboutme.name}</p>
            <p>{aboutme.image}</p>
            <p>{aboutme.objective}</p>
            <p>{aboutme.details}</p>
        </>
    );
}