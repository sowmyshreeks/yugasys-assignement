import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GridComponent } from "./grid.component";

const routes: Routes = [
  {
    path: '',
    component: GridComponent,
    pathMatch: 'full'
  },
  {
    path: 'grid',
    component: GridComponent,
    pathMatch: 'full'
   
  },
  
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GridRoutingModule { }
