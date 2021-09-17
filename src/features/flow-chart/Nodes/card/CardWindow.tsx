import { ReactNode } from "react";

const CardWindow = (props: {
    children: ReactNode,
    titlebar: JSX.Element,
    inConnector: JSX.Element,
    outConnector: JSX.Element
}) => {
    return (
        <div className="card-container">
            {
                props.titlebar
            }
            {
                props.children
            }
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