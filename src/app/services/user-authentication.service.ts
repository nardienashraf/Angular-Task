import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserAuthenticationService {

  private isUserLoggedSubject: BehaviorSubject<boolean>

  constructor() {
    this.isUserLoggedSubject = new BehaviorSubject<boolean>(this.userState)

  }

  get userState(): boolean {
    return (localStorage.getItem("token") ? true : false);
  }

  login(email:string, password:number){
    let userToken = '479838749857';
    localStorage.setItem("token", userToken);
    this.isUserLoggedSubject.next(true);
  }

  logout(){
    localStorage.removeItem("token");
    this.isUserLoggedSubject.next(false);
  }

  getUserStatus():Observable<boolean>{
    return this.isUserLoggedSubject.asObservable();
  }


}
