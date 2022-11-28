import React from 'react'
import { useNavigate } from 'react-router'
import authService from '../core/services/Auth.service'

function Profile() {
  const navigate = useNavigate()

    const handleLogout = () => {
        authService.logOut().then(
            ()=>navigate('/')
          )
      }
    return (
        <div className='flex-grow-1'>
            <div className="bg-secondary d-flex justify-content-center align-items-center h-100">
                <div className="container text-center ">
                    <h3 className=''>
                        Profile
                    </h3>
                    <button className='btn btn-outline-danger' onClick={handleLogout}>Logout</button>
                </div>
            </div>
            
        </div>
    )
}

export default Profile