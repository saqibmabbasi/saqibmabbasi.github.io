import { Component, OnInit } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { DataService } from '../../services/data.service';

import { Home, Title } from '../../models/all-models.model';

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [NgFor, NgIf],
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

    home: Home = {
        name: "-----",
        titles: [
            { name: "-----" }
        ]
    };

    constructor(private dataSvc: DataService) { }

    ngOnInit() {

        this.dataSvc.getHome().subscribe((_home: Home) => {
            this.home = _home;
        });

    }
}
