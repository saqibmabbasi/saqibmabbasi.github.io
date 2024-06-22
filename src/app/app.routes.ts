import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { LanguagesComponent } from './languages/languages.component';
import { SkillsComponent } from './skills/skills.component';
import { ContactMeComponent } from './contact-me/contact-me.component';
import { AcademicsComponent } from './academics/academics.component';
import { ExperiencesComponent } from './experiences/experiences.component';
import { MajorAchievementsComponent } from './major-achievements/major-achievements.component';
import { PortfolioComponent } from './portfolio/portfolio.component';

export const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
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
    path: "major-achievements",
    component: MajorAchievementsComponent
  },
  {
    path: "portfolio",
    component: PortfolioComponent
  },
];
