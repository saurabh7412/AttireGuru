import axios, {AxiosResponse} from "axios"
import { GET_PRODUCT } from "./actionType"
import { DispatchType } from "../Types";
import { Product } from "../Types";


const url = `https://cluttered-stranger-backend.onrender.com/products`;




export const getProduct = async() => {
    return await axios.get(`${url}/?_limit=12`);

};


