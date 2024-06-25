import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-my-logo',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './my-logo.component.html',
  styleUrl: './my-logo.component.scss'
})
export class MyLogoComponent {
    @Input() logoRoute: string = "";

    @Input() logoPath: string = "";
}
