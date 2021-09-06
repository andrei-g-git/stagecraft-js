import { ReactNode, useEffect } from "react";
import "./NodeTextAndPreview.scss";

const NodeTextAndPreview = (props: {preview: string, fullContent: string}) => { //not actually simple text, html instead
    return(
        <div className="container-node-text-and-preview">
            <div className="text-box-container">
                <div className="preview-text-content">
                    {
                        <div dangerouslySetInnerHTML={{__html: props.preview}}></div>
                    }
                </div>

                <div className="full-text-content">
                    {
                        <div dangerouslySetInnerHTML={{__html: props.fullContent}}></div>
                    }
                </div>
            </div>

        </div>
    )
}

export default NodeTextAndPreview;