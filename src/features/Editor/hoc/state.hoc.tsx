import { removedArgument } from "@/redux-store/actions";
import { connect } from "react-redux";

export const withEditorState = (WrappedComponent: React.FunctionComponent<any>) => 
    connect(
        (state: any) => {
            return{
                visible: state.ui.editorVisible
            }
        },
        null
    )(
        (props: any) => {
            return(
                <WrappedComponent {...props} />
            )
        }
    )

export const withDeleteArgumentState = (WrappedComponent: React.FunctionComponent<any>) => 
    connect(
        (state: any) => {},
        (dispatch: Function) => {
            return {
                deleteArgument: (index: number) => {
                    console.log("delete at index: ", index)
                    dispatch(removedArgument(index));
                }
            }
        }
    )(
        (props: any) => {
            return(
                <WrappedComponent {...props} />
            )
        }
    )