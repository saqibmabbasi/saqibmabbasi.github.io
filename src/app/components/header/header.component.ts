import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, RouterLink } from '@angular/router';
import { NgIf } from '@angular/common';

import { MyLogoComponent } from '../../components/my-logo/my-logo.component';
import { SocialNetworkComponent } from '../../components/social-network/social-network.component';
import { DataService } from '../../services/data.service';
import { Branding } from '../../models/all-models.model';

@Component({
    selector: 'app-header',
    standalone: true,
    imports: [RouterLink, NgIf, MyLogoComponent, SocialNetworkComponent],
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {

    currentURL = '';

    branding: Branding = {
        name: "-----",
        name_route: "-----",
        logo_route: "-----",
        logo_path: "-----"
    };


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
    }

}
