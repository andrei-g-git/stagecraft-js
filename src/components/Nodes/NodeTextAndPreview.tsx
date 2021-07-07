import { ReactNode } from "react";
import "./NodeTextAndPreview.scss";

const NodeTextAndPreview = (props: {preview: ReactNode, fullContent: ReactNode}) => { //not actually simple text, html instead

    return(
        <div className="container-node-text-and-preview">
            <div className="text-box-container">
                <div className="preview-text-content">
                    {
                        props.preview
                    }
                </div>

                <div className="full-text-content">
                    {
                        props.fullContent
                    }
                </div>
            </div>

        </div>
    )
}

export default NodeTextAndPreview;