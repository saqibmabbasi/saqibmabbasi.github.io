import { Component, OnInit } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { DataService } from '../../services/data.service';

import { AboutMe } from '../../models/all-models.model';

@Component({
    selector: 'app-about-me',
    standalone: true,
    imports: [NgFor, NgIf],
    templateUrl: './about-me.component.html',
    styleUrl: './about-me.component.scss'
})
export class AboutMeComponent implements OnInit {

    aboutMe: AboutMe = {
        name: "John",
        objective: "123 Main St"
    };

    constructor(private dataSvc: DataService) { }

    ngOnInit() {

        this.dataSvc.getAboutMe().subscribe((_aboutMe: AboutMe) => {
            this.aboutMe = _aboutMe;
        });

    }
}
