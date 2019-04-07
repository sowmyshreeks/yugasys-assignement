import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxDaterangepickerMd } from 'ngx-daterangepicker-material';
import { MaterialModule } from 'src/app/material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomerRoutingModule } from './cutomer-routing.module';
import { CustomerComponent } from './customer/customer.component';
import { NgSelectModule } from '@ng-select/ng-select';

@NgModule({
  imports: [
    CommonModule,
    NgxDaterangepickerMd,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule, 
    CustomerRoutingModule,
    NgSelectModule

  ],
  declarations: [CustomerComponent, ],
  providers: []
})
export class CustomerModule { }
