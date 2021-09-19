import { ReactNode } from "react";
import "./CardWindow.scss";

const CardWindow = (props: {
    //children: ReactNode,
    titlebar: JSX.Element,
    layout: JSX.Element,
    inConnector: JSX.Element,
    outConnector: JSX.Element
}) => {
    return (
        <div className="card-container">
            {
                props.titlebar
            }
            {
                props.layout
            }
            {/* {
                props.children
            } */}
            {
                props.inConnector
            }
            {
                props.outConnector
            }            
        </div>
    )
}

export default CardWindow;