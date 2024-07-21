import { Component, OnInit } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';

import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar';

import { DataService } from '../../services/data.service';

import { AllSkill,Skill } from '../../models/all-models.model';

@Component({
    selector: 'app-skills',
    standalone: true,
    imports: [NgFor,
        NgIf,
        MatGridListModule,
        MatCardModule,
        MatProgressBarModule
    ],
    templateUrl: './skills.component.html',
    styleUrl: './skills.component.scss'
})
export class SkillsComponent implements OnInit {

    allSkills: AllSkill[] = [];

    constructor(private dataSvc: DataService) { }

    ngOnInit() {

        this.dataSvc.getSkills().subscribe((skills: AllSkill[]) => {
            this.sortAllSkills(skills);
            this.allSkills = skills;
        });
    }


    sortAllSkills(array:AllSkill[]) {
        array.forEach(({ skills = [] }) => this.sortSkills(skills));
        array.sort((a, b) => a.type.localeCompare(b.type));
    }


    sortSkills(array:Skill[]){
        array.sort((x, y) => {
            if (x.level > y.level) return -1;
            if (x.level < y.level) return 1;
            return 0;
        })
    }

}
