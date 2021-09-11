import { ContentVersions, NamedValue } from "@/models/nodeModels";
import { 
    EDITOR_ARGUMENT_NAME_CHANGED,
    EDITOR_ARGUMENT_VALUE_CHANGED,
    EDITOR_CONTENT_CHANGED,
    EDITOR_DIALOG_CHANGED,
    EDITOR_HTML_CHANGED, 
    EDITOR_SCRIPT_ARGUMENT_CHANGED, 
    EDITOR_SCRIPT_CHANGED,
    EDITOR_SCRIPT_NAME_CHANGED
} from "./actionTypes";
import { ActionType, DeltaPayload, DialogPayload, IndexedNamedValuePayload, IndexedStringPayload, ScriptPayload, StringPayload } from "./types";
import { Delta } from "@/features/Editor/types";

const initialState: {
    content: Delta,
    html: string,
    script: {
        script: string,
        arguments: NamedValue[]
    },
    dialog: {
        preview: /* ContentVersions */{
            html: "",
            json: Delta
        },
        full: {
            html: "",
            json: Delta
        }
    }
} = {
    content: {
        ops: []
    },
    html: "",
    script: {
        script: "",
        arguments: []
    },
    dialog: {
        preview: {
            html: "",
            json: {ops: []}
        },
        full: {
            html: "",
            json: {ops: []}
        }
    }
}

export const editorReducer = (state = initialState, action: ActionType) => {
    switch(action.type){
        case EDITOR_CONTENT_CHANGED:
            return{
                ...state,
                content: (<DeltaPayload><unknown>action).payload
            }
        case EDITOR_HTML_CHANGED:
            return{
                ...state,
                html: (<StringPayload><unknown>action).payload
            }  
        case EDITOR_SCRIPT_CHANGED:
            return{
                ...state,
                script: (<ScriptPayload><unknown>action).payload
            }
        case EDITOR_DIALOG_CHANGED:
            return{
                ...state,
                dialog: (<DialogPayload><unknown>action).payload
            }   
        case EDITOR_SCRIPT_NAME_CHANGED:
            return{
                ...state,
                script: {
                    script: (<StringPayload><unknown>action).payload,
                    arguments: state.script.arguments
                }
            }     
        // case EDITOR_SCRIPT_ARGUMENT_CHANGED:
        //     const index = (<IndexedStringPayload><unknown>action).payload.index;
        //     const newArgument = (<IndexedStringPayload><unknown>action).payload.argument;
        //     return{
        //         ...state,
        //         script: {
        //             script: state.script.script,
        //             arguments: state.script.arguments.map((arg: string, idx: number) => index === idx ? newArgument : arg)
        //         }
        //     }    
        case EDITOR_SCRIPT_ARGUMENT_CHANGED:
            const index = (<IndexedNamedValuePayload><unknown>action).payload.index;
            const newArgument = (<IndexedNamedValuePayload><unknown>action).payload.pair;
            return{
                ...state,
                script: {
                    script: state.script.script,
                    arguments: state.script.arguments.map((arg: NamedValue, idx: number) => index === idx ? newArgument : arg)
                }
            }     
        case EDITOR_ARGUMENT_NAME_CHANGED:    
            const nameIndex = (<IndexedNamedValuePayload><unknown>action).payload.index;
            const newNameArgument = (<IndexedNamedValuePayload><unknown>action).payload.pair;  
            const name = newNameArgument.name;
            return{
                ...state,
                script: {
                    script: state.script.script,
                    arguments: state.script.arguments.map((arg: NamedValue, idx: number) => {
                        let newArgument: NamedValue = arg;
                        if(nameIndex === idx){
                            newArgument = {
                                name: name,
                                value: arg.value
                            }
                        }
                    })
                }
            }      

        case EDITOR_ARGUMENT_VALUE_CHANGED:    
            const valueIndex = (<IndexedNamedValuePayload><unknown>action).payload.index;
            const newArgument2 = (<IndexedNamedValuePayload><unknown>action).payload.pair;  
            const value = newArgument2.value;
            return{
                ...state,
                script: {
                    script: state.script.script,
                    arguments: state.script.arguments.map((arg: NamedValue, idx: number) => {
                        let newArgument: NamedValue = arg;
                        if(valueIndex === idx){
                            newArgument = {
                                name: arg.name,
                                value: value
                            }
                        }
                    })
                }
            } 

        default:
            return {...state};          
    }
}