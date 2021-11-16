import { NodeModels } from "@/models/nodeModels"

export const withModelAvatar = (WrappedComponent: React.FunctionComponent<any>) => 
    (props: any) => {
        return(
            <WrappedComponent {...props} 
                image={ require("path").join(props.directory, props.model.getAvatarById(props.id))}
            />
        )
    }


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

export const withDeleteNode = (WrappedComponent: React.FunctionComponent<any>) => 
    (props: any) => {
        return(
            <WrappedComponent {...props} 
                handleClick={() => props.deleteNode(props.index)}
            />
        )
    }
    