import { Component, OnInit } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';

import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';

import { SideNavigation } from '../../models/all-models.model';
import { DataService } from '../../services/data.service';


@Component({
    selector: 'app-side-navigation',
    standalone: true,
    imports: [NgFor,
        NgIf,
        RouterLink,
        MatButtonModule,
        MatIconModule,
        MatSidenavModule,
        MatListModule,
        MatDividerModule
    ],
    templateUrl: './side-navigation.component.html',
    styleUrl: './side-navigation.component.scss'
})
export class SideNavigationComponent implements OnInit {

    sideNavigation: SideNavigation[] = [];

    constructor(private dataSvc: DataService) { }

    ngOnInit(): void {
        this.dataSvc.getSideNavigation().subscribe((_sideNavigation: SideNavigation[]) => {
            this.sideNavigation = _sideNavigation;
        });
    }

}
