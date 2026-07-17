import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeaturesRoutingModule } from './features-routing.module';
import { DashboardComponent } from './dashboard/pages/dashboard/dashboard.component';
import { LoginComponent } from './auth/pages/login/login.component';
import { ForgotPasswordComponent } from './auth/pages/forgot-password/forgot-password.component';
import { EmployeeSearchComponent } from './employee-search/pages/employee-search/employee-search.component';


@NgModule({
  declarations: [
    DashboardComponent,
    LoginComponent,
    ForgotPasswordComponent,
    EmployeeSearchComponent
  ],
  imports: [
    CommonModule,
    FeaturesRoutingModule
  ]
})
export class FeaturesModule { }
