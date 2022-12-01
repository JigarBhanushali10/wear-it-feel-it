import { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { CartContext } from '../../shared/contexts/CartContext'
import { AuthContext } from '../context/AuthContext'

/**
 * @name Header
 * @returns FooterJSX
 * 
 */
function Header() {
  const { items } = useContext(CartContext)
  console.log(items);


  // const [cartCount, setCartCount] = useState(items.length)


  // const loginWithPopUp = () => {
  //   authService.signInWithGoogleAccount().then()
  // }

  //  useNavigate hook to  Navigate to pages
  const navigate = useNavigate()
  //   useContext(AuthContext) hook to conditional render on authentication 
  const { userAuthData } = useContext(AuthContext)
  return (
    <div className='d-flex justify-content-between align-items-center px-2 mx-2 px-xl-5 mx-xl-5 flex-wrap '>
      <h2 className='text-uppercase flex-grow-1 flex-item' onClick={() => { navigate('/') }}>
        wear it feel it
      </h2>
      <div className='globalSearchContainer d-flex me-3 border border-primary  align-items-center flex-item bg-white'>
        <label htmlFor="globalSearch" className='d-flex align-items-center'> <span className=" mx-3 icon-search fs-4 text-muted"></span></label>
        <input type="text" name="globalSearch" id="globalSearch" className=' border-0  text-muted' placeholder='search for club or national jersey' />
      </div>
      <span className="mx-3 justify-content-center align-items-center d-none d-md-flex flex-item" onClick={() => { navigate('wishlist') }}>
        <span className="icon-heart fs-3"></span>
      </span>
      <span className='mx-3 d-flex justify-content-center align-items-center flex-item position-relative' onClick={() => { navigate('cart') }}>
        <small className='header-cart position-absolute bg-primary text-white  px-2 rounded-circle '>{items.length}</small>
        <span className=" icon-cart  fs-3 "></span>
      </span>
      {!userAuthData &&
        <button className='btn btn-dark rounded-0 mx-3 px-md-4 py-md-2 flex-item' onClick={() => { navigate('/redirect') }}>LOGIN</button>
        // manual login email password 
        // <button className='btn btn-dark rounded-0 mx-3 px-md-4 py-md-2 flex-item' onClick={() => { navigate('/login') }}>LOGIN</button>
        // google login cons redirect page  
        // <button className='btn btn-dark rounded-0 mx-3 px-md-4 py-md-2 flex-item' onClick={loginWithPopUp}>LOGIN</button>
      }
      {userAuthData &&
        <span className="icon-user fs-3 mx-3 flex-item " onClick={() => { navigate('/profile') }}></span>
        // <button className='btn btn-dark rounded-0 mx-2 px-md-4 py-md-2 flex-item' onClick={authService.logOut}>LOGOUT</button>
      }
    </div>
  )
}

export default Header