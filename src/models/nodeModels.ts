//import { DialogNode } from "./DialogNode";
import { Delta } from "@/components/Editor/quillTypes";
import {Coord2D, Coord2DPair} from "./vectors";
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
    // setIngoing: {  fuck this there's basically no overloading in ts, don't even try, it's bullshit
    //     (ingoing: number): void;
    //     (ingoing: number, index: number): void;
    // }  //THGESE NEED GETTERS TOO
    // setOutgoing: {
    //     (outgoing: number): void;
    //     (outgoing: number, index: number): void;
    // }
    setIngoingAtIndex: (ingoing: number, index: number) => void;
    setIngoing: (ingoing: number) => void;

    setOutgoingAtIndex: (outgoing: number, index: number) => void;
    setOutgoing: (outgoing: number) => void;
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
    //[x: string]: any; //???? comes from 'quick fix' add index signature to whatever when trying to add a private method to the class...
    get Models(): Common[];
    set Models(models: Common[]);

    get Length(): number;

    getHtml: (index: number) => string;
    setHtml: (index: number, html: string) => void;

    getId: (index: number) => number;
    setId: (index: number, id: number) => void;

    setHtmlById: (id: number, html: string) => void;

    setJsonById: (id: number, json: Delta) => void;

    setCoordinatesById: (id: number, x: number, y: number) => void;

    getCoordinatesByIndex: (index: number) => Coord2D;
    setCoordinatesByIndex: (index: number, x: number, y: number) => void;

    getAllCoordinates: () => Coord2D[];

    getConnectionPairs: () => Coord2DPair[];

    addNode: (node: Common) => void;

    generateId: (/* self: NodeModels */) => number;
    //checkIdForDoublesAndUpdate: (self: NodeModels, id: number) => number;

    addConnection: (outgoing: number, ingoing: number) => void;
}
