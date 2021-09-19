import { DialogContent, ScriptContent } from "@/models/nodeModels";

//store HOCs are in nodesHOC.tsx, should move here

export const withHandlers = (WrappedComponent: React.FunctionComponent<any>) => //should be named differently
    (props: any) => {
        return(
            <WrappedComponent {...props}
                handleClick={handleClick(
                    props.id, 
                    props.toggleEditor, 
                    props.selectNode, 
                    props.sendContentToEditor, //bro this is polymorphism bro. Bro! --- nope, only the dialog card uses this...
                    props.content
                )}
            /> 
        )
    }

const handleClick = (id: number, toggleEditor: Function, selectNode: Function, sendContentToEditor: Function, content: DialogContent | ScriptContent) => {
    return (event: /* MouseEvent */React.MouseEvent) => {
        selectNode(id);
        toggleEditor(true);
        sendContentToEditor(content);        
    }

}




// export const withDragging = (WrappedComponent: React.FunctionComponent<any>) => 
//     (props: any) => {
//         return(
//             <WrappedComponent {...props} />
//         )
//     }

