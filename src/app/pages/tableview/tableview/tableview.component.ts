import { Component, OnInit, NgModule, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import {FormControl, FormGroup, ReactiveFormsModule, FormsModule} from '@angular/forms';
import {NgSelectModule, NgOption} from '@ng-select/ng-select';
import { TableViewService } from "src/app/pages/tableview/tableview/tableview.service";


// declare var $: any;
@Component({
  templateUrl: 'tableview.component.html',
  styleUrls: ["tableview.component.css"]
})
export class TableViewComponent implements OnInit{
  customerList: any;

  selectedCity: any;
  

  

  cities = [
    {id: 1, name: 'Vilnius'},
    {id: 2, name: 'Kaunas'},
    {id: 3, name: 'Pavilnys', disabled: true},
    {id: 4, name: 'Pabradė'},
    {id: 5, name: 'Klaipėda'}
];

  

  nav_position: string = 'end';


  constructor(
    private router: Router,
    private TableViewService: TableViewService,
  ) { }

  ngOnInit() {
    this.TableViewService.list().subscribe((res)=>{
      this.customerList = res.data;
    });
  }
  
  
 

}
