import axios from "axios";
import CredentialsModel from "../Models/CredentialsModel";
import UserModel from "../Models/UserModel";
import { loginAction, registerAction } from "../Redux/AuthState";
import store from "../Redux/Store";
import config from "../Utils/Config";

class AuthService {

    public async register(user: UserModel): Promise<void> {
        const response = await axios.post<string>(config.registerUrl, user);
        const token = response.data;
        store.dispatch(registerAction(token));
    }

    public async login(credentials: CredentialsModel): Promise<void> {
        const response = await axios.post<string>(config.loginUrl, credentials);
        const token = response.data;
        store.dispatch(loginAction(token));
    }



    public isLoggedIn(): boolean {
        return store.getState().authState.user !== null;
    }

}

const authService = new AuthService();

export default authService;