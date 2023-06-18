

import React from 'react'
import { AuthAction } from '../Types'
import { LOGIN, LOGOUT } from './actionType'

const initialState = {
    isAuth : false,
    username : ''
}


export const AuthReducer = (state=initialState, action: AuthAction) => {
    const {type, payload} = action

    switch(type){
        case LOGIN : return {
            isAuth : true,
            username : payload
        }
        case LOGOUT : return {
            isAuth : false
        }
        default : return state
    }
 
}


