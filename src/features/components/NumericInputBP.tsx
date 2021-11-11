import { Classes, NumericInput } from "@blueprintjs/core";

const NumericInputBP = (props: {handleChange: (event: React.ChangeEvent) => void}) => {
    return (
        <NumericInput className={Classes.NUMERIC_INPUT}
            defaultValue={0}
            onChange={props.handleChange}
        />
    )
}

export default NumericInputBP;