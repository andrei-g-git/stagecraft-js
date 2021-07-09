import { StandardRichContent } from "./StandardRichContent";
import { Dialog } from "./nodeModels";
import { RichContent, RichElement } from "./wysiwygModels";

export class NodeDialog implements Dialog{

    content: RichContent = new StandardRichContent();
    html: string = ""; //these aren't interface props... probably should add in constructor

    get Content(): RichContent{
        return this.content;
    }
    set Content(content: RichContent) {
        this.content = content;
    }
    get Html(): string/* HTMLElement */ {
       return this.html;
    }
    set Html(html: string/* HTMLElement */) {
        this.html = html;
    }
    
}