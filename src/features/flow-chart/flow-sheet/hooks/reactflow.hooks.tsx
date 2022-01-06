
import { ReactflowEdge } from "@/features/components";
import { Common, Coordinates, NodeModels } from "@/models/nodeModels";
import { IndexedPropType } from "@/types/react-types";
import { useCallback, useEffect, useState } from "react";
import { Node, Position, ReactFlowInstance, addEdge } from "reactflow";
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
            event.preventDefault();

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
                    //debugger //
                    const blankNodeModel = createNode(parseFloat(type));
                    model.setUpNode(blankNodeModel, position.x, position.y);

                    const modelIndex = model.Models.length ? model.Models.length - 1 : 0;
                    //debugger//
                    const newNode: /* ReactflowNode */Node = {
                        id: String(model.getId(modelIndex)), 
                        type: STANDARD_REACTFLOW_NODE_TYPE,
                        position,
                        sourcePosition: Position.Right,
                        targetPosition: Position.Left, 
                        dragHandle: CARD_HANDLE_CLASS,                       
                        data: { label: 
                            <div style={{width: 155, height: 155}}> {/* remove div, obv... */}
                                <Card index={modelIndex} />
                            </div>                    
                        },
                    };

                    setNodes((nodes: Node<any, string | undefined>[]) => nodes.concat(newNode));
                }                
            }

        },
        [reactFlowInstance]
    );
}


export const useInitialNodesAndEdges = (model: NodeModels):[
    /* ReactflowNode */Node<any, string | undefined>[] | /* null */undefined,
    ReactflowBezier[] | /* null */undefined,
    React.Dispatch<React.SetStateAction</* ReactflowNode */Node<any, string | undefined>[] | /* null */undefined>>,
    React.Dispatch<React.SetStateAction<ReactflowBezier[] | /* null */undefined>>
] => {
    //const [nodes, setNodes] = useState</* ReactflowNode */Node[] | null>(null);
    const [nodes, setNodes] = useState<Node<any, string | undefined>[] | /* null */undefined>(/* null */[]);
    const [edges, setEdges] = useState<ReactflowBezier[] | /* null */undefined>(/* null */[]);

    useEffect(() => {
        setNodes(convertModelToReactFlowNodeData(model.Models));
        setEdges(getEdges(model.Models));
    },
        []
    )

    return [nodes, edges, setNodes, setEdges];
}

export const useUpdateNodesAndEdges = (
    model: NodeModels, 
    setNodes: React.Dispatch<React.SetStateAction</* ReactflowNode */Node<any, string | undefined>[] | /* null */undefined>>, 
    setEdges: React.Dispatch<React.SetStateAction<ReactflowBezier[] | null>>
) => {
    useEffect(() => {
        setNodes(convertModelToReactFlowNodeData(model.Models));
        setEdges(getEdges(model.Models));        
    },
        [model]
    )
}

const convertModelToReactFlowNodeData = (nodeModels: Common[]) => {
    if(nodeModels && nodeModels.length){
        return nodeModels.map((model: Common, index: number) => {
            const node: /* ReactflowNode */Node<any, string | undefined> = {
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
            return node;
        });        
    } 

    return /* null */undefined; //It would probably return undefined regardless...
}

const getEdges = (nodes: Common[]) => {
    const edges: ReactflowBezier[] = [];
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