import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html',
  styleUrls: ["login.component.css"]
})
export class LoginComponent { 
  errmsg: string;

  loginForm: FormGroup;
  loginErorMsg: string;
  hide = true;

  constructor(
    private router: Router,
  ) { }

  ngOnInit() {

  }
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required]);
  getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
        this.email.hasError('email') ? 'Not a valid email' :
        this.email.get('email').hasError('invalidEmailId') ? 'Emailid not exists' : '' ;

  }


  login(){
    if(this.email.value == "sowmya.ks.65@gmail.com" && this.password.value == "123456ks"){
      this.router.navigate(['/dashboard']);
    }else
    {
      this.errmsg = 'Emailid not exists'
        // this.email.value.setErrors({ 'invalidEmailId': true });

    }
    // this.LoginService.login(loginData).subscribe((data) => {
    //   if(data.data.userId == null){
    //     this.loginErorMsg = 'InValid login Id Or Password';
    //   }else
    //   this.router.navigate(['/dashboard']);
      
    // })

  }


}
