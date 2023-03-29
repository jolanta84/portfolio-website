import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProfileComponent } from './profile.component';
import { AppRoutingModule } from '../app-routing.module';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { SkillsComponent } from './components/skills/skills.component';
import { AboutComponent } from './components/about/about.component';



@NgModule({
  declarations: [HeaderComponent, FooterComponent,HomeComponent,ContactComponent,ProjectsComponent,SkillsComponent,
    AboutComponent,
    ProfileComponent],
    imports: [
      CommonModule,
      AppRoutingModule
    ],
    exports:[HeaderComponent, FooterComponent, HomeComponent,ContactComponent,ProjectsComponent,SkillsComponent,
      AboutComponent, CommonModule ]
  })
export class ProfileModule { }
