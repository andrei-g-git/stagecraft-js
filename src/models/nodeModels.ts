//import { DialogNode } from "./DialogNode";
import {Coord2D} from "./vectors";
import {RichContent} from "./wysiwygModels";

export interface Common{
    // id: number;
    // title: string;
    // type: string;
    // ingoing: number[];
    // outgoing: number[];

    get Id(): number;
    get Title(): string;
    get Type(): string;
    get Ingoing(): number[];
    get Outgoing(): number[];

    set Id(id: number); 
    set Title(title: string); 
    set Type(type: string); 
    set Ingoing(ingoing: number[]); 
    set Outgoing(outgoing: number[]); 
    setIngoing: (ingoing: number, index: number) => void;
    setOutgoing: (outgoing: number, index: number) => void;
}

export interface Coordinates{
    //position: Coord2D;
    get Position(): Coord2D;
    set Position(position: Coord2D);
}

export interface Pictures{
    //avatar: string;
    get Avatar(): string;
    set Avatar(avatar: string);   
}

export interface Named{
    //name: string;
    get Name(): string;
    set Name(name: string);
}
export interface Dialog{
    //content: RichContent;

    get Content(): RichContent;
    set Content(content: RichContent);    

    get Html(): string; //HTMLElement;
    set Html(html: string/* HTMLElement */);
}

export interface DialogNode{
    common: Common;
    coordinates: Coordinates;
    naming: Named;
    pictures: Pictures;
    dialog: Dialog
}

export interface NodeModels{
    get Models(): Common[];
    set Models(models: Common[]);

    getHtml: (index: number) => string;
    setHtml: (index: number, html: string) => void;
}
