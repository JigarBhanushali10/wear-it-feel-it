import { useContext } from 'react';
import { Navigate, Outlet ,useLocation} from "react-router-dom";

import { AuthContext } from '../context/AuthContext';

function PrivateRoute() {
const location = useLocation()
    const { userAuthData } = useContext(AuthContext)
    return <>
        {userAuthData ? <Outlet/> : <Navigate to="/login" replace  state={{path:location.pathname}}/>}
    </>
}

export default PrivateRoute