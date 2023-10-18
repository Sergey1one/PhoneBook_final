
import { Routes,Route } from "react-router-dom";
import { Layout } from "./Layout/Layout";
import { useDispatch, useSelector } from "react-redux";
import { lazy, useEffect } from "react";
import { authRefreshUser } from "redux/auth/auth-operations";
import { PrivateRoute } from "./Layout/PrivateRoute";
import { RestrictedRoute } from "./Layout/RestrictedRoute";
import { selectRefresh } from "redux/auth/auth-Selectors";






export function App(){
 
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(authRefreshUser())
  }, [dispatch])
  const isRefresh = useSelector(selectRefresh)
  console.log(isRefresh)
  
  const HomePage= lazy(() => import('../pages/HomePage'));
  const ContactPage = lazy(() => import('../pages/ContactsPage'));
  const RegisterPage = lazy(() => import('../pages/RegisterPage'));
  const LoginPage = lazy(() => import('../pages/LoginPage'));

  return (
   
   !isRefresh&&   
    ( <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<HomePage/> } />
           <Route path="/contacts" element={<PrivateRoute component={ContactPage} redirectTo='/login'/>} />
          <Route path="/register" element={<RestrictedRoute component={RegisterPage}
            redirectTo='/contacts'/>} />
          <Route path="/login"
            element={<RestrictedRoute component={LoginPage}
            redirectTo='/contacts'/>} />
   
          
          </Route>
       </Routes>)

       
  
         
  )
}





