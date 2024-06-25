import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SideNavigationComponent } from '../../components/side-navigation/side-navigation.component';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, SideNavigationComponent],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.scss'
})
export class MainLayoutComponent {

    constructor() { }
}
