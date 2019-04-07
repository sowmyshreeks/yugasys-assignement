import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyplanComponent } from './myPlans/myPlan.component';
import { CalenderComponent } from './calender/calender.component';
import { TodayPlanComponent } from './todayPlan/todayPlan.component';
import { CreatePlanComponent } from './createPlan/createPlan.component';

const routes: Routes = [
  { path: 'myplans', component: MyplanComponent },
  { path: 'calender', component:CalenderComponent},
  { path: 'todayPlan', component:TodayPlanComponent},
  { path: 'creatPlan', component:CreatePlanComponent}

  /* {
    path: '',
    component: MyplanComponent,
    children: [
      { path: 'myplans', component: MyplanComponent },
      { path: 'customers', component: CustomerComponent }
    ]
  } */
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlanRoutingModule { }
