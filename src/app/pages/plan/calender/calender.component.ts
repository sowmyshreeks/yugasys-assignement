import { Component, OnInit, ViewChild } from '@angular/core';
import { CalendarComponent } from 'ng-fullcalendar';
import { EventSesrvice } from './event.service';
import { Options } from 'fullcalendar';
  @Component({
    selector: 'customer-calender-component',
    styleUrls: ['calender.component.css'],
    templateUrl: 'calender.component.html'
  })
  export class CalenderComponent {
    calendarOptions: Options;
    displayEvent: any;
     @ViewChild(CalendarComponent) ucCalendar: CalendarComponent;
     constructor(protected eventService: EventSesrvice) { }
   
     ngOnInit() {
       this.eventService.getEvents().subscribe(data => {
         this.calendarOptions = {
           editable: true,
           eventLimit: false,
           header: {
             left: 'prev,next today',
             center: 'title',
             right: 'month,agendaWeek,agendaDay,listMonth'
           },
           events: data
         };
       });
     }
     clickButton(model: any) {
       this.displayEvent = model;
     }
     eventClick(model: any) {
       model = {
         event: {
           id: model.event.id,
           start: model.event.start,
           end: model.event.end,
           title: model.event.title,
           allDay: model.event.allDay
           // other params
         },
         duration: {}
       }
       this.displayEvent = model;
     }
     updateEvent(model: any) {
       model = {
         event: {
           id: model.event.id,
           start: model.event.start,
           end: model.event.end,
           title: model.event.title
           // other params
         },
         duration: {
           _data: model.duration._data
         }
       }
       this.displayEvent = model;
     }
  }