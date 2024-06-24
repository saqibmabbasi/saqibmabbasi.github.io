
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
    titles: Title[];
}


export interface Title {
    name?: string;
}


export interface AboutMe {
    name?: string;
    objective?: string;
}



export interface AllSkill {
    type?: string;
    skills: Skill[];
}

export interface Skill {
    name?: string;
    level: number;
}


export interface Language {
    name?: string;
    description?: string;
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
    address?: string;
    mobileNumber?: string;
    emailAddress?: string;
}




export interface Academic {
    instituteName?: string;
    campusName?: string;
    degree?: string;
    fieldOfStudy?: string;
    year?: string;
}









