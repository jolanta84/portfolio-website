import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  constructor(private http: HttpClient) {}

  skillsData: any = [
    { id: 1, name: 'Html', imgUrl: '/.././assets/images/html.png' },
    { id: 2, name: 'CSS', imgUrl: '/.././assets/images/css.png' },
    { id: 3, name: 'JavaScript', imgUrl: '/.././assets/images/js.png' },
    { id: 4, name: 'TypeScript', imgUrl: '/.././assets/images/typescript.png' },
    { id: 5, name: 'Angular', imgUrl: '/.././assets/images/angular.png' },
    { id: 6, name: 'WebPack', imgUrl: '/.././assets/images/webpack.png' },
    { id: 7, name: 'MongoDB', imgUrl: '/.././assets/images/mongodb.png' },
    { id: 8, name: 'Bootstrap', imgUrl: '/.././assets/images/bootstrap.png' },
    { id: 9, name: 'SAP', imgUrl: '/.././assets/images/sap.png' },
  ];

  projectsData: any = [
    {
      id: 1,
      title: 'BLOG APP',
      description: 'Angular 12 CRUD Application to consume Web APIs, display, add, delete & modify data.',
      gitHubUrl: 'https://github.com/jolanta84/blog-app-project',
      imgUrl: 'assets/images/blog_app.png',
      technology: 'Angular 12 | TypeScript | Bootstarp',
    },
    {
      id: 2,
      title: 'ORDER VIEWER',
      description: 'The app contains the following pages: login, registration and view the order. User authorization using JWT Authentication',
      gitHubUrl: 'https://github.com/jolanta84/orders-viewer',
      imgUrl: 'assets/images/orders_app.png',
      technology: 'Angular 12 | Angular Material'

    },
    {
      id: 3,
      title: 'RESTAURANT',
      description:'Responsive (RWD) app. It contains: following pages: Home, Menu, About, Contact, Booking ',
      gitHubUrl: 'https://github.com/jolanta84/restaurant-website',
      imgUrl: 'assets/images/restaurant_app.png',
      technology: 'HTML | CSS | JavaScript',
    },
    {
      id: 4,
      title: 'PORTFOLIO',
      description: 'Single page application to display information about me and my recent work',
      gitHubUrl: 'https://github.com/jolanta84/portfolio-website/tree/main/portfolio',
      imgUrl: 'assets/images/portfolio.png',
      technology: 'Angular 15 | Bootstrap',
    },
  ];

  buttonsData:any=[
    {
      id:1,
      name:"Linkedin",
      icon:"bi bi-linkedin",
      href:"https://www.linkedin.com/in/jolanta-pisulska"
    },
    {
      id:1,
      name:"GitHub",
      icon:"bi bi-github",
      href:"https://github.com/jolanta84"
    },
    {
      id:1,
      name:"Email",
      icon:"bi bi-envelope",
      href:"mailto:jolanta.pisulska@gmail.com"
    },
  ]



  getSkills(): Observable<any> {
    // return this.http.get(this.baseUrl + 'skills');
    return this.skillsData;
  }

  getProjects(): Observable<any> {
    // return this.http.get(this.baseUrl + 'skills');
    return this.projectsData;
  }
  public getButtons(): Observable<any> {
    // return this.http.get(this.baseUrl + 'skills');
    return this.buttonsData;

  }



}

