import { AboutComponent } from './profile/components/about/about.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, ExtraOptions } from '@angular/router';
import { AppComponent } from './app.component';
import { ProjectsComponent } from './profile/components/projects/projects.component';
import { SkillsComponent } from './profile/components/skills/skills.component';
import { ContactComponent } from './profile/components/contact/contact.component';
import { HomeComponent } from './profile/components/home/home.component';

const routes: Routes = [


];



const routerOptions: ExtraOptions = {
  scrollPositionRestoration: 'enabled',
  anchorScrolling: 'enabled',
};

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
