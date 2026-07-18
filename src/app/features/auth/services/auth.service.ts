import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, map } from 'rxjs';

import { environment } from 'src/environments/environment';


import { StorageService } from 'src/app/core/services/storage.service';
import { STORAGE_KEYS } from 'src/app/core/constants/storage-keys';

import { LoginRequest } from '../models/login-request';
import { LoginResponse } from '../models/login-response';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly apiUrl = `${environment.apiUrl}/users`;

  constructor(
    private readonly http: HttpClient,
    private readonly storageService: StorageService,
  ) {}

  login(request: LoginRequest): Observable<LoginResponse> {
    return this.http.get<User[]>(`${this.apiUrl}?email=${request.email}`).pipe(
      map((users) => {
        if (users.length === 0) {
          throw new Error('Invalid email or password.');
        }

        const user = users[0];

        if (user.password !== request.password) {
          throw new Error('Invalid email or password.');
        }

        const response: LoginResponse = {
          id: user.id,
          name: user.name,
          email: user.email,
          token: 'dummy-jwt-token',
        };

        this.storageService.setItem(STORAGE_KEYS.TOKEN, response.token);
        this.storageService.setItem(STORAGE_KEYS.USER, response);

        return response;
      }),
    );
  }

  isLoggedIn(): boolean {
    return this.getToken() !== null;
  }

  getCurrentUser(): LoginResponse | null {
    return this.storageService.getItem<LoginResponse>(STORAGE_KEYS.USER);
  }

  getToken(): string | null {
    return this.storageService.getItem<string>(STORAGE_KEYS.TOKEN);
  }

  logout(): void {
    this.storageService.removeItem(STORAGE_KEYS.TOKEN);
    this.storageService.removeItem(STORAGE_KEYS.USER);
  }
}
