import { DialogContent, ScriptContent } from "@/models/nodeModels";
import { useTitleEditor } from "../card/hooks/card.hooks";

//store HOCs are in nodesHOC.tsx, should move here

export const withHandlers = (WrappedComponent: React.FunctionComponent<any>) => //should be named differently
    (props: any) => {
        return(
            <div style={{width: "100%", height: "100%"}} /* fuuuuck */
                onClick={handleClick(
                    props.id, 
                    props.toggleEditor, 
                    props.selectNode, 
                    props.sendContentToEditor, //bro this is polymorphism bro. Bro! --- nope, only the dialog card uses this...
                    props.content
                )}
            > 
                <WrappedComponent {...props}
                    // handleClick={handleClick(
                    //     props.id, 
                    //     props.toggleEditor, 
                    //     props.selectNode, 
                    //     props.sendContentToEditor, //bro this is polymorphism bro. Bro! --- nope, only the dialog card uses this...
                    //     props.content
                    // )}
                /> 
            </div>

        )
    }

const handleClick = (id: number, toggleEditor: Function, selectNode: Function, sendContentToEditor: Function, content: /* DialogContent */ string | ScriptContent) => {
    return (event: /* MouseEvent */React.MouseEvent) => {
        console.log(`CLICKED CARD CONTENT WITH ID ${id} AND CONTENT: ${content}`)
        selectNode(id);
        toggleEditor(true);
        sendContentToEditor(content);        
    }

}

export const withTitleEditorOpener = (WrappepdComponent: React.FunctionComponent<any>) => //doesn't work yet, it re-renders at the drop of a hat so when I close the editor it will jsut open up again
    (props: any) => {
        
        useTitleEditor(props);
        
        return(
            <WrappepdComponent {...props} />
        )
    }

    
