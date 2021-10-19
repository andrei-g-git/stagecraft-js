import { Delta } from "@/features/Editor/types";
import { StandardRichContent } from "./StandardRichContent";
import { ContentVersions, Dialog } from "./nodeModels";
import { RichContent, RichElement } from "./wysiwygModels";

export class NodeDialog implements Dialog{

    constructor(
        // public content : RichContent = new StandardRichContent(), 
        // public html: string = "",
        public preview: ContentVersions = {html: "", json: new StandardRichContent([])},
        public full: ContentVersions = {html: "", json: new StandardRichContent([])}
    ){}

    get Preview(): ContentVersions {
        return this.preview;
    }
    set Preview(preview: ContentVersions) {
        this.preview = preview;
    }
    get PreviewHtml(): string {
        return this.preview.html;
    }
    set PreviewHtml(html: string) {
        this.preview.html = html;
    }
    get PreviewJson(): RichContent {
        return this.preview.json;
    }
    set PreviewJson(json: RichContent) {
        this.preview.json = json;
    }
///
    get Full(): ContentVersions {
        return this.full;
    }
    set Full(full: ContentVersions) {
        this.full = full;
    }
    get FullHtml(): string {
        return this.full.html;
    }
    set FullHtml(html: string) {
        this.full.html = html;
    }
    get FullJson(): RichContent {
        return this.full.json;
    }
    set FullJson(json: RichContent) {
        this.full.json = json;
    }
///    
    // get Content(): RichContent{
    //     return this.content;
    // }
    // set Content(content: RichContent) {
    //     this.content = content;
    // }
    // get Html(): string {
    //    return this.html;
    // }
    // set Html(html: string) {
    //     this.html = html;
    // }

}