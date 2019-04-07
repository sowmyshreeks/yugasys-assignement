import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TableViewComponent } from './tableview/tableview.component';

const routes: Routes = [
  {
    path: '',
    component: TableViewComponent,
    pathMatch: 'full'
  },
  { 
      path: 'tableview', 
      component: TableViewComponent, 
      pathMatch: 'full'
  },
  
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TableviewRoutingModule { }
