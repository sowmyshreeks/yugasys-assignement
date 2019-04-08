import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { ToastrManager } from 'ng6-toastr-notifications';

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
    public toastr: ToastrManager
  ) { }

  ngOnInit() {

  }
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required]);
  getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
        this.email.hasError('email') ? 'Not a valid email' :'';

  }
  getPassErrorMessage() {
    return this.password.hasError('required') ? 'You must enter a value' :'';

  }


  login(){
    let emailId = "sowmya.ks.65@gmail.com";
    let pass = "123456ks";

    if(this.email.value == emailId && this.password.value == pass){
      this.router.navigate(['/dashboard']);
    }else if(this.password.value == ""){
      this.toastr.warningToastr('Password is Required.');

    }
    else if(this.password.value != pass){
      this.toastr.warningToastr('Password is Incorrect.');

    }else
    {
      this.toastr.warningToastr('Emailid not exists.');
    }
  }
}
// this.LoginService.login(loginData).subscribe((data) => {
    //   if(data.data.userId == null){
    //     this.loginErorMsg = 'InValid login Id Or Password';
    //   }else
    //   this.router.navigate(['/dashboard']);
      
    // })