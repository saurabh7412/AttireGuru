

import React from 'react'
import { AllProduct, Product, SearchAction, SearchType } from '../Types'
import { GET_PRODUCT, SEARCH_PRODUCT } from './actionType';



const initialState: SearchType= {
  search : ''
}

export const reducer =(state: SearchType=initialState , action : SearchAction)=>{
const { type, payload } = action;

switch(type){

    case SEARCH_PRODUCT:{
      return {search: payload}
    }

    default: return state
}
}

