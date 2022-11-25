import { useContext } from 'react';
import { Navigate, Outlet } from "react-router-dom";

import { AuthContext } from '../context/AuthContext';

/**
 * @name PublicRoute
 * @description : checks if user is authenicated and redirtects to home if authenticated and tries to go to loginpage
 * @returns <Outlets/>
 */

function PublicRoute() {
    //authcontext varia userAuthData to checkautheication 

    const { userAuthData } = useContext(AuthContext)
    return <>
        {userAuthData ? <Navigate to="/" /> : <Outlet />}
    </>
}

export default PublicRoute