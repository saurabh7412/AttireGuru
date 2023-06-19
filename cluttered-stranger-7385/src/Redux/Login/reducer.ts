import {  LOGIN_FAILURE, LOGIN_SUCCESS } from "./actionType";

type initialType={
    isAuth:boolean;
  
}
const intitalState: initialType={
    isAuth:false,
  
}

export const AuthReducer=(state=intitalState,{type,payload}:{type:string; payload: string})=>{
    
    switch(type){
        case LOGIN_SUCCESS:{
            return {
               
                isAuth:true,
            }
        }
        case LOGIN_FAILURE:{
            return {
                isAuth:false,
                
            }
        }
                
        default:{
            return state;
        }
    }
}