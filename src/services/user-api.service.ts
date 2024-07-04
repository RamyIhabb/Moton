import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserApiService {

  constructor(private _HttpClient: HttpClient) { }

  listBook(): Observable<any> {
    return this._HttpClient.get(`http://localhost:8000/api/v1/books`);
  }


}
