import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from 'src/app/features/auth/services/auth.service';
import { LoginResponse } from 'src/app/features/auth/models/login-response';
import { LayoutService } from '../../services/layout.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  constructor(
    private readonly authService: AuthService,
    private readonly router: Router,
    private layoutService: LayoutService,
  ) {}

  get user(): LoginResponse | null {
    return this.authService.getCurrentUser();
  }
  toggleSidebar(): void {
    this.layoutService.toggleSidebar();
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/auth']);
  }
}
