import axios from "axios";
import { useContext } from "react";
import { ReactContext } from "../../shared/contexts/ReactContext";
// import { ReactContext } from "../../shared/components/ReactContext";


/**
 * axious interceptor
 */


const AuthInterceptor = () => {
    const {setloader} = useContext(ReactContext)

    axios.interceptors.request.use(request => {
        if (request.headers) {
            request.headers.AccessToken = ' Jigar1234'
        }
        setloader(true)
        return request
    }, (error) => Promise.reject(error))

    axios.interceptors.response.use(response => {
        // console.log('response', response);
        setloader(false)
        return response
    },
        (error) => {
            const status = error?.response?.status;
            /**
             * error handeling
             */
            switch (status) {
                case 400:
                    console.log(error.response);
                    break;
                case 401:
                    console.log("Unauthorized");
                    break;
                case 404:
                    console.log(error.response?.status);
                    break;
                case 500:
                    console.log("server error");
                    break;
                default:
                    console.log("an unknown error occurred");
                    break;
            }
            return Promise.reject(error)
        })
    return null
}

export default AuthInterceptor

