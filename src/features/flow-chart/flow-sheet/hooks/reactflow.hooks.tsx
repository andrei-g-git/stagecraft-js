
import { ReactflowEdge } from "@/features/components";
import { Common, Coordinates, NodeModels } from "@/models/nodeModels";
import { IndexedPropType } from "@/types/react-types";
import { useCallback, useEffect, useState } from "react";
import { Edge, Node, Position, ReactFlowInstance, addEdge } from "reactflow";
import { CARD_HANDLE_CLASS, FlowCardBuilder, ReactflowBezier, ReactflowNode, STANDARD_REACTFLOW_NODE_TYPE } from "@/features/flow-chart";

export const useAddEdge = (setEdges: React.Dispatch<React.SetStateAction<any>>) => 
    useCallback(
        (params: any) => setEdges(
            (edges: ReactflowEdge[]) => addEdge(params, edges)
        ), 
        []
    );

export const useDropNode = ( //probably won't reuse this, doesn't need to be a custom hook...
    model: NodeModels,
    Card: React.FunctionComponent<IndexedPropType>,
    reactFlowInstance: ReactFlowInstance<any, any> | null, 
    setNodes: React.Dispatch<React.SetStateAction<any>>, 
    reactFlowWrapper: React.RefObject<HTMLDivElement>,
    createNode: (type: number) => Common
) =>  {
    return useCallback(
        (event: React.DragEvent) => {
            console.log("model before BEFORE:   ", model)///////////////////////////////////////////
            event.preventDefault();
            //debugger///
            if(reactFlowWrapper.current && event.dataTransfer){
                const reactFlowBounds = reactFlowWrapper.current.getBoundingClientRect();
                const type = event.dataTransfer.getData('application/reactflow');

                // check if the dropped element is valid
                if (typeof type === 'undefined' || !type) {
                    return;
                }

                if(reactFlowInstance){
                    const position = reactFlowInstance.project({
                        x: event.clientX - reactFlowBounds.left,
                        y: event.clientY - reactFlowBounds.top,
                    });
                    ////debugger //
                    console.log("model before:   ", model)//////////////////////////////////////////////////////////
                    const blankNodeModel = createNode(parseFloat(type));
                    model.setUpNode(blankNodeModel, position.x, position.y);

                    console.log("model after:   ", model)//////////////////////////////////////////////////////////

                    const modelIndex = model.Models.length ? model.Models.length - 1 : 0;
                    ////debugger//
                    // const newNode: Node<any, string | undefined> = {
                    //     id: String(model.getId(modelIndex)), 
                    //     type: STANDARD_REACTFLOW_NODE_TYPE,
                    //     position,
                    //     sourcePosition: Position.Right,
                    //     targetPosition: Position.Left, 
                    //     dragHandle: CARD_HANDLE_CLASS,                       
                    //     data: { label: 
                    //         <div style={{width: 155, height: 155}}> {/* remove div, obv... */}
                    //             <Card index={modelIndex} />
                    //         </div>                    
                    //     },
                    // };
                    const newNode = convertNode(model.Models[modelIndex], modelIndex)
                    //debugger///
                    setNodes((nodes: Node<any, string | undefined>[]) => nodes.concat(newNode));
                    //debugger///
                }                
            }

        },
        [reactFlowInstance]
    );
}


export const useInitialNodesAndEdges = (model: NodeModels):[
    /* ReactflowNode */Node<any, string | undefined>[] | /* null */undefined,
    /* ReactflowBezier[] */Edge[] | /* null */undefined,
    React.Dispatch<React.SetStateAction</* ReactflowNode */Node<any, string | undefined>[] | /* null */undefined>>,
    React.Dispatch<React.SetStateAction</* ReactflowBezier[] */Edge[] | /* null */undefined>>
] => {
    //const [nodes, setNodes] = useState</* ReactflowNode */Node[] | null>(null);
    const [nodes, setNodes] = useState<Node<any, string | undefined>[] | /* null */undefined>(/* null */[]);
    const [edges, setEdges] = useState</* ReactflowBezier[] */Edge[] | /* null */undefined>(/* null */[]);

    useEffect(() => { //THIS FUCKS WITH INITIALIZATION I THINK...
        setNodes(convertModelToReactFlowNodeData(model.Models));
        setEdges(getEdges(model.Models));
        //debugger///
        //console.log("nodes:   ", nodes)
    },
        []
    )
    //debugger///
    return [nodes, edges, setNodes, setEdges];
}

