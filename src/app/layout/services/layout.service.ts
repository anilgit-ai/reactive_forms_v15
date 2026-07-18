import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LayoutService {
  private readonly sidebarCollapsedSubject = new BehaviorSubject<boolean>(
    false,
  );

  readonly sidebarCollapsed$: Observable<boolean> =
    this.sidebarCollapsedSubject.asObservable();

  toggleSidebar(): void {
    this.sidebarCollapsedSubject.next(!this.sidebarCollapsedSubject.value);
  }

  collapseSidebar(): void {
    this.sidebarCollapsedSubject.next(true);
  }

  expandSidebar(): void {
    this.sidebarCollapsedSubject.next(false);
  }
}
