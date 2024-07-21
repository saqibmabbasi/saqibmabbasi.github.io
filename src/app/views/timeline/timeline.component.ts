import { Component, OnInit } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';

import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar';

import { TimelineModule } from 'primeng/timeline';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';

import { DataService } from '../../services/data.service';
import { Timeline } from '../../models/all-models.model';

@Component({
    selector: 'app-timeline',
    standalone: true,
    imports: [NgFor,
        NgIf,
        MatGridListModule,
        MatCardModule,
        MatProgressBarModule,
        TimelineModule,
        CardModule,
        ButtonModule
    ],
    templateUrl: './timeline.component.html',
    styleUrl: './timeline.component.scss'
})
export class TimelineComponent implements OnInit {

    timeline: Timeline[] = [];

    events: EventItem[];

    constructor(private dataSvc: DataService) {

        this.events = [
            { status: 'Ordered', date: '15/10/2020 10:30', icon: 'pi pi-shopping-cart', color: '#9C27B0', image: 'game-controller.jpg' },
            { status: 'Processing', date: '15/10/2020 14:00', icon: 'pi pi-cog', color: '#673AB7' },
            { status: 'Shipped', date: '15/10/2020 16:15', icon: 'pi pi-shopping-cart', color: '#FF9800' },
            { status: 'Delivered', date: '16/10/2020 10:00', icon: 'pi pi-check', color: '#607D8B' }
        ];
    }


    ngOnInit() {
        this.dataSvc.getTimeline().subscribe((_timeline: Timeline[]) => {
            this.timeline = _timeline.sort((a,b) => {
                if (a.date < b.date) return 1;
                if (a.date > b.date) return -1;
                else return 0;
            });
        });
    }

}





interface EventItem {
    status?: string;
    date?: string;
    icon?: string;
    color?: string;
    image?: string;
}


