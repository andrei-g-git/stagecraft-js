import { DividingContainer, FieldSet } from "@/features/components";
import FolderPicker from "@/features/components/FolderPicker";
import {withAvatarDirectory, withAvatarDirectoryState} from "@/features/preferences";

const FlowCardSettings = () => {
    const AvatarDirectoryPicker = withAvatarDirectoryState(
        withAvatarDirectory(FolderPicker)
    )

    return (
        <DividingContainer  
            border="left" 
            fillParent={true} 
        >
            <FieldSet
                legend="Dialog Card"
            >
                <AvatarDirectoryPicker icon="folder-open"/>
            </FieldSet>
        </DividingContainer> 
    )
}

export default FlowCardSettings;