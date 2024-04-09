import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import { Observable } from 'rxjs';
import {Store} from '@ngrx/store';
import {isLoggedIn} from '../store/auth/auth.selectors';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private store: Store, private router: Router) {}

  canActivate(): Observable<boolean> {
    return this.store.select(isLoggedIn).pipe(
      map(auth => {
        if (!auth) {
          console.log('Access denied');
          this.router.navigate(['/authentication/login-3']);
          return false;
        }
        return true;
      })
    );
  }
}
