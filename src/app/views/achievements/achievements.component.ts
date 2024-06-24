import { Component, OnInit } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { DataService } from '../../services/data.service';

import { Achievement } from '../../models/all-models.model';

@Component({
  selector: 'app-achievements',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './achievements.component.html',
  styleUrl: './achievements.component.scss'
})
export class AchievementsComponent implements OnInit {

  achievements: Achievement[] = [];

  constructor(private dataSvc: DataService) { }

  ngOnInit() {

    this.dataSvc.getAchievements().subscribe((_achievements:Achievement[]) => {
      this.achievements = _achievements;
    });

  }
}
