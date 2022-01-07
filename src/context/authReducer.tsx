import { AuthState } from "./AuthContext";

type AuthAction = { type: 'signIn' };

export const authReducer = (state: AuthState, action: AuthAction): AuthState => {
    switch (action.type) {
        case 'signIn':
            state.isLoggedIn = true;
            return {
                ...state,
                isLoggedIn: true,
                username: 'no-username-yet'
            };
        default:
            return state;
    }
}
