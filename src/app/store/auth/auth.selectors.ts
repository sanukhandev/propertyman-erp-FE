import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AuthState } from './auth.state';

export const selectAuthState = createFeatureSelector<AuthState>('auth');

export const isLoggedIn = createSelector(
  selectAuthState,
  (state: AuthState) => state?.isLoggedIn
);

export const selectCurrentUser = createSelector(
  selectAuthState,
  (state: AuthState) => state.user
);
