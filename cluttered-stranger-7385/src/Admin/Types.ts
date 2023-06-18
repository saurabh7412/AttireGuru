


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


export interface SearchAction {
    type: string;
    payload: string;
}

export interface AuthAction {
    type: string;
    payload: string
}




export type DispatchType = (arg: SearchAction) => SearchAction

export interface SearchType{
    search: string
}
