import axios, {AxiosResponse} from "axios"
import { GET_PRODUCT } from "./actionType"
import { DispatchType } from "../Types";
import { Product } from "../Types";


const url = `https://cluttered-stranger-backend.onrender.com/products`;




export const getProduct = async(queryObj : any) => {
    return await axios.get(`${url}`,queryObj);

};

export const getParticularProduct = async(endpoint: string,queryObj : any)=>{
    return await axios.get(`${url}?category=${endpoint}`,queryObj)
}

export const getSingleProduct = async(id: any)=>{
    return await axios.get(`${url}/${id}`)
    
}

export const editProduct = async(id: any,newobj:any)=>{
    return await axios.patch(`${url}/${id}`,newobj)
}


export const deleteProduct = async(id: any)=>{
    return await axios.delete(`${url}/${id}`)
}


export const addNewProduct = async(newData: any)=>{
    return await axios.post(`${url}`,newData)
}

export const querySearch = async(query: string)=>{
    return await axios.get(`${url}?q=${query}`)
}


export const reqLogin = async()=>{
    return await axios.get(`https://cluttered-stranger-backend.onrender.com/admins`)
}

export const reqUsers = async()=>{
    return await axios.get(`https://cluttered-stranger-backend.onrender.com/users`)
}

export const reqOrders = async()=>{
    return await axios.get(`https://cluttered-stranger-backend.onrender.com/orders`)
}