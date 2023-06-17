


export interface Product {
    "title": string;
    "description": string;
    "price": number;
    "color": string;
    "gender": string;
    "category": string;
    "image": string;
    "rating": number,
    "sizes": string[],
    "brand": string;
    "fabric": string;
    "fit": string;
    "pattern": string;
}


export interface AllProduct {
    allproducts: Product[]
}


export interface ProductAction {
    type: string;
    payload: Product[];
}


export type DispatchType = (arg: ProductAction) => ProductAction
