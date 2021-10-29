import { PICTURES_MODEL } from "@/constants/classes";
import { NestedModels, Pictures } from "./nodeModels";

export class NodePictures implements Pictures, NestedModels{
    typeName: string = PICTURES_MODEL;
        
    constructor(public avatar: string = ""){}

    nest = () => {}

    get Avatar(): string {
        return this.avatar;
    }
    set Avatar(avatar: string) {
        this.avatar = avatar;
    }
    
}