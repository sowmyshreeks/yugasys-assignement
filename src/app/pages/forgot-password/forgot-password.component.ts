import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  forgotPass: FormGroup;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit() {

    this.forgotPass = this.formBuilder.group({
      'emailId': ['', Validators.required],
    });
  }

  email = new FormControl('', [Validators.required, Validators.email]);
  getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
        this.email.hasError('email') ? 'Not a valid email' :
            '';
  }

  forgotPassword(){
    let forgotPasswordData = {
      "body":{
            "emailId":this.forgotPass.value.emailId,
            }
    };
    
  };

}
