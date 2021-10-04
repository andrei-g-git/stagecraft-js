import { MenuItemProps } from "@/features/components";
import { NodeModels } from "@/models/nodeModels";

export const  withExportJson = (WrappedComponent: React.FunctionComponent<any>, model: NodeModels) => 
    (props: any) => {
        console.log("ADDED EXPORT JSON MENU ITEM")
        return(
            <WrappedComponent {...props} 
                handleClick={() => exportModelJson(model)}
            />
        )
    }

const exportModelJson = (model: NodeModels) => {
    console.log("MODEL:  ", model)
    const data = model.getJson();

    const fs = require("fs");
    fs.writeFile("model.json", data, (err: any) => {
        if(err){ 
            console.log(err)
        } else {
            console.log("Wrote to disk")
        }
    })
}