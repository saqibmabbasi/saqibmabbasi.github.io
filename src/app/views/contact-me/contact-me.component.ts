import { Component, OnInit } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { DataService } from '../../services/data.service';

import { ContactMe } from '../../models/all-models.model';

@Component({
  selector: 'app-contact-details',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './contact-me.component.html',
  styleUrl: './contact-me.component.scss'
})
export class ContactMeComponent implements OnInit {

  contactMe: ContactMe = {
    address: "-----",
    mobileNumber: "-----",
    emailAddress: "-----",
  };

  constructor(private dataSvc: DataService) { }

  ngOnInit() {

    this.dataSvc.getContactMe().subscribe((_contactMe:ContactMe) => {
      this.contactMe = _contactMe;
    });

  }
}
