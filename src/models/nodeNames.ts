import { NAMING_MODEL } from "@/constants/classes";
import { Named/* , NestedModels */ } from "./nodeModels";
import {NestedModels} from "@/models";

export class NodeNames implements Named, NestedModels{
    typeName: string = NAMING_MODEL;

    constructor(public name: string = ""){}

    nest = () => {}
    get Name(): string {
        return this.name;
    }
    set Name(name: string) {
        this.name = name;
    }
    
}