import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SocialNetworkComponent } from '../../components/social-network/social-network.component';
import { MyLogoComponent } from '../../components/my-logo/my-logo.component';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-blank-layout',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, MyLogoComponent, SocialNetworkComponent],
  templateUrl: './blank-layout.component.html',
  styleUrl: './blank-layout.component.scss'
})
export class BlankLayoutComponent {

}
