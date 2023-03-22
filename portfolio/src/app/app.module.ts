import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './profile/components/about/about.component';
import { HeaderComponent } from './profile/components/header/header.component';
import { HomeComponent } from './profile/components/home/home.component';
import { ProjectsComponent } from './profile/components/projects/projects.component';
import { SkillsComponent } from './profile/components/skills/skills.component';
import { ContactComponent } from './profile/components/contact/contact.component';
import { FooterComponent } from './profile/components/footer/footer.component';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { ProfileModule } from './profile/profile.module';





const routes: Routes = [{path:'',
component: ProfileComponent}


];

const routerOptions: ExtraOptions = {
  scrollPositionRestoration: 'enabled',
  anchorScrolling: 'enabled',
};

@NgModule({
  declarations: [
    AppComponent,
    



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes, routerOptions),
ProfileModule,
    HttpClientModule,

    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
