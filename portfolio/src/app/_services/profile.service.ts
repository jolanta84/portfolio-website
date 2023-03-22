import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  constructor(private http: HttpClient) {}

  skillsData: any = [
    { id: 1, name: 'JavaScript', imgUrl: '/.././assets/images/js.png' },
    { id: 1, name: 'JavaScript', imgUrl: '/.././assets/images/js.png' },
    { id: 1, name: 'JavaScript', imgUrl: '/.././assets/images/js.png' },
    { id: 1, name: 'JavaScript', imgUrl: '/.././assets/images/js.png' },
    { id: 1, name: 'JavaScript', imgUrl: '/.././assets/images/js.png' },
    { id: 1, name: 'JavaScript', imgUrl: '/.././assets/images/js.png' },
    { id: 1, name: 'JavaScript', imgUrl: '/.././assets/images/js.png' },
    { id: 1, name: 'JavaScript', imgUrl: '/.././assets/images/js.png' },
    { id: 1, name: 'JavaScript', imgUrl: '/.././assets/images/js.png' },
    { id: 1, name: 'JavaScript', imgUrl: '/.././assets/images/js.png' },
    { id: 1, name: 'JavaScript', imgUrl: '/.././assets/images/js.png' },
    { id: 1, name: 'JavaScript', imgUrl: '/.././assets/images/js.png' },





  ];

  skills(): Observable<any> {
    // return this.http.get(this.baseUrl + 'skills');
    return this.skillsData;
  }
}
