import { Outlet } from "react-router-dom";


const LoginVideo = require('../assets/video/footballV1.mp4')

function Login() {
    return (
        <div className=' p-4 flex-grow-1 '>
            <div className='row align-items-center py-1'>
                <div className='col-12 col-sm-7 col-xl-3  mx-auto'>
                <Outlet />
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