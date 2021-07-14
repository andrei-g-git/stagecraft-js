import {createStore, combineReducers} from "redux";
import { modelReducer } from "./modelReducer";
import { editorReducer } from "./editorReducer";

export const makeStore = () =>{
    const reducers = combineReducers({
        model: modelReducer,
        editor: editorReducer
    })

    return (createStore(reducers))
}