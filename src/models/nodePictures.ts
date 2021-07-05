import { Pictures } from "./nodeModels";

export class NodePictures implements Pictures{
    avatar: string = "";

    get Avatar(): string {
        return this.avatar;
    }
    set Avatar(avatar: string) {
        this.avatar = avatar;
    }
    
}