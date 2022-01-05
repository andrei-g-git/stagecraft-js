import { Common, Coordinates, NodeModels } from '@/models/nodeModels';
import ReactFlow, { Background, BackgroundVariant, EdgeChange, NodeChange, Panel, Position, ReactFlowProvider, applyEdgeChanges, applyNodeChanges } from 'reactflow';
import FlowCardBuilder from './FlowCard.builder';
import { DIALOG } from '@/models/typeOfNodes';
import {Pictures, Named, Dialog} from "@/models/nodeModels";
import 'reactflow/dist/style.css';
import { useCallback, useEffect, useState } from 'react';
import "./test-reactflow-sheet.scss";

type FlowNode = React.SetStateAction<{
    id: string;
    position: {
        x: number;
        y: number;
    };
    sourcePosition: string;
    targetPosition: string;
    data: {
        label: JSX.Element;
    };
}[]>

const TestReactflowSheet = (props: {
    model: NodeModels
}) => {
    useEffect(() => {
        setNodes(initialNodes)
        setEdges(initialEdges)
    },
        [props.model]
    )

    const initialNodes = convertModelToReactFlowNodeData(props.model.Models);
    const initialEdges = getEdges(props.model.Models);

    const [nodes, setNodes] = useState(initialNodes);
    const [edges, setEdges] = useState(initialEdges);
    
    const onNodesChange = useCallback(
        (changes: NodeChange[]) => setNodes((nds) => applyNodeChanges(changes, nds)),
        [setNodes]
    );
    const onEdgesChange = useCallback(
        (changes: EdgeChange[]) => setEdges((eds) => applyEdgeChanges(changes, eds)),
        [setEdges]
    );



    return (
        <div className='test-reactflow'>
            <ReactFlowProvider>
                <ReactFlow 
                    //style={{position: "absolute", top: 0, left: 0}}
                    nodes={nodes}
                    edges={edges}
                    onNodesChange={onNodesChange}
                    onEdgesChange={onEdgesChange} 
                    //onNodesChange={(changes: NodeChange[]) => setNodes((nds) => applyNodeChanges(changes, nds))}
                    //onEdgesChange={(changes: EdgeChange[]) => setEdges((eds) => applyEdgeChanges(changes, eds))}                                    
                    fitView
                >
                    <Background color="#ccc" variant={BackgroundVariant.Lines} />
                </ReactFlow>         
            </ReactFlowProvider>
        </div>


    )
}

const convertModelToReactFlowNodeData = (nodeModels: Common[]) => {

    return nodeModels.map((model: Common, index: number) => {
        return{
            id: String(model.Id),
            position: {
                x: (model as unknown as Coordinates).Position.x, //shouldn't these be encapsulated and private?...
                y: (model as unknown as Coordinates).Position.y
            },
            sourcePosition: Position.Right,
            targetPosition: Position.Left,
            dragHandle: ".card-handle",
            data: {label: 
                <div style={{width: 155, height: 155}}>
                    <FlowCardBuilder index={index} />
                </div>
            }
        }
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
                id: `e${node.Id}-${outgoingNode.Id}`,
                source: String(node.Id),
                target: String(outgoingNode.Id)
            })
        });
    });
    return edges.filter((pair, index) => index === edges.indexOf(pair));
}


export default TestReactflowSheet;