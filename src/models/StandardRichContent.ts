import { StandardRichElement } from "./standardRichElement";
import { RichContent, RichElement } from "./wysiwygModels";

export class StandardRichContent implements RichContent{
    content: RichElement[] = [new StandardRichElement()];
    
    get Content(): RichElement[] {
        throw new Error("Method not implemented.");
    }
    set Content(content: RichElement[]) {
        throw new Error("Method not implemented.");
    }
    
}