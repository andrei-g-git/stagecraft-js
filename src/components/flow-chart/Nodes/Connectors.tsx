import "./Connector.scss";

export const OutConnector = (props: any) => {

    return(
        <div className="node-connector outgoing-connector"
            onMouseDown={handleMouseDown(props.draggingOut, props.setOutgoing, props.id)}
        >

        </div>
    )
}

export const InConnector = (props: any) => {

    return(
        <div className="node-connector ingoing-connector"
            onMouseUp={handleMouseUp(
                props.connecting, 
                props.draggingOut, 
                props.setIngoing, 
                props.id, 
                props.notifyConnection
            )}
        >

        </div>
    )
}

const handleMouseDown = (draggingOut: Function, setOutgoing: Function, id: number) => {
    return (event: any) => {
        draggingOut(true);
        setOutgoing(id);
    }
}

const handleMouseUp = (connecting: boolean, draggingOut: Function, setIngoing: Function, id: number, notifyConnection: Function) => {
    return (event: any) => {
        if(connecting){
            setIngoing(id);
            draggingOut(false) //don't need this, should be app wide

            notifyConnection(id);
        }
    }
}

