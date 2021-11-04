import { connect } from "react-redux"

// export const withAvatarState = (WrappedComponent: React.FunctionComponent<any>) => 
//     connect(
//         (state: any) => {
//             return{
//                 image: state.model.nodeModel.getAvatarById(fuckthis)
//             } 
//         },
//         null
//     )(
//         (props: any) => {
//             return(
//                 <WrappedComponent {...props} />
//             )
//         }
//     )

export const withAssetsWorkingDirectoryState = (WrappedComponent: React.FunctionComponent<any>) => 
    connect(
        (state: any) => {
            return{
                directory: state.workspace.avatars
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