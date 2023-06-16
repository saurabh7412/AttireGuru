import { Store, applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { reducer } from "./reducer";
import { DispatchType, SearchAction, SearchType } from "../Types";
import { AuthReducer } from "./AuthReducer";


const rootReducer = combineReducers({reducer, AuthReducer})

export const store: Store<any, any> & {dispatch: DispatchType} = legacy_createStore(rootReducer, applyMiddleware(thunk))