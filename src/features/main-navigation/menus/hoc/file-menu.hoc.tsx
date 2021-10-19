import { NodeModels } from "@/models/nodeModels";
import { saveTextFile } from "@/utils/file-handling";

const withSaveJson = (
    WrappedComponent: React.FunctionComponent<any>,
    data: string, 
    suggestedName: string, 
    format: "json" | "text" 
) => 
    (props: any) => {
        return(
            <WrappedComponent {...props} 
                handleClick={() => saveJsonToFile(data, suggestedName, format)}
            />
        )
    }

const saveJsonToFile = (data: string, suggestedName: string, format: "json" | "text" ) => {
    saveTextFile(data, suggestedName, format);
}

export const withSaveProject = (WrappedComponent: React.FunctionComponent<any>) =>
    (props: any) => {
        const SaveProjectMenuItem = withSaveJson(WrappedComponent, props.model.getJson(), "stagecraft-project", "json");
        return(<SaveProjectMenuItem {...props}/>)
    }

export const withExportNodesJson = (WrappedComponent: React.FunctionComponent<any>) =>
    (props: any) => {
        const ExportNodesJsonMenuItem = withSaveJson(WrappedComponent, props.model.getOnlyJsonContent(), "project-json-nodes", "json");
        return(<ExportNodesJsonMenuItem {...props}/>)
    }
    