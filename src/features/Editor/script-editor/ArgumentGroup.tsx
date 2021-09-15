import { PropsWithContent, PropsWithIndex } from "@/features/components/types";
import "./ArgumentGroup.scss";

export const ArgumentGroup = (
    NameField: React.FunctionComponent<any>,
    ValueField: React.FunctionComponent<any>
) => (
    props: PropsWithContent & PropsWithIndex
) => {
    return(
        <div className="argument-group">
            <NameField content={props.content.name} 
                index={props.index}
            />
            {" = "}
            <ValueField content={props.content.value} 
                index={props.index} 
            />   
        </div>
    )
}

export default ArgumentGroup;