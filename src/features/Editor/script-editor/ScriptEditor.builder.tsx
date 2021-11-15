import ButtonBP from "@/features/components/ButtonBP";
import TextInputBP from "@/features/components/TextInputBP";
import { withChangeAtItem, withClick } from "@/features/components/higher-order-components/listeners";
import { NamedValue } from "@/models/nodeModels"
import { withNewArgumentState } from "../higher-order-components/editor-buttons.hoc";
import { withScriptState, withArgumentNameState, withArgumentValueState } from "../higher-order-components/editorHOC";
import ScriptEditorBP from "./ScriptEditorBP";
import ArgumentGroupBP from "./ArgumentGroupBP";
import { Popover2 } from "@blueprintjs/popover2";
import { withDeleteArgumentState } from "../hoc/state.hoc";
import { withIndex, withPropsIndex } from "@/features/components/higher-order-components/iterable-components";
import { withDeleteArgument } from "../hoc/handlers.hoc";
import PopoverConfirmation from "@/features/components/PopoverConfirmation";

const FunctionInput = withScriptState(TextInputBP);

const Element = withChangeAtItem(TextInputBP);
const ArgumentName = withArgumentNameState(Element);
const ArgumentValue = withArgumentValueState(Element);  

const AddArgument = withClick(
    withNewArgumentState(ButtonBP)
)

const Confirmation = withDeleteArgumentState(
    withPropsIndex(
        withDeleteArgument(
            PopoverConfirmation
        )
    )
)

const ScriptEditorBuilder = (props: {
    script: string,
    arguments: NamedValue[]
}) => {
    return (
        <ScriptEditorBP script={props.script}
            arguments={props.arguments}
            Function={FunctionInput}
            Arguments={
                <>
                    {
                        props.arguments.map((arg: NamedValue, index: number) =>
                            <ArgumentGroupBP name={arg.name}
                                value={arg.value}
                                index={index}
                                ArgumentName={ArgumentName} 
                                ArgumentValue={ArgumentValue}
                                Confirmation={Confirmation}
                            />
                        )
                    }
                </>
            }
            AddArgument={AddArgument}
        />
    )
}

export default ScriptEditorBuilder;