export const useInitialNodes = (nodeModels: Common[]):[
    Node<any, string | undefined>[] | undefined, 
    React.Dispatch<React.SetStateAction<Node<any, string | undefined>[] | undefined>>
] => {
    return useState(convertModelToReactFlowNodeData(nodeModels));
}

export const useInitialEdges = (nodeModels: Common[] ):[
    Edge[] | undefined, 
    React.Dispatch<React.SetStateAction<Edge[] | undefined>>
] => {
    return useState(getEdges(nodeModels))
}

export const useUpdateNodesAndEdges = (
    model: NodeModels, 
    setNodes: React.Dispatch<React.SetStateAction</* ReactflowNode */Node<any, string | undefined>[] | /* null */undefined>>, 
    setEdges: React.Dispatch<React.SetStateAction</* ReactflowBezier[] */Edge[] | /* null */undefined>>
) => {
    useEffect(() => {
        setNodes(convertModelToReactFlowNodeData(model.Models));
        setEdges(getEdges(model.Models));  
        //debugger///    
    },
        [model.Models]
    )
}

const convertModelToReactFlowNodeData = (nodeModels: Common[]) => { //breaks encapsulation somewhat, sub-models should only be accesed through NodeModels interface
    let nodes = undefined;
    if(nodeModels && nodeModels.length){
        nodes = nodeModels.map((model: Common, index: number) => {
            // const node: Node<any, string | undefined> = {
            //     id: String(model.Id),
            //     type: STANDARD_REACTFLOW_NODE_TYPE,
            //     position: {
            //         x: (model as unknown as Coordinates).Position.x, //shouldn't these be encapsulated and private?...
            //         y: (model as unknown as Coordinates).Position.y
            //     },
            //     sourcePosition: Position.Right,
            //     targetPosition: Position.Left,
            //     dragHandle: CARD_HANDLE_CLASS,
            //     data: {label: 
            //         <div style={{width: 155, height: 155}}>
            //             <FlowCardBuilder index={index} />
            //         </div>
            //     }
            // }
            const node: Node<any, string | undefined> = convertNode(model, index);
            return node;
        });   
    } 
//debugger///
    console.log("nodes from convert:   ", nodes)
    return /* null */nodes; 
}

const convertNode = (model: Common, index: number) => {//breaks encapsulation somewhat, sub-models should only be accesed through NodeModels interface
    return{
        id: String(model.Id),
        type: STANDARD_REACTFLOW_NODE_TYPE,
        position: {
            x: (model as unknown as Coordinates).Position.x, //shouldn't these be encapsulated and private?...
            y: (model as unknown as Coordinates).Position.y
        },
        sourcePosition: Position.Right,
        targetPosition: Position.Left,
        dragHandle: CARD_HANDLE_CLASS,
        data: {label: 
            <div style={{width: 155, height: 155}}>
                <FlowCardBuilder index={index} />
            </div>
        }
    }
}

const getEdges = (nodes: Common[]): Edge[] | undefined => {
    const edges: /* ReactflowBezier[] */Edge[] | undefined = [];
    nodes.forEach(node => {
        node.Outgoing.forEach(outgoingId => {
            const outgoingNode = nodes.filter(node => node.Id === outgoingId)[0];
            edges.push({
                id: `reactflow__edge-${node.Id}-${outgoingNode.Id}`,
                source: String(node.Id),
                target: String(outgoingNode.Id)
            })
        });
    });
    return edges.filter((pair, index) => index === edges.indexOf(pair));
}