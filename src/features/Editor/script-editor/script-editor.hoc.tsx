import { withState } from "@/features/_Util/higherOrderComponents";
import { changedEditorArgumentName, changedEditorArgumentValue, changedEditorScriptName } from "@/redux-store/actions";
import { connect } from "react-redux";

export const withScriptState = (WrappedComponent: React.FunctionComponent<any>) => {
    return withState(
        WrappedComponent,
        (state: any) => {return{}},
        (dispatch: Function) => {
            return{       
                handleChange: (text: string) => {
                    dispatch(changedEditorScriptName(text));
                }                        
            }

        }
    )
}

const withArgumentState = (
    WrappedComponent: React.FunctionComponent<any>,
    argumentAction: Function
) => connect(
    (state: any) => {return{}}, 
    (dispatch: Function) => {
        return{
            handleChange: (text: string, index: number) => {
                dispatch(argumentAction(text, index));
            }                            
        }
    }
)(
    (props: any): JSX.Element => {
        return (
            <WrappedComponent {...props} />
        )
    }
)


export const withArgumentNameState = (WrappedComponent: React.FunctionComponent<any>) => {
    return withArgumentState(WrappedComponent, changedEditorArgumentName);
}

export const withArgumentValueState = (WrappedComponent: React.FunctionComponent<any>) => {
    return withArgumentState(WrappedComponent, changedEditorArgumentValue);
}




// export const withArgumentState = (
//     WrappedComponent: React.FunctionComponent<any>,
//     //argumentAction: Function
// ) => connect(
//     (state: any) => {return{}}, 
//     (dispatch: Function) => {
//         return{
//             updateName: (text: string, index: number) => {
//                 dispatch(changedEditorArgumentName(text, index));
//             },
//             updateValue: (text: string, index: number) => {
//                 dispatch(changedEditorArgumentValue(text, index));
//             }                             
//         }

//     }
// )(
//     (props: any): JSX.Element => {
//         return (
//             <WrappedComponent {...props} />
//         )
//     }
// )


