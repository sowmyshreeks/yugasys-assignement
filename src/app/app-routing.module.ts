import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthorisedLayoutComponent } from './layout/authorised/authorised-layout/authorised-layout.component';
import { DashboardComponent } from './pages/dashboard/dashboard/dashboard.component';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'ForgotPassword',
    component: ForgotPasswordComponent,
    data: {
      title: 'ForgotPassword Page'
    }
  },
  {
    path: 'login',
    component: LoginComponent,
    data: {
      title: 'Login Page'
    }
  },
 
  {
    path: '',
    component: AuthorisedLayoutComponent,
    children: [
      {
        path: 'dashboard',
        //component: DashboardComponent
        loadChildren: './pages/dashboard/dashboard.module#DashboardModule'
      },
      {
        path: 'plan',
        loadChildren: './pages/plan/plan.module#PlanModule'
      },
      {
        path: 'grid', loadChildren: './pages/grid/grid.module#GridModule',
        
      },
      {
        path: 'settings', loadChildren: './pages/settings/settings.module#SettingsModule',
        
      },
      {
        path: 'customer', loadChildren: './pages/customer/cutomer.module#CustomerModule',
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
