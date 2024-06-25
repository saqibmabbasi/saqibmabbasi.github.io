import { Component, OnInit } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { DataService } from '../../services/data.service';

// import { NgxTypewriterComponent } from '@omnedia/ngx-typewriter';

import { Home } from '../../models/all-models.model';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [NgFor, NgIf, RouterLink],
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

    home: Home = {
        name: "-----",
        titles: []
    };

    constructor(private dataSvc: DataService) { }

    ngOnInit() {
        // console.log('ngOnInit - begin');
        this.dataSvc.getHome().subscribe((_home: Home) => {
            this.home = _home;
            // console.log(this.home);
        });
        // console.log('ngOnInit - end');
    }
}
