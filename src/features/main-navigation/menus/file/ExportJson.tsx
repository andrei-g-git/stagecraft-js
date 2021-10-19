import { NodeModels } from '@/models/nodeModels';
import { saveTextFile } from '@/utils/file-handling';

const ExportJson = (props: any) => { 
    return (
        <props.MenuItem name={props.name}
            handleClick={() => exportModelJson(props.model, props.action)}
        />
    )
}

const exportModelJson = async (model: NodeModels, action: number) => {
    const data = model.getJson();

    saveTextFile(data, "dialog-flow", "json");
}

export default ExportJson;