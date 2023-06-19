

import axios from "axios";
import { PRODUCTS_FAILURE, PRODUCTS_REQUEST, GET_PRODUCTS_SUCCESS,POST_PRODUCTS_SUCCESS,   } from "../actiontype";
import { MyObject, productAction } from "../../Constraints/Type";

import { Dispatch } from 'redux';

// Define action interfaces
interface ProductsRequestAction {
   type: typeof PRODUCTS_REQUEST;
 }
 
 interface GetProductsSuccessAction {
   type: typeof GET_PRODUCTS_SUCCESS;
   payload: any; // Replace 'any' with the appropriate type for response data
 }
 
 interface ProductsFailureAction {
   type: typeof PRODUCTS_FAILURE;
   payload: string; // Replace 'string' with the type of the error message
 }
 
 type productActions =
   | ProductsRequestAction
   | GetProductsSuccessAction
   | ProductsFailureAction;
 


   export const getProducts = (obj: MyObject) =>{

    
      return async (dispatch: Dispatch<productActions>): Promise<void> => {
        dispatch<ProductsRequestAction>({ type: PRODUCTS_REQUEST });
    
        try {
          const response = await axios.get('https://cluttered-stranger-backend.onrender.com/products',obj);
          const totalPages = Math.ceil(response.headers['x-total-count'] / 16);
    console.log(response.data,totalPages,obj)
          dispatch<GetProductsSuccessAction>({
            type: GET_PRODUCTS_SUCCESS,
            payload: {
              isLoading: false,
              isError: false,
              product: response.data,
              totalPage: totalPages
            },
          });
        } catch (error: any) {
          dispatch<ProductsFailureAction>({
            type: PRODUCTS_FAILURE,
            payload: error.message,
          });
        }
      };
    };

// export const Editproduct=(id)=>{
//   return (dispatch)=>{ 
//     console.log("post")
//   dispatch({type:PRODUCTS_REQUEST})
  
//   axios.get(`http://localhost:8080/products?id=${id}`).then((res)=>{
//     console.log(res.data[0])
//     dispatch({type:EDIT_PRODUCT_SUCCESS,payload:res.data[0]})
//   }).catch((err)=>{
//     dispatch({type:PRODUCTS_FAILURE})
//   })}
// }

// 



// export const deleteProduct = (id) => {
//   return (dispatch)=>{ 
//     console.log("post")
//   dispatch({type:PRODUCTS_REQUEST})
  
//   axios.delete(`http://localhost:8080/products/${id}`).then((res)=>{
//     console.log(res)
//     dispatch({type:DELETE_PRODUCT_SUCCESS})
//   }).catch((err)=>{
//     console.log(err)
//     dispatch({type:PRODUCTS_FAILURE})
//   })}
// };

// export const getProducts = (obj)=>(dispatch) => {
//   dispatch({type:PRODUCTS_REQUEST})
//   // Write logic here
//   axios.get(`http://localhost:8080/products`,obj).then((res)=>{
//     console.log(res.data)
//      const totalPages = Math.ceil(res.headers['x-total-count']/16)

//     console.log(totalPages)
//     dispatch({type:GET_PRODUCTS_SUCCESS,payload:{data:res.data,total:totalPages}})
//   }).catch((err)=>{
//     dispatch({type:PRODUCTS_FAILURE})
//   })
// };
// export const allProducts = (page)=>(dispatch) => {
//   dispatch({type:PRODUCTS_REQUEST})
//   // Write logic here
//   axios.get(`http://localhost:8080/products`).then((res)=>{
//     console.log(res.data)
//      const totalPages = Math.ceil(res.headers['x-total-count']/16)

//     console.log(totalPages)
//     dispatch({type:GET_PRODUCTS_SUCCESS,payload:{data:res.data,total:totalPages}})
//   }).catch((err)=>{
//     dispatch({type:PRODUCTS_FAILURE})
//   })
// };