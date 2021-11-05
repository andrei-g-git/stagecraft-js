import { EndsWithSubstring } from "@/types/general-objects";
import "./CardWindow.scss";

const CardWindow = (props: {
    titlebar: JSX.Element,
    layout: JSX.Element,
    inConnector: JSX.Element,
    outConnector: JSX.Element,
    width?: number | EndsWithSubstring<"%"> | EndsWithSubstring<"vw"> | EndsWithSubstring<"px">,
    height?: number | EndsWithSubstring<"%"> | EndsWithSubstring<"vh"> | EndsWithSubstring<"px">
}) => {
    return (
        <div className="card-container"
            style={{width: props.width, height: props.height}}
        >
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