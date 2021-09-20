import { NodeModels } from "@/models/nodeModels"

export const withTitleChange = (WrappedComponent: React.FunctionComponent<any>, model: NodeModels, index: number) => 
    (props: any) => {
        return (
            <WrappedComponent {...props}
                handleChange={changeTitle(model, index)}
            />
        )
    }

const changeTitle = (model: NodeModels, index: number) => 
    (content: string) => {
        console.log(`SETTING TITLE  ${content}`)
        model.setTitle(content, index);
    }