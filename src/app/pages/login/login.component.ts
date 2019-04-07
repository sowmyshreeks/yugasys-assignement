import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './login.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html',
  styleUrls: ["login.component.css"]
})
export class LoginComponent { 

  loginForm: FormGroup;
  loginErorMsg: string;

  constructor(
    private router: Router,
    private LoginService: LoginService,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit() {

    this.loginForm = this.formBuilder.group({
      'loginId': ['', Validators.required],
      'pass': ['', Validators.required]
    });
  }


  login(){

    let loginData = {
      "body":{
            "emailId":this.loginForm.value.loginId,
            "password":this.loginForm.value.pass
            }
    };
    this.LoginService.login(loginData).subscribe((data) => {
      if(data.data.userId == null){
        this.loginErorMsg = 'InValid login Id Or Password';
      }else
      this.router.navigate(['/dashboard']);
      
    })

  }


}
