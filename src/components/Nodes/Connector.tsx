import { changedIngoingConnectorId, changedOutgoingConnectorId, toggledConnecting } from "@/redux/actions";
import { useEffect, useState } from "react";
import { connect } from "react-redux";
import "./Connector.scss";

const Connector = (props: {isOutgoing: boolean, id: number, connecting: boolean, draggingOut: Function, setOutgoing: Function,setIngoing: Function, notifyConnection: Function}) => {

    const [clicked, setClicked] = useState(false);

    useEffect(() => { //DEBUG... doesn't work, setting initial state back to false
        console.log("USE EFFECT FROM CONNECTOR")
        console.log("FROM CONNECTOR, CONNECTING IS SET TO:   ", props.connecting)	 
    },
        [props.connecting]
    );


    return(
        <div className={`node-connector ${props.isOutgoing? "outgoing-connector" : "ingoing-connector"}`}
            //onClick={handleClick(setClicked)} //click is mousedown + mouseup so it runs AFTER mousedown...
            onMouseDown={handleMouseDown(props.draggingOut, props.setOutgoing, props.id)}
            onMouseUp={handleMouseUp(props.connecting, props.isOutgoing, props.draggingOut, props.setIngoing, props.id, props.notifyConnection)}
        >
            {
                Math.floor(Math.random() * 10)
            }
        </div>
    )
}

const handleClick = (setClicked: Function) => {
    return () => {
        setClicked(true); //not sure how I'm going to toggle this off without redux and listening for state change...
        setTimeout(() => { //fuck...
            setClicked(false);
        }, 
            //50
        )
    }
}

const handleMouseDown = (draggingOut: Function, setOutgoing: Function, id: number) => {
    return () => {
        draggingOut(true);
        setOutgoing(id);
    }
}

const handleMouseUp = (connecting: boolean, isOutgoing: boolean, draggingOut: Function, setIngoing: Function, id: number, notifyConnection: Function) => {
    return () => {
        console.log("~~~CHECKING from connector")
        console.log("//// is outgoing?   ", isOutgoing)
        if(connecting && ! isOutgoing){
            console.log("~~~CONNECTED from connector")
            setIngoing(id);
            notifyConnection();
            draggingOut(false) //don't need this, should be app wide
        }
    }
}

const mapStateToProps = (state: any) => {
    return {
        connecting: state.ui.connecting,
        outgoing: state.ui.outgoing,
        ingoing: state.ui.ingoing
    }
}

const mapDispatchToProps = (dispatch: Function) => {
    return {
        draggingOut: (dragging: boolean) => {
            dispatch(toggledConnecting(dragging));
        },
        setOutgoing: (id: number) => {
            dispatch(changedOutgoingConnectorId(id));
        },
        setIngoing: (id: number) => {
            dispatch(changedIngoingConnectorId(id));
        }        
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Connector);