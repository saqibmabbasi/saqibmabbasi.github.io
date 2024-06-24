import { Component, OnInit } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { DataService } from '../../services/data.service';

import { Experience } from '../../models/all-models.model';

@Component({
  selector: 'app-experiences',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.scss'
})
export class ExperiencesComponent implements OnInit {

  experiences: Experience[] = [];

  constructor(private dataSvc: DataService) { }

  ngOnInit() {

    this.dataSvc.getExperiences().subscribe((_experiences:Experience[]) => {
      this.experiences = _experiences;
    });

  }
}
