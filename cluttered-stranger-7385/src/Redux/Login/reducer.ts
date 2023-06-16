import {  LOGIN_FAILURE, LOGIN_SUCCESS } from "./actionType";

type initialType={
    isAuth:boolean;
    name:string;
}
const intitalState: initialType={
    isAuth:false,
    name:""
}

export const AuthReducer=(state=intitalState,{type,payload}:{type:string; payload: string})=>{
    
    switch(type){
        case LOGIN_SUCCESS:{
            return {
               name:payload,
                isAuth:true,
            }
        }
        case LOGIN_FAILURE:{
            return {
                isAuth:false,
                name:""
            }
        }
        

        // case ADMIN_LOGIN_SUCCESS:{
        //     return {
                
        //         adminAuth:payload,
        //     }
        // }
        // case ADMIN_LOGIN_FAILURE:{
        //     return {
                
        //         adminAuth:payload,
        //     }
        // }
        default:{
            return intitalState;
        }
    }
}