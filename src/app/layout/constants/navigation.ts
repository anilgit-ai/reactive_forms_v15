import { MenuItem } from 'primeng/api';

export const NAVIGATION_MENU: MenuItem[] = [
  {
    label: 'Dashboard',
    icon: 'pi pi-home',
    routerLink: ['/dashboard'],
  },
  {
    label: 'Employees',
    icon: 'pi pi-users',
    disabled: true,
  },
  {
    label: 'Departments',
    icon: 'pi pi-sitemap',
    disabled: true,
  },
  {
    label: 'Settings',
    icon: 'pi pi-cog',
    disabled: true,
  },
];
