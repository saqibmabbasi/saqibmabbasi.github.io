import { Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { AboutMeComponent } from './views/about-me/about-me.component';
import { LanguagesComponent } from './views/languages/languages.component';
import { SkillsComponent } from './views/skills/skills.component';
import { ContactMeComponent } from './views/contact-me/contact-me.component';
import { AcademicsComponent } from './views/academics/academics.component';
import { ExperiencesComponent } from './views/experiences/experiences.component';
import { AchievementsComponent } from './views/achievements/achievements.component';
import { PortfolioComponent } from './views/portfolio/portfolio.component';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { BlankLayoutComponent } from './layouts/blank-layout/blank-layout.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: BlankLayoutComponent,
        children: [
            {
                path: '',
                component: HomeComponent
            },
        ]
    },
    {
        path: '',
        component: MainLayoutComponent,
        children: [
            {
                path: "about-me",

                component: AboutMeComponent
            },
            {
                path: "contact-me",
                component: ContactMeComponent
            },
            {
                path: "languages",
                component: LanguagesComponent
            },
            {
                path: "skills",
                component: SkillsComponent
            },
            {
                path: "academics",
                component: AcademicsComponent
            },
            {
                path: "experiences",
                component: ExperiencesComponent
            },
            {
                path: "achievements",
                component: AchievementsComponent
            },
            {
                path: "portfolio",
                component: PortfolioComponent
            },
        ],
    },
];
