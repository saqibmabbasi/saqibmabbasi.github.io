import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

// import { SocialNetworkComponent } from './components/social-network/social-network.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'saqibmabbasi.github.io';

  constructor(){
  }
}
