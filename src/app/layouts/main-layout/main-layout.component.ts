import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SocialNetworkComponent } from '../../components/social-network/social-network.component';
import { SideNavigationComponent } from '../../components/side-navigation/side-navigation.component';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [RouterOutlet, SideNavigationComponent, SocialNetworkComponent],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.scss'
})
export class MainLayoutComponent {

    currentYear:number;

    constructor(){
        let currentDate = new Date();
        this.currentYear = currentDate.getFullYear();
      }
}
