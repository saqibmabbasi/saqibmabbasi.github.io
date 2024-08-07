import { Component, OnInit } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';

import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';

import { DataService } from '../../services/data.service';
import { SocialNetwork } from '../../models/all-models.model';
import { ExternalLinkDirective } from '../../directives/external-link.directive';

@Component({
  selector: 'app-social-network',
  standalone: true,
  imports: [ NgFor, NgIf, ExternalLinkDirective, MatButtonModule, MatIconModule ],
  templateUrl: './social-network.component.html',
  styleUrl: './social-network.component.scss'
})
export class SocialNetworkComponent {

    socialNetworkLinks: SocialNetwork[] = [];

    constructor(private dataSvc: DataService) { }

    ngOnInit() {

      this.dataSvc.getSocialNetworkLinks().subscribe((_socialNetwork:SocialNetwork[]) => {
        this.socialNetworkLinks = _socialNetwork;
      });

    }

}
