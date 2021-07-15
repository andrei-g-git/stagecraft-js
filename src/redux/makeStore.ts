import {createStore, combineReducers} from "redux";
import { modelReducer } from "./modelReducer";
import { editorReducer } from "./editorReducer";
import { uiReducer } from "./uiReducer";

export const makeStore = () =>{
    const reducers = combineReducers({
        model: modelReducer,
        editor: editorReducer,
        ui: uiReducer
    })

    return (createStore(reducers))
}