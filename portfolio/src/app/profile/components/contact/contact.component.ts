import { Component, OnInit } from '@angular/core';
import { ProfileService } from 'src/app/_services/profile.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  buttons: any;

  constructor(private profileService: ProfileService) {}
  ngOnInit(): void {
    this.buttons = this.profileService.getButtons();
  }
}
