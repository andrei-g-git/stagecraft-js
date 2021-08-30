//import { DialogNode } from "./DialogNode";
import { Delta } from "@/components/Editor/quillTypes";
import {Coord2D, Coord2DPair} from "./vectors";
import {RichContent} from "./wysiwygModels";

export type NamedValue = {
    name: "string",
    value: "string" | number | boolean | null
}

export type ScriptContent = {
    script: string,
    arguments: NamedValue[]
}

export type DialogContent = {
    preview: string,
    full: string,
    delta: Delta
}

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

export interface Script{
    get Script(): string;
    set Script(code: string);

    get Arguments(): NamedValue[];// string[];
    set Arguments(args: NamedValue[] /* string[] */);

    getArgument: (index: number) => NamedValue;// string;
    setArgument: (arg: NamedValue/* string */) => void;
    setArgumentAt: (index: number, arg: NamedValue/* string */) => void;

    removeScript: () => void;
    removeArgument: (index: number) => void;
}

export interface ScriptNode{
    common: Common;
    coordinates: Coordinates; //on closer insepction this would fit into common...
    script: Script;

}

export interface NodeModels{
    //[x: string]: any; //???? comes from 'quick fix' add index signature to whatever when trying to add a private method to the class...
    get Models(): Common[];
    set Models(models: Common[]);

    get Length(): number;

    getType: (index: number) => string;
    setType: (index: number, type: string) => void;

    getHtml: (index: number) => string;
    setHtml: (index: number, html: string) => void;

    getScript: (index: number) => string;
    setScript: (index: number, script: string) => void;

    getArguments: (index: number) => NamedValue[];//string[]; // ARGUMENTS SHOULD HAVE NAMES --- {name: string, value: any} --- type should be preserved to render in different colors
    setArguments: (index: number, args: NamedValue[]/* string[] */) => void;

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
