import { Component, OnInit } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { DataService } from '../../services/data.service';

//import {NgxTypewriterModule, NgxTypewriterService, TPW, TPWInterface} from "ngx-typewriter";

import { Home } from '../../models/all-models.model';
import { RouterLink } from '@angular/router';
import { TypewriterService } from '../../services/typewriter.service';
import { map } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [NgFor,
        NgIf,
        RouterLink,
        AsyncPipe,
    ],
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

    home: Home = {
        name: "-----",
        titles: []
    };

    typedText$: any;

    constructor(private dataSvc: DataService,
        private typewriterService: TypewriterService
    ) { }


    async ngOnInit() {
        this.dataSvc.getHome().subscribe((_home: Home) => {
            this.home = _home;

            this.typedText$ = this.typewriterService
                                        .getTypewriterEffect(this.home?.titles)
                                        .pipe(map((text) => text));
        });
    }

}
