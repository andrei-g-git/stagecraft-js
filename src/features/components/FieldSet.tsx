import "./FieldSet.scss";

const FieldSet = (props: {children: React.ReactNode, legend: string}) => {
    return (
        <fieldset className="field-set">
            <legend>{props.legend}</legend>
            {
                props.children
            }
        </fieldset>
    )
}

export default FieldSet;