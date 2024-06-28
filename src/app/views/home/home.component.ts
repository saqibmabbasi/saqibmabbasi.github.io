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
    imports: [NgFor, NgIf, RouterLink,AsyncPipe
        //NgxTypewriterModule
    ],
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

    home: Home = {
        name: "-----",
        titles: []
    };


    //options: TPWInterface = {};


/*
    public options: TPWInterface = {
        textList: ['ngx-typewriter'],
        speed: 80,
        loop: true,
        delay: 200,
    }
*/

typedText$: any;

    // this.options = { textList: this.home.titles, speed: 80,
            //     loop: true,
            //     delay: 200,
            //     }


    constructor(private dataSvc: DataService,
        //private typewriterService: NgxTypewriterService
        private typewriterService: TypewriterService
    ) { }


    //private typewriterService = inject(TypewriterService);


    async ngOnInit() {
        console.log('ngOnInit - begin');

        //const tpw: TPW = this.typewriterService.getTPW('tpw');

        this.dataSvc.getHome().subscribe((_home: Home) => {
            this.home = _home;

            //console.log(tpw);

            // this.home?.titles.map(m => tpw.addText(m));
            //tpw.addText('adding another text');

            //tpw.textList = this.home?.titles;

            //tpw.loop = true;
            //tpw.speed = 80;
            //tpw.delay = 200;

            //console.log('1',this.options);

            this.typedText$ = this.typewriterService
    .getTypewriterEffect(this.home?.titles)
    .pipe(map((text) => text));


        });

        //console.log('2',this.options);
        console.log('ngOnInit - end');
    }



    // async addText() {
    //     const tpw: TPW = this.typewriterService.getTPW('tpw');
    //     tpw.speed = 200;
    //     await tpw.addText('adding another text');
    //   }


}
