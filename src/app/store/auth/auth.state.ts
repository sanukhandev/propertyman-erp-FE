export interface AuthState {
  isLoggedIn: boolean;
  user: any | null;
  error: string | null;
}

export const initialAuthState: AuthState = {
  isLoggedIn: false,
  user: null,
  error: null
};

export function authReducer(state = initialAuthState, action: any): AuthState {
  switch (action.type) {
    case '[Auth] Login Success':
      return {
        ...state,
        isLoggedIn: true,
        user: action.user,
        error: null
      };
    case '[Auth] Login Failure':
      return {
        ...state,
        error: action.error
      };
    case '[Auth] Logout':
      return {
        ...state,
        isLoggedIn: false,
        user: null
      };
    default:
      return state;
  }
}
