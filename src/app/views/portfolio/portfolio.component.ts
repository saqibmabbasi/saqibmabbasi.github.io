import { Component, OnInit } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { DataService } from '../../services/data.service';

import { Project } from '../../models/all-models.model';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent implements OnInit {

  projects: Project[] = [];

  constructor(private dataSvc: DataService) { }

  ngOnInit() {

    this.dataSvc.getPortfolio().subscribe((_projects:Project[]) => {
      this.projects = _projects;
    });

  }
}
