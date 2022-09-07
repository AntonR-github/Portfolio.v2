import jwtDecode from "jwt-decode";
import UserModel from "../Models/UserModel";

export class AuthState {

    public token: string = null;
    public user: UserModel = null;

    public constructor() {
        this.token = localStorage.getItem("token"); // Restore token from storage.
        if(this.token) {
            this.user = (jwtDecode(this.token) as any).user;
        }
    }
}

export enum AuthActionType {
    Register = "Register",
    Login = "Login",
    
}

export interface AuthAction {
    type: AuthActionType;
    payload?: string;
}

export function registerAction(token: string): AuthAction {
    const action: AuthAction = { type: AuthActionType.Register, payload: token };
    return action;
}
export function loginAction(token: string): AuthAction {
    const action: AuthAction = { type: AuthActionType.Login, payload: token };
    return action;
}


export function authReducer(currentState = new AuthState(), action: AuthAction): AuthState {

    const newState = { ...currentState };

    switch (action.type) {
        case AuthActionType.Register:
        case AuthActionType.Login:
            const token = action.payload;
            newState.token = token;
            newState.user = (jwtDecode(token) as any).user;
            localStorage.setItem("token", token); // Save token in storage.
            break;
    }

    return newState;

}
