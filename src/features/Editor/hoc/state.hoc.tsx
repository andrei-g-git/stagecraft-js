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