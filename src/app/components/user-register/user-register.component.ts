import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Iuser } from 'src/app/models/iuser';
import { UsersAPIService } from 'src/app/services/users-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.scss']
})
export class UserRegisterComponent {
  userRegisterForm: FormGroup;
  user: Iuser = {} as Iuser;

  constructor(private formBuilder: FormBuilder,
    private userAPI: UsersAPIService,
    private router: Router) {

    this.userRegisterForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.minLength(5)]],
      email: ['', [Validators.required, Validators.email]],
      phone: this.formBuilder.array([formBuilder.control(''), [Validators.required]]),
      address: this.formBuilder.group({
        city: ['', [Validators.required]],
        street: ['', [Validators.required]],
        postalCode: ['', [Validators.required]]
      }),
      password: ['', [Validators.required, Validators.minLength(6)]],
      retypePassword: ['', [Validators.required, Validators.minLength(6)]],
      anyDay: [''],
      specificDay:['']
    })

  }

  get username() {
    return this.userRegisterForm.get('username');
  }
  get email() {
    return this.userRegisterForm.get('email');
  }
  get phone() {
    return this.userRegisterForm.get('phone') as FormArray;
  }
  get address() {
    return this.userRegisterForm.get('address');
  }
  get password() {
    return this.userRegisterForm.get('password');
  }
  get retypePassword() {
    return this.userRegisterForm.get('retypePassword');
  }
  get anyDay() {
    return this.userRegisterForm.get('anyDay');
  }
 



  addPhone() {
    this.phone.push(this.formBuilder.control(''))
  }
  removePhone(index: number) {
    if (index != 0) {
      this.phone.removeAt(index)
    }
  }

  // Submit Button => Add User Data
  addUserData() {
    this.user = this.userRegisterForm.value;
    this.userAPI.addNewUser(this.user).subscribe({
      next: (user) => {
        console.log(user);
        this.router.navigate(['/home'])
      },
      error: (err) => {
        console.log(err);
      }
    })
  }


  updateValidation(){
    if(this.anyDay?.value=='specific'){
      this.userRegisterForm.get('specificDay')?.addValidators([Validators.required]);
    }
    else{
  
      this.userRegisterForm.get('specificDay')?.clearValidators();
    }
    this.userRegisterForm.get('specificDay')?.updateValueAndValidity();
  }
}
