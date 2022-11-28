import React, { Suspense } from 'react';
import { Route, Routes, useLocation } from "react-router-dom";
import PrivateRoute from './core/AuthGuard/PrivateRoute';
import PublicRoute from './core/AuthGuard/PublicRoute';
import Loader from './core/components/Loader';
import Profile from './pages/Profile';
import RedirectPage from './pages/RedirectPage';
import Wishlist from './pages/Wishlist';



//--------------------Lazy Loaded Pages------------------------------------------//
const Login = React.lazy(() => import('./pages/Login'))
const SignUp = React.lazy(() => import('./pages/SignUp'))
const Cart = React.lazy(() => import('./pages/Cart'))
const Home = React.lazy(() => import('./pages/Home'))



function RouterOutlet() {
  return <>
    <Suspense fallback={<Loader></Loader>} >
      <Routes >
        {/* <Route path="/"  element={<Navigate to="/home" />} /> */}

        <Route path="/" element={<Home />} />
        <Route path="redirect" element={<RedirectPage />} />
        <Route element={<PublicRoute />} >
          <Route path="/login" element={<Login />} />
          <Route path="/signUp" element={<SignUp />} />
        </Route>

        <Route element={<PrivateRoute />} >
          <Route path="cart" element={<Cart />} />
          <Route path="wishlist" element={<Wishlist />} />
          <Route path="profile" element={<Profile />} />
        </Route>
      </Routes>
    </Suspense>
  </>
}

export default RouterOutlet