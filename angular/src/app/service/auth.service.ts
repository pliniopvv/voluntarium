import { Injectable } from '@angular/core';
import { User } from '../model/user';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.development';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  async verify(user: User) {
    // return await firstValueFrom(this.http.post(`${environment.API}`, {}));
    return true;
  }

  getUser(): User {
    const user = localStorage.getItem('user');
    if (user) return JSON.parse(user);
    return null;
  }

  setUser(user: User) {
    localStorage.setItem('user',JSON.stringify(user));
  }
}
