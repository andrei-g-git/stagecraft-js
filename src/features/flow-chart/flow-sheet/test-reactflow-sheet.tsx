import { Common, Coordinates, NodeModels } from '@/models/nodeModels';
import ReactFlow, { Background, BackgroundVariant, EdgeChange, NodeChange, Panel, Position, ReactFlowInstance, ReactFlowProvider, addEdge, applyEdgeChanges, applyNodeChanges } from 'reactflow';
import FlowCardBuilder from './FlowCard.builder';
import { DIALOG } from '@/models/typeOfNodes';
import {Pictures, Named, Dialog} from "@/models/nodeModels";
import 'reactflow/dist/style.css';
import { useCallback, useEffect, useRef, useState } from 'react';
import "./test-reactflow-sheet.scss";
import { useDragOver } from '@/features/components';
import { useDropNode, useInitialNodesAndEdges, useUpdateNodesAndEdges } from './hooks/reactflow.hooks';
import { createNode } from '@/models/usage/factory';
import { CARD_HANDLE_CLASS, STANDARD_REACTFLOW_NODE_TYPE } from '@/features/flow-chart';
import { ReactflowNode } from "@/features/flow-chart";

const TestReactflowSheet = (props: {
    model: NodeModels
}) => {
    // const initialNodes = convertModelToReactFlowNodeData(props.model.Models);
    // const initialEdges = getEdges(props.model.Models);

    // const [nodes, setNodes] = useState(initialNodes);
    // const [edges, setEdges] = useState(initialEdges);

    const [nodes, edges, setNodes, setEdges] = useInitialNodesAndEdges(props.model);

    // useEffect(() => {
    //     setNodes(initialNodes);
    //     setEdges(initialEdges);
    //     console.log("model:  ", props.model)

    // },
    //     [props.model]
    // )

    useUpdateNodesAndEdges(props.model, setNodes, setEdges);

    useEffect(() => {
        if(edges){
            const lastConnectedEdge = edges.length && edges.slice(-1).pop();

            if(lastConnectedEdge){
                const {source, target} = lastConnectedEdge

                console.log("source:  ", source, "target:  ", target)

                props.model.addConnection(parseFloat(source), parseFloat(target))

                console.log("model:  ", props.model)
            }            
        }


    }, 
        [edges]
    )


    //test
    const wrapper = useRef<HTMLDivElement>(null);

    const [reactFlowInstance, setReactFlowInstance] = useState<ReactFlowInstance<any, any> | null>(null);





    
    const handleConnect = useCallback(
        (params: any) => {
            setEdges((eds) => addEdge(params, eds));
        },
        [setEdges]
    );

    const onNodesChange = useCallback(
        (changes: NodeChange[]) => setNodes((nds: any) => applyNodeChanges(changes, nds)),
        [setNodes]
    );
    const onEdgesChange = useCallback(
        (changes: EdgeChange[]) => setEdges((eds) => applyEdgeChanges(changes, eds)),
        [setEdges]
    );

    return (
        <div className='test-reactflow'>

            <ReactFlowProvider>
                <div ref={wrapper} style={{width: "100%", height:"100%"}}>
                    <ReactFlow 
                        nodes={nodes}
                        edges={edges}
                        onNodesChange={onNodesChange}
                        onEdgesChange={onEdgesChange} 
                        onConnect={handleConnect}                               
                        fitView
                        onDragOver={useDragOver()}
                        onDrop={useDropNode(
                            props.model,
                            FlowCardBuilder,
                            reactFlowInstance!,
                            setNodes,
                            wrapper,
                            createNode
                        )}
                        onInit={setReactFlowInstance}
                    >
                        <Background color="#ccc" variant={BackgroundVariant.Lines} />
                    </ReactFlow>                       
                </div>
      
            </ReactFlowProvider>
        </div>


    )
}

const convertModelToReactFlowNodeData = (nodeModels: Common[]) => {

    return nodeModels.map((model: Common, index: number) => {
        const node: ReactflowNode = {
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

const getEdges = (nodes: Common[]) => {
    const edges: {
        id: string,
        source: string,
        target: string
    }[] = [];
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


export default TestReactflowSheet;