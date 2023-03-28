import { Component, OnInit } from '@angular/core';
import { UserAuthenticationService } from 'src/app/services/user-authentication.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent implements OnInit{

  user:boolean=false;
  constructor(private authService: UserAuthenticationService){

  }
  ngOnInit(): void {
    this.user = this.authService.userState;
  }

  userLogin(){
    const email:string="nardeenashraf2014@gmail.com"
    const pass:number= 1234

    this.authService.login(email, pass);
    this.user= this.authService.userState //true 
  }

  userLogout(){
    this.authService.logout();
    this.user = this.authService.userState; //false 
  }
}
