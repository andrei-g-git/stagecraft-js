import { StandardRichAttributes } from "./standardRichAttributes";
import { ImageBlob, RichAttributes, RichElement } from "./wysiwygModels";
import {NestedModels} from "@/models";
import { literalToClass } from "./usage/dataConversion";
import { RICH_ELEMENT_MODEL } from "@/constants/classes";

export class StandardRichElement implements RichElement, NestedModels{
    typeName: string = RICH_ELEMENT_MODEL;

    constructor(
        public insert: string | ImageBlob = "",
        public attributes: RichAttributes = new StandardRichAttributes()
    ){}

    nest = () => {
        this.attributes = literalToClass(this.attributes, StandardRichAttributes);
    }

    get Insert(): string | ImageBlob {
        throw new Error("Method not implemented.");
    }
    set Insert(insert: string | ImageBlob) {
        throw new Error("Method not implemented.");
    }
    get Attributes(): RichAttributes {
        throw new Error("Method not implemented.");
    }
    set Attributes(attributes: RichAttributes) {
        throw new Error("Method not implemented.");
    }
    
}