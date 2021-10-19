//import { DialogNode } from "./DialogNode";
import { Delta } from "@/features/Editor/types";
import {Coord2D, Coord2DPair} from "./vectors";
import {RichContent} from "./wysiwygModels";

export type NamedValue = {
    name: string,
    value: string | number | boolean | null
}

export type ContentVersions = {
    html: string,
    json: RichContent//Delta
}
export type ScriptContent = { //SHOULD NOT BE HERE
    script: string,
    arguments: NamedValue[]
}

export type DialogContent = {
    preview: {
        html: string,
        json: Delta
    },
    full: {
        html: string,
        json: Delta
    }
}                      // SHOULD NOT BE HERE
export type TitleContent = {
    html: string,
    json: Delta
}                      // SHOULD NOT BE HERE


export interface Common{

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

    setIngoingAtIndex: (ingoing: number, index: number) => void;
    setIngoing: (ingoing: number) => void;

    setOutgoingAtIndex: (outgoing: number, index: number) => void;
    setOutgoing: (outgoing: number) => void;
}

export interface Coordinates{
    get Position(): Coord2D;
    set Position(position: Coord2D);
}

export interface Pictures{
    get Avatar(): string;
    set Avatar(avatar: string);   
}

export interface Named{
    get Name(): string;
    set Name(name: string);
}

export interface Dialog{

    // get Content(): RichContent;
    // set Content(content: RichContent);    

    // get Html(): string; 
    // set Html(html: string);

    get Preview(): ContentVersions;
    set Preview(preview: ContentVersions);

    get PreviewHtml(): string;
    set PreviewHtml(html: string);

    get PreviewJson(): RichContent;
    set PreviewJson(json: RichContent);

    get Full(): ContentVersions;
    set Full(full: ContentVersions);

    get FullHtml(): string;
    set FullHtml(html: string);

    get FullJson(): RichContent;
    set FullJson(json: RichContent);
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

    get Arguments(): NamedValue[];
    set Arguments(args: NamedValue[] );

    getArgument: (index: number) => NamedValue;
    setArgument: (arg: NamedValue) => void;
    setArgumentAt: (index: number, arg: NamedValue) => void;

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

    getTitle: (index: number) => string;
    setTitle: (title: string, index: number) => void;

    getTitleById: (id: number) => string;
    setTitleById: (title: string, id: number) => void;

    // getTitleJsonById: (id: number) => RichContent;
    // setTitleJsonById: (title: RichContent, id: number) => void;

    // getHtml: (index: number) => string;
    // setHtml: (index: number, html: string) => void;

    getPreviewHtml: (index: number) => string;
    setPreviewHtml: (index: number, html: string) => void;

    getPreviewJson: (index: number) => RichContent;
    setPreviewJson: (index: number, json: RichContent) => void;    

    getFullHtml: (index: number) => string;
    setFullHtml: (index: number, html: string) => void;

    getFullJson: (index: number) => RichContent;
    setFullJson: (index: number, json: RichContent) => void;  

    //getPreviewHtmlById: (index: number) => string;
    setPreviewHtmlById: (id: number, html: string) => void;

    //getPreviewJsonById: (index: number) => Delta;
    setPreviewJsonById: (id: number, json: RichContent) => void;  

    setFullHtmlById: (id: number, html: string) => void;
    setFullJsonById: (id: number, json: RichContent) => void;     

    getScript: (index: number) => string;
    setScript: (index: number, script: string) => void;

    getArguments: (index: number) => NamedValue[];
    setArguments: (index: number, args: NamedValue[]) => void;

    getScriptById: (id: number) => string;
    setScriptById: (id: number, script: string) => void;
    getArgumentsById: (id: number) => NamedValue[];
    setArgumentsById: (id: number, args: NamedValue[] ) => void;

    getId: (index: number) => number;
    setId: (index: number, id: number) => void;

    // setHtmlById: (id: number, html: string) => void;

    // setJsonById: (id: number, json: Delta) => void;

    setCoordinatesById: (id: number, x: number, y: number) => void;

    getCoordinatesByIndex: (index: number) => Coord2D;
    setCoordinatesByIndex: (index: number, x: number, y: number) => void;

    getAllCoordinates: () => Coord2D[];

    getConnectionPairs: () => Coord2DPair[];

    addNode: (node: Common) => void;

    generateId: () => number;

    addConnection: (outgoing: number, ingoing: number) => void;

    getJson: () => string;

    getOnlyJsonContent: () => string;
}
