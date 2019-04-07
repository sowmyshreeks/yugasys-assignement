import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-today',
  templateUrl: './todayPlan.component.html',
  styleUrls: ['./todayPlan.component.scss']
})
export class TodayPlanComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

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
    // {
    //   plan_no: '4',
    //   plan_type: 'Duration',
    //   plan_by: 'Admin',
    //   date_from: '31/1/19 ',
    //   date_to:'- 22/2/19',
    //   customer:'Goalsr',
    //   contact_person:'John Doe ',
    //   msg: 'Collect bill',
    //   createdDate:'14/1/2019',
    //   status:'Pending'
    // },
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
    // {
    //   plan_no: '2',
    //   plan_type: 'Week',
    //   plan_by: 'Admin',
    //   date_from: '22/1/19 ',
    //   date_to: '- 27/1/19',
    //   customer:'Goalsr',
    //   contact_person:'John Doe ',
    //   msg: 'Collect bill',
    //   createdDate:'14/1/2019',
    //   status:'Inprogress'
    // },

  ];

}
