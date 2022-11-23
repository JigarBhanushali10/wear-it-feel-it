import React, { Suspense } from 'react';
import { Route, Routes, Navigate } from "react-router-dom";
import PrivateRoute from './core/AuthGuard/PrivateRoute';
import PublicRoute from './core/AuthGuard/PublicRoute';
import LoginComponent from './core/components/LoginComponent';
import SignUpComponent from './core/components/SignUpComponent';
import Cart from './pages/Cart';
import Home from './pages/Home';



//--------------------Lazy Loaded Pages------------------------------------------//
const Login = React.lazy(() => import('./pages/Login'))



function RouterOutlet() {


  return <>
    <Suspense >
      <Routes>
        {/* <Route path="/"  element={<Navigate to="/home" />} /> */}

        <Route path="/" element={<Home />} />
        <Route element={<PublicRoute />} >
          <Route path="/login" element={<Login />} >
            <Route path="/login" element={<Navigate to="/login/signIn" />} />
            <Route path="/login/signIn" element={<LoginComponent />} />
            <Route path="/login/signUp" element={<SignUpComponent />} />
          </Route>
        </Route>

        <Route element={<PrivateRoute />} >
          <Route path="cart" element={<Cart />} />
        </Route>
      </Routes>
    </Suspense>
  </>
}

export default RouterOutlet