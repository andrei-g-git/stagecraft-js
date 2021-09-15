import "./ArgumentGroup.scss";

export const ArgumentGroup = (props: any) => {
    return(
        <div className="argument-group">
            <>  
                {
                    props.renderName(props.name, props.index)
                }
            </>
            <div>
                {" = "}
            </div>
            <>
                {
                    props.renderValue(props.value, props.index)
                }
            </>
                
                
        </div>
    )
}

export default ArgumentGroup;