import { useEffect, useRef } from "react";
import { Common } from "@/models/nodeModels";
import { connect } from "react-redux";
import { FlowCardBuilder } from "@/features/flow-chart";
import "./FlowSheet.scss";

const FlowSheet = (props: any) => {
    const sheetRef = useRef(null);
    useEffect(() => {
        props.notifyCurrentRef(sheetRef.current);
    },
        []
    );

    useEffect(() => {
        console.log("editor state changed")
    },
        [props.editorVisible]
    );

    return (
        <div className="flow-sheet"
            ref={sheetRef}
        >
            {   props.nodeModel && 
                    props.nodeModel.Models.map((node: Common, index: number) => 
                        <FlowCardBuilder index={index} />
                    )
                // :
                //     <></>
            }
        </div>
    )
}

const mapStateToProps = (state: any) => {
    return{
        nodeModel: state.model.nodeModel,
        textEditorVisible: state.ui.textEditorVisible
    }
}

export default connect(mapStateToProps, null)(FlowSheet);