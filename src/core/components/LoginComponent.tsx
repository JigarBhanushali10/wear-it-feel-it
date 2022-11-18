import React from 'react'
import { useNavigate } from 'react-router-dom'
const LoginVideo = require('../../assets/video/footballV1.mp4')

function LoginComponent() {
    const navigate = useNavigate()
    return (
        <div className='loginComponent pt-5'>
            <div className='p-5'>
                <h1>
                    Welcome
                </h1>
                <p>
                    Don't have an account? <button className='btn btn-outline-dark ' onClick={()=>{navigate('/login/signUp')}}>Sign Up</button>
                </p>
                <div className='d-flex flex-column'>
                    <input type="text" name="globalSearch" id="globalSearch" className='border-dark  text-secondary px-3 my-4' placeholder='Enter Email Or phone No.' style={{ height: '50px' }} />
                    <button className='btn btn-dark  rounded-0  px-5 py-3 '>LOGIN</button>
                </div>
            </div>
        </div>
    )
}

export default LoginComponent