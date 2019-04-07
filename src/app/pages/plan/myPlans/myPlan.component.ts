import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { FormControl } from '@angular/forms';
declare var $: any;
@Component({
  templateUrl: 'myPlan.component.html',
  styleUrls: ["myPlan.component.css"]
})
export class MyplanComponent implements OnInit{

  selectedCity: any;
  curDate = moment();
  date = new FormControl(new Date());
  serializedDate = new FormControl((new Date()).toISOString());
  selected: any = { startDate: moment(), endDate: moment() };
  ranges: any = {
    'Today': [moment(), moment()],
    'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
    'Last 7 Days': [moment().subtract(6, 'days'), moment()],
    'Last 30 Days': [moment().subtract(29, 'days'), moment()],
    'This Month': [moment().startOf('month'), moment().endOf('month')],
    'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
  }


  nav_position: string = 'end';
  cities = [
    {id: 1, name: 'Vilnius'},
    {id: 2, name: 'Kaunas'},
    {id: 3, name: 'Pavilnys', disabled: true},
    {id: 4, name: 'Pabradė'},
    {id: 5, name: 'Klaipėda'}
];

  ngOnInit() {}

  

  constructor(private router: Router,) { }
  
  public planList: any[] = [
    
    {
      plan_no: '1',
      plan_type: 'Day',
      plan_by: 'Admin',
      date_from: '24/1/2019',
      customer:'Goalsr',
      contact_person:'John Doe ',
      msg: 'Collect bill',
      createdDate:'14/1/2019',
      status:'Inprogress'
    },
    {
      plan_no: '1',
      plan_type: 'Day',
      plan_by: 'Admin',
      date_from: '24/1/2019',
      customer:'Goalsr',
      contact_person:'John Doe ',
      msg: 'Collect bill',
      createdDate:'14/1/2019',
      status:'Completed'
    },
    {
      plan_no: '2',
      plan_type: 'Day',
      plan_by: 'Admin',
      date_from: '31/1/2019',
      customer:'Goalsr',
      contact_person:'John Doe ',
      msg: 'Collect bill',
      createdDate:'14/1/2019',
      status:'Completed'
    },
    {
      plan_no: '3',
      plan_type: 'Week',
      plan_by: 'Admin',
      date_from: '29/1/19 ',
      date_to:'- 3/2/19',
      customer:'Goalsr',
      contact_person:'John Doe ',
      msg: 'Collect bill',
      createdDate:'14/1/2019',
      status:'Completed'
    },
    {
      plan_no: '4',
      plan_type: 'Duration',
      plan_by: 'Admin',
      date_from: '31/1/19 ',
      date_to:'- 22/2/19',
      customer:'Goalsr',
      contact_person:'John Doe ',
      msg: 'Collect bill',
      createdDate:'14/1/2019',
      status:'Pending'
    },
    {
      plan_no: '5',
      plan_type: 'Day',
      plan_by: 'Self',
      date_from: '31/1/2019',
      customer:'Goalsr',
      contact_person:'John Doe ',
      msg: 'Collect bill',
      createdDate:'14/1/2019',
      status:'Pending'
    },
    {
      plan_no: '1',
      plan_type: 'Day',
      plan_by: 'Self',
      date_from: '31/1/2019',
      customer:'Goalsr',
      contact_person:'John Doe ',
      msg: 'Collect bill',
      createdDate:'14/1/2019',
      status:'Pending'
    },
    {
      plan_no: '2',
      plan_type: 'Week',
      plan_by: 'Admin',
      date_from: '22/1/19 ',
      date_to: '- 27/1/19',
      customer:'Goalsr',
      contact_person:'John Doe ',
      msg: 'Collect bill',
      createdDate:'14/1/2019',
      status:'Inprogress'
    },

  ];

}
