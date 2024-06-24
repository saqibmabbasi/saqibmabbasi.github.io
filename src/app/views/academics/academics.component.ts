import { Component, OnInit } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { DataService } from '../../services/data.service';

import { Academic } from '../../models/all-models.model';

@Component({
  selector: 'app-academics',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './academics.component.html',
  styleUrl: './academics.component.scss'
})
export class AcademicsComponent implements OnInit {

  academics: Academic[] = [];

  constructor(private dataSvc: DataService) { }

  ngOnInit() {

    this.dataSvc.getAcademics().subscribe((_academics:Academic[]) => {
      this.academics = _academics;
    });

  }
}
