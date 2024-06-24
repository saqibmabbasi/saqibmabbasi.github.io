import { Component, OnInit } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { DataService } from '../../services/data.service';

import { Language } from '../../models/all-models.model';

@Component({
  selector: 'app-languages',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './languages.component.html',
  styleUrl: './languages.component.scss'
})
export class LanguagesComponent implements OnInit {

  languages: Language[] = [];

  constructor(private dataSvc: DataService) { }

  ngOnInit() {

    this.dataSvc.getLanguages().subscribe((_languages:Language[]) => {
      this.languages = _languages;
    });

  }
}
