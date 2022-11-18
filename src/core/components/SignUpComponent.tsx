import React from 'react'
import { useNavigate } from 'react-router-dom'


function SignUpComponent() {
    const navigate = useNavigate()
    return (
        <div className='loginComponent pt-5'>
            <div className='p-5'>
                <h1>
                    Create an account
                </h1>
                <p>
                    Do you have an account? <button className='btn btn-outline-dark ' onClick={() => { navigate('/login/signIn') }}>Sign In</button>
                </p>
                <div className='row my-4'>
                    <div className='col-6 my-3 '>
                        <input type="text" name="globalSearch" id="globalSearch" className='border-dark px-3  text-secondary w-100' placeholder='Enter Name' style={{ height: '50px' }} />
                    </div>
                    <div className='col-6 my-3 '>

                        <input type="text" name="globalSearch" id="globalSearch" className='border-dark px-3  text-secondary w-100' placeholder='Enter Email' style={{ height: '50px' }} />
                    </div>
                    <div className='col-12 my-3 '>
                        <input type="password" name="globalSearch" id="globalSearch" className='border-dark px-3  text-secondary w-100' placeholder='Enter Password' style={{ height: '50px' }} />
                    </div>
                    <div className='col-12 my-3 '>
                        <input type="password" name="globalSearch" id="globalSearch" className='border-dark px-3  text-secondary w-100' placeholder='Enter Confirm Password' style={{ height: '50px' }} />
                    </div>
                </div>
                <button className='btn btn-dark  rounded-0  px-5 py-3 w-100 '>Sign Up</button>
            </div>
        </div>
    )
}

export default SignUpComponent