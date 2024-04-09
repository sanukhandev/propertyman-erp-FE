import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {catchError, map, mergeMap, tap} from 'rxjs/operators';
import { of } from 'rxjs';
import { AuthService } from '../../service/auth.service';
import * as AuthActions from './auth.actions';
import {Router} from '@angular/router';

@Injectable( { providedIn: 'root' })
export class AuthEffects {
  constructor(private actions$: Actions, private authService: AuthService, private router: Router) {}

  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.login),
      tap(action => console.log('login effect', action)),
      mergeMap(action =>
        this.authService.login(action.username, action.password).pipe(
          map(user => AuthActions.loginSuccess({ user })),
          catchError(error => of(AuthActions.loginFailure({ error })))
        )
      )
    )
  );
  loginError$ = createEffect(() =>
      this.actions$.pipe(
        ofType(AuthActions.loginFailure),
        tap(() => {
          alert('Login failed! Please check your credentials and try again.');
        })
      ),
    { dispatch: false } // This effect does not dispatch an action
  );

  loginSuccess$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.loginSuccess),
      tap(() => {
        this.router.navigate(['/']);
      })
    ),
    { dispatch: false } // This effect does not dispatch an action
  );
}
