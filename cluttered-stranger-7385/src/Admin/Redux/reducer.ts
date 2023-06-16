

import React from 'react'
import { AllProduct, Product, ProductAction } from '../Types'
import { GET_PRODUCT } from './actionType';



const initialState: AllProduct = {
    allproducts: [
        {
            "title": "",
            "description": "",
            "price": 0,
            "color": "",
            "gender": "",
            "category": "",
            "image": "",
            "rating": 0, 
            "sizes": ["S","M", "L", "XL"],
            "brand": "",
            "fabric": "",
            "fit": "",
            "pattern": ""
          },   
    ]
}

export const reducer =(state: Product[], action : ProductAction)=>{
const { type, payload } = action;

switch(type){

    case GET_PRODUCT: return {...state,allproducts: payload}

    default: return state
}
}

