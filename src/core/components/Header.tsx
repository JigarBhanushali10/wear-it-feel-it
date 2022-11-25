import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'
import authService from '../services/Auth.service'

/**
 * @name Header
 * @returns FooterJSX
 * 
 */
function Header() {
  //  useNavigate hook to  Navigate to pages
  const navigate = useNavigate()
  //   useContext(AuthContext) hook to conditional render on authentication 
  const { userAuthData } = useContext(AuthContext)
  return (
    <div className='d-flex justify-content-between align-items-center mt-3 px-2 mx-2 px-xl-5 mx-xl-5 flex-wrap '>
      <h2 className='text-uppercase flex-grow-1 flex-item' onClick={() => { navigate('/') }}>
        wear it feel it
      </h2>
      <div className='globalSearchContainer d-flex me-2 border border-primary  align-items-center flex-item bg-white'>
        <label htmlFor="globalSearch" className='d-flex align-items-center'> <span className=" mx-3 icon-search fs-4 text-muted"></span></label>
        <input type="text" name="globalSearch" id="globalSearch" className=' border-0  text-muted' placeholder='search for club or national jersey' />
      </div>
      <span className="mx-2 justify-content-center align-items-center d-none d-md-flex flex-item">
      <span className="icon-heart fs-4"></span>
      </span>
      <span className='mx-2 d-flex justify-content-center align-items-center flex-item' onClick={() => { navigate('cart') }}>
      <span className="icon-cart fs-4 "></span>
      </span>
      {!userAuthData &&
        <button className='btn btn-dark rounded-0 mx-2 px-md-4 py-md-2 flex-item' onClick={() => { navigate('/login') }}>LOGIN</button>
      }
      {userAuthData &&
      <span className="icon-user fs-4 mx-2 flex-item" onClick={authService.logOut}></span>
        // <button className='btn btn-dark rounded-0 mx-2 px-md-4 py-md-2 flex-item' onClick={authService.logOut}>LOGOUT</button>
      }
    </div>
  )
}

export default Header