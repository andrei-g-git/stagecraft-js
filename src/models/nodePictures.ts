import { PICTURES_MODEL } from "@/constants/classes";
import { Pictures /* , NestedModels */ } from "./nodeModels";
import {NestedModels} from "@/models";
import { DEFAULT_DIALOG_CARD_PICTURE } from "@/constants/assets";

export class NodePictures implements Pictures, NestedModels{
    typeName: string = PICTURES_MODEL;
        
    constructor(public avatar: string = DEFAULT_DIALOG_CARD_PICTURE){}

    nest = () => {}

    get Avatar(): string {
        return this.avatar;
    }
    set Avatar(avatar: string) {
        this.avatar = avatar;
    }
    
}