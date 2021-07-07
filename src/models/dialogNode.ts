import { CommonNode } from "./commonNode";
import { NodeCoordinates } from "./nodeCoordinates";
import { Common, Coordinates, Dialog, DialogNode, Named, Pictures } from "./nodeModels";
import { NodeNames } from "./nodeNames";
import { NodePictures } from "./nodePictures";
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
    setIngoing = (ingoingId: number, index: number) => {
        this.common.setIngoing(ingoingId, index);
    };
    setOutgoing = (outgoingId: number, index: number) => {
        this.common.setOutgoing(outgoingId, index); 
    };
    
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
    get Html(): HTMLElement{
        return this.dialog.Html;
    }
    set Html(html: HTMLElement){
        this.dialog.Html = html;
    }   
    
}