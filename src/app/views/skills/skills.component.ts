import { Component, OnInit } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { DataService } from '../../services/data.service';

import { AllSkill } from '../../models/all-models.model';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent implements OnInit {

  allSkills: AllSkill[] = [];

  constructor(private dataSvc: DataService) { }

  ngOnInit() {

    this.dataSvc.getSkills().subscribe((skills:AllSkill[]) => {
      this.allSkills = skills;
    });

  }
}
