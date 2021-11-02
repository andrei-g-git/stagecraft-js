import { AVATAR_DIRECTORY_CHANGED } from "./actionTypes"

const initialState: {
    avatars: string
} = {
    avatars: "C:/work/misc/test_assets/avatars"
}

export const workspaceReducer = (state = initialState, action: any) => {
    switch(action.type){
        case AVATAR_DIRECTORY_CHANGED:
            return{
                ...state,
                avatars: action.payload
            }
        
        default: return state;
    }
}