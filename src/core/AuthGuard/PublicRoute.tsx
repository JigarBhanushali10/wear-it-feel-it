import { useContext } from 'react';
import { Navigate, Outlet } from "react-router-dom";

import { AuthContext } from '../context/AuthContext';



function PublicRoute() {

    const { userAuthData } = useContext(AuthContext)
    return <>
        {userAuthData ? <Navigate to="/" /> : <Outlet/>}
    </>
}

export default PublicRoute