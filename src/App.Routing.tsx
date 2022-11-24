import React, { Suspense } from 'react';
import { Route, Routes } from "react-router-dom";
import PrivateRoute from './core/AuthGuard/PrivateRoute';
import PublicRoute from './core/AuthGuard/PublicRoute';



//--------------------Lazy Loaded Pages------------------------------------------//
const Login = React.lazy(() => import('./pages/Login'))
const SignUp = React.lazy(() => import('./pages/SignUp'))
const Cart = React.lazy(() => import('./pages/Cart'))
const Home = React.lazy(() => import('./pages/Home'))



function RouterOutlet() {


  return <>
    <Suspense >
      <Routes>
        {/* <Route path="/"  element={<Navigate to="/home" />} /> */}

        <Route path="/" element={<Home />} />
        <Route element={<PublicRoute />} >
          <Route path="/login" element={<Login />} />
          <Route path="/signUp" element={<SignUp />} />
        </Route>

        <Route element={<PrivateRoute />} >
          <Route path="cart" element={<Cart />} />
        </Route>
      </Routes>
    </Suspense>
  </>
}

export default RouterOutlet