import {createStore, combineReducers} from "redux";
import { modelReducer } from "./modelReducer";

export const makeStore = () =>{
    const reducers = combineReducers({model: modelReducer})

    return (createStore(reducers))
}