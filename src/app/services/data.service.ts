import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
    Home
    , AboutMe
    , AllSkill
    , Language
    , Project
    , Achievement
    , Experience
    , ContactMe
    , Academic
    , SocialNetwork
    , Branding
} from '../models/all-models.model';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class DataService {

    private apiUrl = 'assets/data/';

    constructor(private http: HttpClient) { }

    getBranding(): Observable<Branding> {
        return this.http.get<Branding>(`${this.apiUrl}branding.json`);
    }

    getSocialNetworkLinks(): Observable<SocialNetwork[]> {
        return this.http.get<SocialNetwork[]>(`${this.apiUrl}social-network.json`);
    }

    getSideNavigation(): Observable<SocialNetwork[]> {
        return this.http.get<SocialNetwork[]>(`${this.apiUrl}side-navigation.json`);
    }

    getHome(): Observable<Home> {
        return this.http.get<Home>(`${this.apiUrl}home.json`);
    }

    getAboutMe(): Observable<AboutMe> {
        return this.http.get<AboutMe>(`${this.apiUrl}about-me.json`);
    }

    getSkills(): Observable<AllSkill[]> {
        return this.http.get<AllSkill[]>(`${this.apiUrl}skills.json`);
    }

    getLanguages(): Observable<Language[]> {
        return this.http.get<Language[]>(`${this.apiUrl}languages.json`);
    }

    getAchievements(): Observable<Achievement[]> {
        return this.http.get<Achievement[]>(`${this.apiUrl}achievements.json`);
    }

    getPortfolio(): Observable<Project[]> {
        return this.http.get<Project[]>(`${this.apiUrl}portfolio.json`);
    }

    getContactMe(): Observable<ContactMe> {
        return this.http.get<ContactMe>(`${this.apiUrl}contact-me.json`);
    }

    getExperiences(): Observable<Experience[]> {
        return this.http.get<Experience[]>(`${this.apiUrl}experiences.json`);
    }

    getAcademics(): Observable<Academic[]> {
        return this.http.get<Academic[]>(`${this.apiUrl}academics.json`);
    }

    // getCoverLetter(): Observable<AllSkill[]> {
    //   return this.http.get<AllSkill[]>(`${this.apiUrl}skills.json`);
    // }

}
