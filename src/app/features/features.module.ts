import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeaturesRoutingModule } from './features-routing.module';
import { ForgotPasswordComponent } from './auth/pages/forgot-password/forgot-password.component';
import { EmployeeSearchComponent } from './employee-search/pages/employee-search/employee-search.component';

@NgModule({
  declarations: [ForgotPasswordComponent, EmployeeSearchComponent],
  imports: [CommonModule, FeaturesRoutingModule],
})
export class FeaturesModule {}
