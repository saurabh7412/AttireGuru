// import { Navigate, useLocation } from "react-router-dom"
// import { useSelector } from "react-redux";
// // {children}:any
// export const PriveteRout = () =>{
//     const isAuth = useSelector((state:any) => state.loginReducer.isAuth)
//     const location = useLocation()
//     console.log(isAuth);

// // return isAuth ? children : <Navigate replace={true} state={location.pathname} to ={"/login"} />
// return "xyz"
// }

import { Navigate, useLocation } from "react-router-dom"
import { useSelector } from "react-redux";
// {children}:any
import { RootState } from "../Constraints/Type";
export const PriveteRoute = ({children}:any) =>{
    const isAuth = useSelector((state:RootState) => state.AuthReducer.isAuth)
    const location = useLocation()
    console.log(isAuth);

return isAuth ? children : <Navigate replace={true} state={location.pathname} to ={"/login"} />
// return <h1>helo</h1>
}