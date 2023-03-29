import { Component, OnInit } from '@angular/core';
import { ProfileService } from 'src/app/_services/profile.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit {
  projects: any;

  constructor(private profileService: ProfileService) {}
  ngOnInit(): void {
    this.projects = this.profileService.getProjects();
  }
}
