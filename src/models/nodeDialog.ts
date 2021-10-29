import { Delta } from "@/features/Editor/types";
import { StandardRichContent } from "./StandardRichContent";
import { ContentVersions, Dialog/* , NestedModels */ } from "./nodeModels";
import {NestedModels} from "@/models";
import { RichContent, RichElement } from "./wysiwygModels";
import { DIALOG_MODEL } from "@/constants/classes";
import { literalToClass } from "./usage/dataConversion";

export class NodeDialog implements Dialog, NestedModels{
    typeName: string = DIALOG_MODEL;
    
    constructor(
        public preview: ContentVersions = {html: "", json: new StandardRichContent([])},
        public full: ContentVersions = {html: "", json: new StandardRichContent([])}
    ){}

    nest = () => {
        this.preview.json = literalToClass(this.preview.json, StandardRichContent);
        this.full.json = literalToClass(this.full.json, StandardRichContent);
    }

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

}