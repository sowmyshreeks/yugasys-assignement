import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { PageContentComponent } from './layout/page-content/page-content.component';
// import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthorisedLayoutComponent } from './layout/authorised/authorised-layout/authorised-layout.component';
//import { DashboardComponent } from './pages/dashboard/dashboard/dashboard.component';
import { AuthorisedFooterComponent } from './layout/authorised/authorised-footer/authorised-footer.component';
import { NgxDaterangepickerMd } from 'ngx-daterangepicker-material';
import { MaterialModule } from './material/material.module';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import { LoginComponent } from './pages/login/login.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginService } from './pages/login/login.service';
import { HttpModule } from '@angular/http';
import { ToastrModule } from 'ng6-toastr-notifications';


@NgModule({
  declarations: [
    AppComponent,
    PageContentComponent,
    // LandingPageComponent,
    AuthorisedLayoutComponent,
    //  DashboardComponent,
    AuthorisedFooterComponent,
    ForgotPasswordComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgxDaterangepickerMd,
    MaterialModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    HttpModule,
    ReactiveFormsModule,
    ToastrModule.forRoot()

  ],
  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
