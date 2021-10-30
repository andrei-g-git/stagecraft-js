import { ContentVersions, NamedValue } from "@/models/nodeModels";
import { 
    EDITOR_ARGUMENT_ADDED,
    EDITOR_ARGUMENT_NAME_CHANGED,
    EDITOR_ARGUMENT_VALUE_CHANGED,
    EDITOR_CONTENT_CHANGED,
    EDITOR_DIALOG_CHANGED,
    EDITOR_FULL_TEXT_CHANGED,
    EDITOR_HTML_CHANGED, 
    EDITOR_PREVIEW_CHANGED, 
    EDITOR_SCRIPT_ARGUMENT_CHANGED, 
    EDITOR_SCRIPT_CHANGED,
    EDITOR_SCRIPT_NAME_CHANGED,
    FULL_TEXT_JSON_CHANGED,
    PREVIEW_JSON_CHANGED,
    TITLE_CHANGED,
    NAME_CHANGED
    //TITLE_JSON_CHANGED
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
    arguments: number,
    dialog: {
        preview: {
            html: string, //"", what the fuck...
            json: Delta
        },
        full: {
            html: string, //"",
            json: Delta
        }
    },
    title: string,
    name: string
} = {
    content: {
        ops: []
    },
    html: "",
    script: {
        script: "",
        arguments: []
    },
    arguments: 0, //length value
    dialog: { //these should all be separate values, too much headache keeping them tied
        preview: {
            html: "",
            json: {ops: []}
        },
        full: {
            html: "",
            json: {ops: []}
        }
    },
    title: "",
    name: ""
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

        case EDITOR_PREVIEW_CHANGED:
            //console.log(`FROM REDUCER, VLAUE   ${(<StringPayload><unknown>action).payload}`)
            return{
                ...state,
                dialog: { 
                    preview: {
                        html: (<StringPayload><unknown>action).payload,
                        json: state.dialog.preview.json
                    },
                    full: {
                        html: state.dialog.full.html,
                        json: state.dialog.full.json
                    }
                }
            }

        case EDITOR_FULL_TEXT_CHANGED:
            return{
                ...state,
                dialog: { 
                    preview: {
                        html: state.dialog.full.html,
                        json: state.dialog.preview.json
                    },
                    full: {
                        html: (<StringPayload><unknown>action).payload,
                        json: state.dialog.full.json
                    }
                }
            }

        case PREVIEW_JSON_CHANGED:
            return{
                ...state,
                dialog: {
                    preview:{
                        html: state.dialog.preview.html,
                        json: (<DeltaPayload><unknown>action).payload                            
                    },
                    full: {
                        html: state.dialog.full.html,
                        json: state.dialog.full.json
                    }
                }
            }
            case FULL_TEXT_JSON_CHANGED:
                return{
                    ...state,
                    dialog: {
                        preview:{
                            html: state.dialog.preview.html,
                            json: state.dialog.preview.json                            
                        },
                        full: {
                            html: state.dialog.full.html,
                            json: (<DeltaPayload><unknown>action).payload
                        }
                    }
                }


        case EDITOR_SCRIPT_NAME_CHANGED:
            return{
                ...state,
                script: {
                    script: (<StringPayload><unknown>action).payload,
                    arguments: state.script.arguments
                }
            }     
   
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
            const nameIndex = (<IndexedStringPayload><unknown>action).payload.index;
            const name = (<IndexedStringPayload><unknown>action).payload.string;  
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
                        return newArgument;
                    })
                }
            }      

        case EDITOR_ARGUMENT_VALUE_CHANGED:    
            const valueIndex = (<IndexedStringPayload><unknown>action).payload.index;
            const value = (<IndexedStringPayload><unknown>action).payload.string;  
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
                        return newArgument;
                    })
                }
            } 
        
        case EDITOR_ARGUMENT_ADDED:
            const args = state.script.arguments;
            args.push({
                name: "",
                value: null
            });

            return{
                ...state,
                script: {
                    script: state.script.script,
                    arguments: args
                },
                arguments: state.arguments + 1
            }
            case TITLE_CHANGED:
                return{
                    ...state,
                    title: (<StringPayload><unknown>action).payload
                } 

            case NAME_CHANGED:
                return{
                    ...state,
                    name: (<StringPayload><unknown>action).payload
                }

        default:
            return {...state};          
    }
}