import { useContext } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../core/context/AuthContext";
import authService from "../core/services/Auth.service";


const LoginVideo = require('../assets/video/footballV1.mp4')

function Login() {

    const navigate = useNavigate()
    const location = useLocation()
    const redirectPath = location.state?.path 
    const { storeUserAuthData } = useContext(AuthContext)

    const onSubmitHandler = (formType: string, values: any, resetForm: () => void) => {
        if (formType === 'signUp') {

            authService.signUp(values).then(res => {
                storeUserAuthData(res.user)
                navigate(redirectPath);
            }).catch(err => console.error(err.message))
        } else if (formType === 'signIn') {
            authService.signIn(values).then(() => {
                navigate(redirectPath);
            })
        };
        resetForm();
    };

    return (
        <div className=' p-4 flex-grow-1 '>
            <div className='row align-items-center py-1 h-100'>
                <div className='col-12 col-sm-7 col-xl-3  mx-auto'>
                    <Outlet context={{ onSubmitHandler }} />
                </div>
                <video className='loginVideo p-2 overflow-hidden d-none d-xl-block col-xl-9 ' loop autoPlay >
                    <source src={LoginVideo} type="video/mp4" />
                    Your browser does not support HTML video.
                </video>
            </div>
        </div>
    )
}

export default Login