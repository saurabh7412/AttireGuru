import { productState ,productAction,Iproduct} from "../../Constraints/Type";
import { PRODUCTS_FAILURE, PRODUCTS_REQUEST, GET_PRODUCTS_SUCCESS ,POST_PRODUCTS_SUCCESS, DELETE_PRODUCT_SUCCESS, EDIT_PRODUCT_SUCCESS} from "../actiontype";
export const initialState:productState={
  isLoading: false,
   isError: false,
  product:[],
  totalPage:0
 };

const ProductReducer: any = (
  state = initialState,
  { type, payload }:productAction
) => {
  switch (type) {
    case PRODUCTS_REQUEST : {
      return {
         ...state,isLoading:true ,isError:false
      }
   }
   case GET_PRODUCTS_SUCCESS : {
      return {
         ...state,...payload
      }
   }
   case POST_PRODUCTS_SUCCESS : {
      return {
         ...state,isLoading:false ,
      }
   }
   case PRODUCTS_FAILURE : {
      return {
         ...state,isLoading:false,isError:true
      }
   }
   
   default:{
      return state;
   }
};
}
export default ProductReducer;