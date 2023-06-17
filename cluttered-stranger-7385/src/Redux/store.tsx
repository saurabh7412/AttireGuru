import { legacy_createStore, Store, applyMiddleware, Dispatch, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import ProductReducer, { initialState } from './ProductReducer/Reducer';
import { productAction, productState } from '../Constraints/Type';
import { AuthReducer } from './Login/reducer';
// Define the types for productState and productAction as shown in the previous examples
// import {}
// Define the ProductReducer as shown in the previous examples

// const initialState: productState = {
//   product: [],
//   totalPage: 0,
//   // Initialize other properties as needed
// };

// const middleware = [thunk]; // Add any additional middleware you want to use

// const store: Store<productState, productAction> & { dispatch: Dispatch<productAction> } = legacy_createStore(
//   ProductReducer,
//   initialState,
//   applyMiddleware(...middleware)
// );

const rootReducer = combineReducers({
  AuthReducer,
  ProductReducer
})

export const store = legacy_createStore(rootReducer,applyMiddleware(thunk))
// export default store;