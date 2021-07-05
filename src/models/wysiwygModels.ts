export type ImageBlob = {
    image: string;
}

export interface RichAttributes{
    bold: boolean;
    color: string;
    italic: boolean;
    link: string;
    strike: boolean;
    underline: boolean;
    header: number;
    list: string;
    indent: number;

    get Bold(): boolean;
    get Color(): string;
    get Italic(): boolean;
    get Link(): string;
    get Strike(): boolean;
    get Underline(): boolean;
    get Header(): number;
    get List(): string;
    get Indent(): number;    

    set Bold(bold: boolean);
    set Color(color: string);
    set Italic(italic: boolean);
    set Link(link: string);
    set Strike(strike: boolean);
    set Underline(underline: boolean);
    set Header(header: number);
    set List(list: string);
    set Indent(indent: number);      
}

export interface RichElement{
    insert: string | ImageBlob;
    attributes: RichAttributes;

    get Insert(): string | ImageBlob;
    get Attributes(): RichAttributes;

    set Insert(insert: string | ImageBlob);
    set Attributes(attributes: RichAttributes);    
}

export interface RichContent{
    content: RichElement[];

    get Content(): RichElement[];
    set Content(content: RichElement[]);
}