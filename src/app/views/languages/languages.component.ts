import { Component, OnInit } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';

import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar';

import { DataService } from '../../services/data.service';
import { Language } from '../../models/all-models.model';

@Component({
    selector: 'app-languages',
    standalone: true,
    imports: [NgFor,
        NgIf,
        MatGridListModule,
        MatCardModule,
        MatProgressBarModule
    ],
    templateUrl: './languages.component.html',
    styleUrl: './languages.component.scss'
})
export class LanguagesComponent implements OnInit {

    languages: Language[] = [];

    constructor(private dataSvc: DataService) { }

    ngOnInit() {

        this.dataSvc.getLanguages().subscribe((_languages: Language[]) => {
            this.languages = _languages;
        });

    }
}
