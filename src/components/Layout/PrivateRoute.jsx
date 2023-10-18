
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import { selectIsLoggedIn, selectRefresh } from 'redux/auth/auth-Selectors';

export const PrivateRoute=({ component:Component, redirectTo='/' }) =>{

    const isLoggedIn = useSelector(selectIsLoggedIn)
    const isRefresh = useSelector(selectRefresh);
    const shouldRedirect=!isLoggedIn&&!isRefresh
    console.log('logged'+isLoggedIn)
 return shouldRedirect? <Navigate to={redirectTo}/>:<Component/>
}