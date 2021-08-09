import { toggledConnecting } from "@/redux/actions";
import { useEffect, useState } from "react";
import { connect } from "react-redux";

const Connector = (props: {isOutgoing: boolean, id: number, connecting: boolean, draggingOut: Function}) => {

    const [clicked, setClicked] = useState(false);

    useEffect(() => { //DEBUG... doesn't work, setting initial state back to false
        console.log("USE EFFECT FROM CONNECTOR")
        console.log("FROM CONNECTOR, CONNECTING IS SET TO:   ", props.connecting)
    },
        [props.connecting]
    );


    return(
        <div className="node-connector"
            onClick={handleClick(setClicked)}
            onMouseDown={handleMouseDown(clicked, props.draggingOut)}
            onMouseUp={handleMouseUp(props.connecting, props.isOutgoing, props.draggingOut)}
        >

        </div>
    )
}

const handleClick = (setClicked: Function) => {
    return () => {
        setClicked(true); //not sure how I'm going to toggle this off without redux and listening for state change...
    }
}

const handleMouseDown = (clicked: boolean, draggingOut: Function) => {
    return () => {
        if(clicked) draggingOut(true);
    }
}

const handleMouseUp = (connecting: boolean, isOutgoing: boolean, draggingOut: Function) => {
    return () => {
        if(connecting && ! isOutgoing){
            draggingOut(false) //don't need this, should be app wide
        }
    }
}

const mapStateToProps = (state: any) => {
    return {
        connecting: state.ui.connecting
    }
}

const mapDispatchToProps = (dispatch: Function) => {
    return {
        draggingOut: (dragging: boolean) => {
            dispatch(toggledConnecting(dragging))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Connector);