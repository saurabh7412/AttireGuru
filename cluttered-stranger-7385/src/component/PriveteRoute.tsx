import { Navigate, useLocation } from "react-router-dom"
import { useSelector } from "react-redux";

export const PriveteRoute = ({children}:any) =>{
    const isAuth = useSelector((state:any) => state.loginReducer.isAuth)
    const location = useLocation()

return isAuth ? children : <Navigate replace={true} state={location.pathname} to ={"/login"} />
}