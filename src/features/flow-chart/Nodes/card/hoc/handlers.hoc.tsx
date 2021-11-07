import { NodeModels } from "@/models/nodeModels"

export const withModelAvatar = (WrappedComponent: React.FunctionComponent<any>) => 
    (props: any) => {
        return(
            <WrappedComponent {...props} 
                image={ require("path").join(props.directory, props.model.getAvatarById(props.id))}
            />
        )
    }

// export const withAvatarFileHandler = (WrappedComponent: React.FunctionComponent<any>) => 
//     (props: any) => {
//         return(
//             <WrappedComponent {...props} 
//                 handleChange={props.model.setAvatarById(props.id, blah blahb blah)}
//             />
//         )
//     }

interface NewHTMLInputEvent extends Event {
    target: HTMLInputElement & EventTarget;
}

const handlePickedAvatar = (id: number, model: NodeModels) => {
    return (event: any /* NewHTMLInputEvent */) => {
        if(event && event.target && event.target.files){
            model.setAvatarById(id, event.target.files[0])            
        }

    }
}
    