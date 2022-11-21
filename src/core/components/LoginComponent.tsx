import { useNavigate } from 'react-router-dom'

function LoginComponent() {
    const navigate = useNavigate()
    return (
        <div className='loginComponent '>
            <div className=''>
                <h1>
                    Welcome
                </h1>
                <p>
                    Don't have an account? <button className='btn btn-outline-dark ' onClick={()=>{navigate('/login/signUp')}}>Sign Up</button>
                </p>
                  <div className='row mb-3'>
                    <div className='col-12 my-2 '>
                        <input type="text" name="globalSearch" id="globalSearch" className=' border border-dark px-3  text-secondary w-100' placeholder='Enter Email or Phone no.' style={{ height: '50px' }} />
                    </div>
                </div>
                <button className='btn btn-dark  rounded-0  px-5 py-3 w-100 '>Sign Up</button>
            </div>
        </div>
    )
}

export default LoginComponent