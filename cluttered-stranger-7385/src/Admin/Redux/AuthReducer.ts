

import React from 'react'
import { AuthAction } from '../Types'
import { LOGIN, LOGOUT } from './actionType'

const initialState = {
    isAuth : false
}


export const AuthReducer = (state=initialState, action: AuthAction) => {
    const {type} = action

    switch(type){
        case LOGIN : return {
            isAuth : true
        }
        case LOGOUT : return {
            isAuth : false
        }
        default : return state
    }
 
}


