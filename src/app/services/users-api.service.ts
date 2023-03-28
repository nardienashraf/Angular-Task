import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Iuser } from '../models/iuser';

@Injectable({
  providedIn: 'root'
})
export class UsersAPIService {
  private httpOptions={};

  constructor(private httpClient: HttpClient) { 
    this.httpOptions= {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
  }

  //Get all users
  getAllUsers():Observable<Iuser[]> {
    return this.httpClient.get<Iuser[]>(`${environment.APIURL}/users`)
  }
  
  //Add new user
    addNewUser(newUser:Iuser):Observable<Iuser>{
      return this.httpClient.post<Iuser>(`${environment.APIURL}/users`,JSON.stringify(newUser), this.httpOptions); 
    }

}
