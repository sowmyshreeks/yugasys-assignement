import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './login.service';
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
    private LoginService : LoginService,
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
  let loginData = {
    "email": this.email.value,
    "password": this.password.value
}
if(loginData.password){
  this.LoginService.login(loginData).subscribe((data) => {
      if(data.token == "QpwL5tke4Pnpja7X"){
        this.router.navigate(['/dashboard']);
      }else{
        this.toastr.warningToastr('Emailid and Password dose not match.');
      }
      
    })
      }else{
        this.toastr.warningToastr('Password is Required.');
        
      }
}
}
