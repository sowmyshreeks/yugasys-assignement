import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './login.service';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html',
  styleUrls: ["login.component.css"]
})
export class LoginComponent { 

  loginForm: FormGroup;
  loginErorMsg: string;
  hide = true;

  constructor(
    private router: Router,
    private LoginService: LoginService,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit() {

    this.loginForm = this.formBuilder.group({
      'loginId': ['', Validators.required],
      'pass': ['', Validators.required],
    });
  }
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required]);
  getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
        this.email.hasError('email') ? 'Not a valid email' :
            '';
  }


  login(){

    let userId = "sowmya.ks.65@gmail.com";
    let loginPass = "123456ks"; 

    let loginData = {
      "body":{
            "emailId":this.loginForm.value.loginId,
            "password":this.loginForm.value.pass
            }
    };

    if(this.email.value == "sowmya.ks.65@gmail.com" && this.password.value == "123456ks"){
      this.router.navigate(['/dashboard']);
    }
    // this.LoginService.login(loginData).subscribe((data) => {
    //   if(data.data.userId == null){
    //     this.loginErorMsg = 'InValid login Id Or Password';
    //   }else
    //   this.router.navigate(['/dashboard']);
      
    // })

  }


}
