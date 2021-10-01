import { MenuItemProps } from "@/features/components";
import { NodeModels } from "@/models/nodeModels";

export const  withExportJson = (WrappedComponent: React.FunctionComponent<any>, model: NodeModels) => 
    (props: any) => {
        return(
            <WrappedComponent {...props} 
                handleClick={() => exportModelJson(model)}
            />
        )
    }

const exportModelJson = (model: NodeModels) => {

}