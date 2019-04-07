// Angular
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';


// Forms Component


// Tabs Component
// import { TabsModule } from 'ngx-bootstrap/tabs';

// Carousel Component
// import { CarouselModule } from 'ngx-bootstrap/carousel';

// Collapse Component
// import { CollapseModule } from 'ngx-bootstrap/collapse';

// Dropdowns Component
// import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

// Pagination Component
// import { PaginationModule } from 'ngx-bootstrap/pagination';

// Popover Component
// import { PopoverModule } from 'ngx-bootstrap/popover';

// Progress Component
// import { ProgressbarModule } from 'ngx-bootstrap/progressbar';

// Tooltip Component
// import { TooltipModule } from 'ngx-bootstrap/tooltip';


// Components Routing
// import { BaseRoutingModule } from './base-routing.module';
import { MyplanComponent } from './myPlans/myPlan.component';

import { FlatpickrModule } from 'angularx-flatpickr';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { CalenderComponent } from './calender/calender.component';
import { FullCalendarModule } from 'ng-fullcalendar';
import { EventSesrvice } from './calender/event.service';
import { MaterialModule } from 'src/app/material/material.module';
import { NgSelectModule } from '@ng-select/ng-select';
import { MatButtonModule, MatCheckboxModule } from '@angular/material';
import { NgxDaterangepickerMd } from 'ngx-daterangepicker-material';
import { TodayPlanComponent } from './todayPlan/todayPlan.component';
import { CreatePlanComponent } from './createPlan/createPlan.component';
import { PlanRoutingModule } from './plan-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    FullCalendarModule,
    PlanRoutingModule,
    ReactiveFormsModule,
    NgxDaterangepickerMd,
    NgSelectModule,
    MatButtonModule,
    MatCheckboxModule,
    // BsDropdownModule.forRoot(),
    // TabsModule,
    // CarouselModule.forRoot(),
    // CollapseModule.forRoot(),
    // PaginationModule.forRoot(),
    // PopoverModule.forRoot(),
    // ProgressbarModule.forRoot(),
    // TooltipModule.forRoot(),
    NgbModalModule,
    MaterialModule,
    FlatpickrModule.forRoot(),
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    })
  ],
  declarations: [
    MyplanComponent,
    CalenderComponent,
    TodayPlanComponent,
    CreatePlanComponent
  ],
  providers: [ EventSesrvice ]
})
export class PlanModule { }
