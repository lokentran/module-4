import { IAwesome } from './../interfaces/iawesome';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AwesomeService {
  url ='http://localhost:3000/awesomes';

  constructor(private http: HttpClient) { }

  getAll(): Observable<[IAwesome]> {
    return this.http.get<[IAwesome]>(this.url);
  }

  delete(id:number): Observable<IAwesome> {
    return this.http.delete<IAwesome>(this.url+ '/' +id);
  }

  edit(list, id): Observable<IAwesome> {
    return this.http.put<IAwesome>(this.url + '/' + id, list);
  }

  getUserById(id): Observable<IAwesome> {
    return this.http.get<IAwesome>(this.url + '/' + id);
  }

}
