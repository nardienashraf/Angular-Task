import { Component, OnInit } from '@angular/core';
import { UserAuthenticationService } from 'src/app/services/user-authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{
  user:boolean;

  constructor(private userAuthService: UserAuthenticationService){
    this.user = this.userAuthService.userState;
  }
  ngOnInit(): void {
    // this.user = this.userAuthService.userState;
    this.userAuthService.getUserStatus().subscribe((status)=>{
      this.user = status;
    })
  }

}
