import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
// import { User } from '../models/user';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  login(username: string, password: string): Observable<any> {
    console.log('AuthService: login');
    // Here you should implement your actual authentication logic, e.g., calling an API
    if (username === 'admin' && password === 'password') {
      return of({ id: 1, username: 'admin' });
    } else {
      console.log('Invalid credentials');
      return throwError(() => new Error('Invalid credentials'));
    }
  }

  logout(): Observable<void> {
    // Implement logout logic
    return of();
  }
}
