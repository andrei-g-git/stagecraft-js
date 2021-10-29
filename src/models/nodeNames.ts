import { NAMING_MODEL } from "@/constants/classes";
import { Named, NestedModels } from "./nodeModels";

export class NodeNames implements Named, NestedModels{
    typeName: string = NAMING_MODEL;
    nest = () => {}
    get Name(): string {
        throw new Error("Method not implemented.");
    }
    set Name(name: string) {
        throw new Error("Method not implemented.");
    }
    
}