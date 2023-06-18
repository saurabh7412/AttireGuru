import { LOGIN_FAILURE, LOGIN_SUCCESS } from "./actionType"

type initialType={
  isAuth:boolean;
  name:string;
}

export const LoginSuccess=()=>{
 
  return {type:LOGIN_SUCCESS}
}
export const LoginFailure=(payload:initialType)=>{
  return {type:LOGIN_FAILURE,payload}
}
// export const AdminSuccess=(payload)=>{
//   return {type:ADMIN_LOGIN_SUCCESS,payload}
// }
// export const AdminFailure=(payload)=>{
//   return {type:ADMIN_LOGIN_FAILURE,payload}
// }