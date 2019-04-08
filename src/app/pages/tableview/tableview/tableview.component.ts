import { Component, OnInit, NgModule, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import {FormControl, FormGroup, ReactiveFormsModule, FormsModule} from '@angular/forms';
import {NgSelectModule, NgOption} from '@ng-select/ng-select';


// declare var $: any;
@Component({
  templateUrl: 'tableview.component.html',
  styleUrls: ["tableview.component.css"]
})
export class TableViewComponent implements OnInit{

  selectedCity: any;
  

  

  cities = [
    {id: 1, name: 'Vilnius'},
    {id: 2, name: 'Kaunas'},
    {id: 3, name: 'Pavilnys', disabled: true},
    {id: 4, name: 'Pabradė'},
    {id: 5, name: 'Klaipėda'}
];

  ngOnInit() {}

  nav_position: string = 'end';


  constructor(private router: Router,) { }
  
  public customerList: any[] = [
    {
      companyName: 'IBM',
      contactNo: 'John Doe',
      purposeofVisit: 'collect Invoice',
      location: {
        lat: 12.798751,
        lng: 77.386833
      },
      address: 'Bidadi',
      state: 'Karnataka',
      country:'India',
      email:'Email@gmail.com',
      phone:'12345678900',
      gst_no:'A123',
      pan_no:'AU678',
      date:'17/1/19',
      city:'Kaunas',
    },
    {
      companyName: 'Goalsr India',
      contactNo: 'John Doe',
      purposeofVisit: 'collect Invoice',
      location: {
        lat: 12.933887,
        lng: 77.622260
      },
      address: "Koramangala",
      state: 'Karnataka',
      country:'India',
      email:'Email@gmail.com',
      phone:'12345678900',
      gst_no:'A123',
      pan_no:'AU678',
      date:'17/1/19',
      city:'Pavilnys',
    },
    {
      companyName: 'Goalsr India',
      contactNo: 'John Doe',
      purposeofVisit: 'collect Invoice',
      location: {
        lat: 12.933887,
        lng: 77.622260
      },
      address: "Koramangala",
      state: 'Karnataka',
      country:'India',
      email:'Email@gmail.com',
      phone:'12345678900',
      gst_no:'A123',
      pan_no:'AU678',
      date:'17/1/19',
      city:'Pavilnys',
    },
    {
      companyName: 'Goalsr India',
      contactNo: 'John Doe',
      purposeofVisit: 'collect Invoice',
      location: {
        lat: 12.914917,
        lng: 77.609281
      },
      address: 'kengeri',
      state: 'Karnataka',
      country:'India',
      email:'Email@gmail.com',
      phone:'12345678900',
      gst_no:'A123',
      pan_no:'AU678',
      date:'17/1/19',
      city:'Vilnius',
    },
    {
      companyName: 'Goalsr India',
      contactNo: 'John Doe',
      purposeofVisit: 'collect Invoice',
      location: {
        lat: 12.908726,
        lng: 77.624209
      },
      address: 'Bommanahalli',
      state: 'Karnataka',
      country:'India',
      email:'Email@gmail.com',
      phone:'12345678900',
      gst_no:'A123',
      pan_no:'AU678',
      date:'17/1/19',
      city:'Pabradė',
    },
    
    {
      companyName: 'ACC',
      contactNo: 'John Doe',
      purposeofVisit: 'collect Invoice',
      location: {
        lat: 12.867040,
        lng: 77.333881
      },
      address: 'Manchanabele',
      state: 'Karnataka',
      country:'India',
      email:'Email@gmail.com',
      phone:'12345678900',
      gst_no:'A123',
      pan_no:'AU678',
      date:'17/1/19',
      city:'Vilnius',
    },
    {
      companyName: 'ACC',
      contactNo: 'John Doe',
      purposeofVisit: 'collect Invoice',
      location: {
        lat: 12.867040,
        lng: 77.333881
      },
      address: 'Manchanabele',
      state: 'Karnataka',
      country:'India',
      email:'Email@gmail.com',
      phone:'12345678900',
      gst_no:'A123',
      pan_no:'AU678',
      date:'17/1/19',
      city:'Vilnius',
    },
    
    {
      companyName: 'ACC',
      contactNo: 'John Doe',
      purposeofVisit: 'collect Invoice',
      location: {
        lat: 12.547000,
        lng: 77.423100
      },
      address: 'Kanakapura',
      state: 'Karnataka',
      country:'India',
      email:'Email@gmail.com',
      phone:'12345678900',
      gst_no:'A123',
      pan_no:'AU678',
      date:'17/1/19',
      city:'Vilnius',
    }

  ];

 

}
