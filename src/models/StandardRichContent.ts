import { RICH_CONTENT_MODEL } from "@/constants/classes";
import { StandardRichElement } from "./standardRichElement";
import { RichContent, RichElement } from "./wysiwygModels";
import {NestedModels} from "@/models";
import { literalToClass } from "./usage/dataConversion";

export class StandardRichContent implements RichContent, NestedModels{
    typeName: string = RICH_CONTENT_MODEL;    

    constructor(
        public content: RichElement[] = [new StandardRichElement()]
    ){}

    nest = () => {
        this.content = this.content.map((element: RichElement) => literalToClass(element, StandardRichElement));
    }
    
    get Content(): RichElement[] {
        throw new Error("Method not implemented.");
    }
    set Content(content: RichElement[]) {
        throw new Error("Method not implemented.");
    }
    
}