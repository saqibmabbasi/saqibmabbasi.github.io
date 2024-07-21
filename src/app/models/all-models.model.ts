
export interface Branding {
    name: string,
    name_route: string,
    logo_path: string,
    logo_route: string
}


export interface SideNavigation {
    name: string,
    url: string
    icon: string,
    title: string,
}

export interface SocialNetwork {
    name: string,
    title: string,
    icon: string,
    url: string
}

export interface Home {
    name?: string;
    titles: string[];
}


export interface Title {
    name: string;
}


export interface AboutMe {
    name?: string;
    image: string;
    objective: string;
    details: string[];
}



export interface AllSkill {
    type: string;
    skills: Skill[];
}

export interface Skill {
    name: string;
    level: number;
}


export interface Language {
    name: string;
    description?: string;
    level: Lang[]
}


export interface Lang{
    medium: string;
    proficiency: string;
}


export interface Project {
    projectName?: string;
    natureOfProject?: string;
}




export interface Achievement {
    title?: string;
    beneficiary?: string;
}



export interface Experience {
    companyName?: string;
    designation?: string;
    fromDate?: string;
    toDate?: string;
    tasks: Task[];
}


export interface Task {
    task?: string;
}


export interface ContactMe {
    type: string,
    name: string,
    value: string,
    visible: boolean,
    icon: string,
    colspan: number,
    rowspan: number
    // address?: string;
    // mobileNumber?: string;
    // emailAddress?: string;
}




export interface Academic {
    instituteName?: string;
    campusName?: string;
    degree?: string;
    fieldOfStudy?: string;
    year?: string;
}



export interface Timeline {
    type: string;
    organization: string;
    location: string;
    domain: string;
    field: string;
    fromDate: string;
    toDate: string;

    status?: string;
    date: Date;
    icon: string;
    color?: string;
    image?: string;
    scope: string[];
}


