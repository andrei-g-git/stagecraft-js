import {createStore, combineReducers} from "redux";
import { modelReducer } from "./modelReducer";
import { editorReducer } from "./editorReducer";
import { uiReducer } from "./uiReducer";

import {composeWithDevTools} from "redux-devtools-extension";

export const makeStore = () =>{
    const reducers = combineReducers({
        model: modelReducer,
        editor: editorReducer,
        ui: uiReducer
    })

    return (createStore(reducers, composeWithDevTools()))
}