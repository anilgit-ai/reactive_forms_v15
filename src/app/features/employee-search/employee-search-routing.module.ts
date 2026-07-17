import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeSearchComponent } from './pages/employee-search/employee-search.component';

const routes: Routes = [
  {
    path: '',
    component: EmployeeSearchComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmployeeSearchRoutingModule {}
