import { Component, OnInit, Input } from '@angular/core';
import { Router, NavigationEnd, RouterLink } from '@angular/router';
import { NgFor, NgIf } from '@angular/common';

import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';

import { MyLogoComponent } from '../../components/my-logo/my-logo.component';
// import { SocialNetworkComponent } from '../../components/social-network/social-network.component';
import { DataService } from '../../services/data.service';
import { Branding } from '../../models/all-models.model';
import { SocialNetwork } from '../../models/all-models.model';
import { ExternalLinkDirective } from '../../directives/external-link.directive';


@Component({
    selector: 'app-header',
    standalone: true,
    imports: [RouterLink,
        NgFor,
        NgIf,
        ExternalLinkDirective,
        MyLogoComponent,
        // SocialNetworkComponent,
        MatToolbarModule,
        MatButtonModule,
        MatIconModule
    ],
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {

    @Input() snav: any;

    currentURL = '';

    branding: Branding = {
        name: "-----",
        name_route: "-----",
        logo_route: "-----",
        logo_path: "-----"
    };

    socialNetworkLinks: SocialNetwork[] = [];


    constructor(private router: Router, private dataSvc: DataService) {
        this.router.events.subscribe((event) => {
            if (event instanceof NavigationEnd) {
                this.currentURL = event.url;
            }
        });
    }


    ngOnInit() {
        this.dataSvc.getBranding().subscribe((_branding: Branding) => {
            this.branding = _branding;
        });

        this.dataSvc.getSocialNetworkLinks().subscribe((_socialNetwork:SocialNetwork[]) => {
            this.socialNetworkLinks = _socialNetwork;
        });
    }

}
