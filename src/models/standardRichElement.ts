import { StandardRichAttributes } from "./standardRichAttributes";
import { ImageBlob, RichAttributes, RichElement } from "./wysiwygModels";

export class StandardRichElement implements RichElement{
    constructor(
        public insert: string | ImageBlob = "",
        public attributes: RichAttributes = new StandardRichAttributes()
    ){}

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