import { Component } from '@angular/core';

import { DashboardCard } from '../../models/dashboard-card';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  readonly cards: DashboardCard[] = [
    {
      title: 'Employees',
      value: 125,
      icon: 'pi pi-users',
    },
    {
      title: 'Departments',
      value: 8,
      icon: 'pi pi-sitemap',
    },
    {
      title: 'New Joiners',
      value: 12,
      icon: 'pi pi-user-plus',
    },
    {
      title: 'Active Projects',
      value: 18,
      icon: 'pi pi-briefcase',
    },
  ];
}
