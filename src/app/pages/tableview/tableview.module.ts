import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxDaterangepickerMd } from 'ngx-daterangepicker-material';
import { MaterialModule } from 'src/app/material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TableviewRoutingModule } from './tableview-routing.module';
import { TableViewComponent } from './tableview/tableview.component';
import { NgSelectModule } from '@ng-select/ng-select';

@NgModule({
  imports: [
    CommonModule,
    NgxDaterangepickerMd,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule, 
    TableviewRoutingModule,
    NgSelectModule

  ],
  declarations: [TableViewComponent, ],
  providers: []
})
export class TableviewModule { }
