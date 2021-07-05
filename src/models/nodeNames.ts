import { Named } from "./nodeModels";

export class NodeNames implements Named{
    get Name(): string {
        throw new Error("Method not implemented.");
    }
    set Name(name: string) {
        throw new Error("Method not implemented.");
    }
    
}