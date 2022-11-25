import { useContext } from 'react';
import { Navigate, Outlet, useLocation } from "react-router-dom";

import { AuthContext } from '../context/AuthContext';
/**
 * @name PrivateRoute
 * @description : checks if user is authenicated and redirtects to Login if not authenticated
 * @returns <Outlets/>
 */
function PrivateRoute() {
    const location = useLocation()
    //authcontext varia userAuthData to checkautheication 
    const { userAuthData } = useContext(AuthContext)
    return <>
        {userAuthData ? <Outlet /> : <Navigate to="/login" replace state={{ path: location.pathname }} />}
    </>
}

export default PrivateRoute