import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './profile/about/about.component';
import { HeaderComponent } from './profile/header/header.component';
import { HomeComponent } from './profile/home/home.component';
import { ProjectsComponent } from './profile/projects/projects.component';
import { SkillsComponent } from './profile/skills/skills.component';
import { ContactComponent } from './profile/contact/contact.component';
import { FooterComponent } from './profile/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HeaderComponent,
    HomeComponent,
    ProjectsComponent,
    SkillsComponent,
    ContactComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
