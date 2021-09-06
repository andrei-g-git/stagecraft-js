import { DialogContent, ScriptContent } from "@/models/nodeModels";

//store HOCs are in nodesHOC.tsx, should move here

export const withHandlers = (WrappedComponent: React.FunctionComponent<any>) => 
    (props: any) => {
        return(
            <WrappedComponent {...props}
                handleClick={handleClick(
                    props.id, 
                    props.toggleEditor, 
                    props.selectNode, 
                    props.sendContentToEditor, //bro this is polymorphism bro. Bro!
                    props.content
                )}
            /> 
        )
    }

const handleClick = (id: number, toggleEditor: Function, selectNode: Function, sendContentToEditor: Function, content: DialogContent | ScriptContent) => {
    console.log("click handler added")
    return (event: MouseEvent) => {
        console.log("clicked")
        selectNode(id);
        toggleEditor(true);
        sendContentToEditor(content);        
    }

}