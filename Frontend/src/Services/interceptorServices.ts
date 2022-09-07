import axios from "axios";
import store from "../Redux/Store";
import authServices from "./AuthServices";



class InterceptorService {

    public createInterceptors(): void {
        
        axios.interceptors.request.use(request => {

            if(authServices.isLoggedIn()) {
                request.headers = {
                    authorization: "Bearer " + store.getState().authState.token
                };
            }

            return request;

        });

    }

}

const interceptorService = new InterceptorService();

export default interceptorService;