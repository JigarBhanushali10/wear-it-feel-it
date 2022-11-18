import React, { Suspense } from 'react';
import { Route, Routes,Navigate } from "react-router-dom";
import LoginComponent from './core/components/LoginComponent';
import SignUpComponent from './core/components/SignUpComponent';



//--------------------Lazy Loaded Pages------------------------------------------//
const Login = React.lazy(() => import('./pages/Login'))



function RouterOutlet() {
  return <>
    <Suspense >
      <Routes>
        <Route path="/"  element={<Navigate to="/login" />} >

        </Route>
        <Route path="login" element={<Login />} >
          <Route path="/login"  element={<Navigate to="/login/signIn" />} />
          <Route path="/login/signIn"  element={<LoginComponent />} />
          <Route path="/login/signUp"  element={<SignUpComponent />} />

        </Route>
      </Routes>
    </Suspense>
  </>
}

export default RouterOutlet