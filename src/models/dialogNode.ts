import { Delta } from "@/components/Editor/quillTypes";
import { Common, ContentVersions, Coordinates, Dialog, DialogNode, Named, Pictures } from "./nodeModels";
import { Coord2D } from "./vectors";
import { RichContent } from "./wysiwygModels";

export class BasicDialogNode implements DialogNode, Common, Coordinates, Named, Pictures, Dialog{
    constructor(
        public common: Common,// = new CommonNode(),
        public coordinates: Coordinates,// = new NodeCoordinates(),
        public naming: Named,// = new NodeNames(),
        public pictures: Pictures,// = new NodePictures()
        public dialog: Dialog
    ){}

    get PreviewHtml(): string {
        return this.dialog.PreviewHtml;
    }
    set PreviewHtml(html: string) {
        this.dialog.PreviewHtml = html;
    }
    get PreviewJson(): RichContent {
        return this.dialog.PreviewJson;
    }
    set PreviewJson(json: RichContent) {
        this.dialog.PreviewJson = json;
    }

    get Preview(): ContentVersions {
        return this.dialog.Preview;
    }
    set Preview(preview: ContentVersions) {
        this.dialog.Preview = preview;
    }
//
    get FullHtml(): string {
        return this.dialog.FullHtml;
    }
    set FullHtml(html: string) {
        this.dialog.FullHtml = html;
    }
    get FullJson(): RichContent {
        return this.dialog.FullJson;
    }
    set FullJson(json: RichContent) {
        this.dialog.FullJson = json;
    }

    get Full(): ContentVersions {
        return this.dialog.Full;
    }
    set Full(full: ContentVersions) {
        this.dialog.Full = full;
    }
//

    
    get Id(): number {
        return this.common.Id;
    }
    set Id(id: number) {
        this.common.Id = id;
    }
    get Title(): string {
        return this.common.Title;
    }
    set Title(title: string) {
        this.common.Title = title;
    }
    get Type(): string {
        return this.common.Type;
    }
    set Type(type: string) {
        this.common.Type = type;
    }
    get Ingoing(): number[] {
        return this.common.Ingoing;
    }
    set Ingoing(ingoing: number[]) {
        this.common.Ingoing = ingoing;
    }
    get Outgoing(): number[] {
        return this.common.Outgoing;
    }
    set Outgoing(outgoing: number[]) {
        this.common.Outgoing = outgoing;
    }
    setIngoingAtIndex = (ingoingId: number, index: number) => {
        this.common.setIngoingAtIndex(ingoingId, index);
    };
    setOutgoingAtIndex = (outgoingId: number, index: number) => {
        this.common.setOutgoingAtIndex(outgoingId, index); 
    };

    setIngoing = (ingoing: number) => {
        this.common.setIngoing(ingoing);
    }
    setOutgoing = (outgoing: number) => {
        this.common.setOutgoing(outgoing);
    }   

    get Position(): Coord2D {
        return this.coordinates.Position;
    }
    set Position(position: Coord2D) {
        this.coordinates.Position = position;
    }
    get Name(): string {
        return this.naming.Name;
    }
    set Name(name: string) {
        this.naming.Name = name;
    }
    
    get Avatar(): string {
        return this.pictures.Avatar;
    }
    set Avatar(avatar: string) {
        this.pictures.Avatar = avatar;
    }
    get Content(): RichContent {
        return this.dialog.Content;
    }
    set Content(content: RichContent){
        this.dialog.Content = content;
    }  
    get Html(): string/* HTMLElement */{
        return this.dialog.Html;
    }
    set Html(html: string/* HTMLElement */){
        this.dialog.Html = html;
    }   
    
}