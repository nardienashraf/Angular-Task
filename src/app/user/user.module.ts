import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { EditprofileComponent } from './editprofile/editprofile.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path:'profile', component:UserProfileComponent, title: 'User Profile'},
  {path:'edit', component:EditprofileComponent, title: 'Edit Profile'}
]

@NgModule({
  declarations: [
    UserProfileComponent,
    EditprofileComponent
  ],
  imports: [
  CommonModule,
  RouterModule.forChild(routes)
  ]
})
export class UserModule { }
