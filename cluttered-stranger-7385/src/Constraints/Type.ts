import { type } from "os"


//   Use this to define Types of all variables and functions


import ProductReducer from "../Redux/ProductReducer/Reducer";

export type initialType={
  isAuth:boolean;
  name:string;
}


 export interface  Iproduct {
   id: string;
  title: string;
  description: string;
  price: number;
  color: string;
  gender: string;
  category: string;
  image: string;
  rating?: number;
  sizes?: string[];
  brand?: string;
  fabric?: string;
  sleeve?: string;
  pattern?: string;
  offer?:string;
  quantity?: number;
 };
 export interface productState {
  isLoading: boolean,
   isError: boolean,
  product:Iproduct[],
  totalPage:number
 }
 export type productAction ={
  type:string,
  payload:productState 
 }

 export type DispatchType=(args:productAction)=>productAction
 export type RootState = ReturnType<typeof ProductReducer>;
 
 export interface MyObject {
  params: {
    category?: string[];
    gender?: string[];
    color?:string[];
    _limit?: number;
    _page?: number;
    _sort?: null | string;
    _order?: any ;
    q?:string;
    id?: string;
  };
}