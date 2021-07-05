import { StandardRichContent } from "./StandardRichContent";
import { Dialog } from "./nodeModels";
import { RichContent, RichElement } from "./wysiwygModels";

export class NodeDialog implements Dialog{
    content: RichContent = new StandardRichContent();

    get Content(): RichContent{
        return this.content;
    }
    set Content(content: RichContent) {
        this.content = content;
    }
    
}