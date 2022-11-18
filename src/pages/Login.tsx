import React from 'react'
import { Outlet } from "react-router-dom";

import LoginComponent from '../core/components/LoginComponent'

const LoginVideo = require('../assets/video/footballV1.mp4')

function Login() {
    return (
        <div className='d-flex overflow-hidden p-4 h-100 '>

            <div className='flex-grow-1 d-flex'>
                <div className='col-3'>

                <Outlet />
                </div>
                <video className='loginVideo p-4 overflow-hidden' loop autoPlay >
                    <source src={LoginVideo} type="video/mp4" />
                    Your browser does not support HTML video.
                </video>
            </div>
        </div>
    )
}

export default Login