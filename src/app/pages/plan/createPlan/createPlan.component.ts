import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import * as moment from 'moment';

@Component({
  selector: 'app-create',
  templateUrl: './createPlan.component.html',
  styleUrls: ['./createPlan.component.scss']
})
export class CreatePlanComponent implements OnInit {

    curDate = moment();
  date = new FormControl(new Date());
  serializedDate = new FormControl((new Date()).toISOString());
  selected: any = { startDate: moment(), endDate: moment() };

  public userArray: Array<any> = [];
  public user: any = {};

  addUser() {
    if (this.user && Object.keys(this.user) && Object.keys(this.user).length) {
    this.userArray.push(this.user)
    this.user = {};
    }
    console.log(this.userArray);
    }

  deleteuser(index) {
      this.userArray.splice(index, 1);
  }

  public customerArray: Array<any> = [];
  public customer: any = {};

  addCustomer() {
    if (this.customer && Object.keys(this.customer) && Object.keys(this.customer).length) {
      this.customerArray.push(this.customer)
      this.customer = {};
    }
      console.log(this.customerArray);
  }

  deleteCustomer(index) {
      this.customerArray.splice(index, 1);
  }

 

  constructor() { }

  ngOnInit() {
    
  }

  

}
