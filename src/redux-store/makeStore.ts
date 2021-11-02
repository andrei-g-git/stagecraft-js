import {createStore, combineReducers} from "redux";
import { modelReducer } from "./modelReducer";
import { editorReducer } from "./editorReducer";
import { uiReducer } from "./uiReducer";

import {composeWithDevTools} from "redux-devtools-extension";
import { workspaceReducer } from "./workspaceReducer";

export const makeStore = () =>{
    const reducers = combineReducers({
        model: modelReducer,
        editor: editorReducer,
        ui: uiReducer,
        workspace: workspaceReducer
    })

    return (createStore(reducers, composeWithDevTools()))
}