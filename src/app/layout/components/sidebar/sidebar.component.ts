import { Component } from '@angular/core';
import { NAVIGATION_MENU } from '../../constants/navigation';

import { LayoutService } from '../../services/layout.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  readonly menuItems = NAVIGATION_MENU;

  readonly sidebarCollapsed$ = this.layoutService.sidebarCollapsed$;

  constructor(private readonly layoutService: LayoutService) {}
}
