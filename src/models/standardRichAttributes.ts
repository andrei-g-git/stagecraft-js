import { RichAttributes } from "./wysiwygModels";

export class StandardRichAttributes implements RichAttributes{
    // bold: boolean = false;
    // color: string = "";
    // italic: boolean = false;
    // link: string = "";
    // strike: boolean = false;
    // underline: boolean = false;
    // header: number = 3;
    // list: string = "";
    // indent: number = 1;

    constructor(
        public bold: boolean = false,
        public color: string = "",
        public italic: boolean = false,
        public link: string = "",
        public strike: boolean = false,
        public underline: boolean = false,
        public header: number = 3,
        public list: string = "",
        public indent: number = 1
    ){}
    
    get Bold(): boolean {
        throw new Error("Method not implemented.");
    }
    set Bold(bold: boolean) {
        throw new Error("Method not implemented.");
    }
    get Color(): string {
        throw new Error("Method not implemented.");
    }
    set Color(color: string) {
        throw new Error("Method not implemented.");
    }
    get Italic(): boolean {
        throw new Error("Method not implemented.");
    }
    set Italic(italic: boolean) {
        throw new Error("Method not implemented.");
    }
    get Link(): string {
        throw new Error("Method not implemented.");
    }
    set Link(link: string) {
        throw new Error("Method not implemented.");
    }
    get Strike(): boolean {
        throw new Error("Method not implemented.");
    }
    set Strike(strike: boolean) {
        throw new Error("Method not implemented.");
    }
    get Underline(): boolean {
        throw new Error("Method not implemented.");
    }
    set Underline(underline: boolean) {
        throw new Error("Method not implemented.");
    }
    get Header(): number {
        throw new Error("Method not implemented.");
    }
    set Header(header: number) {
        throw new Error("Method not implemented.");
    }
    get List(): string {
        throw new Error("Method not implemented.");
    }
    set List(list: string) {
        throw new Error("Method not implemented.");
    }
    get Indent(): number {
        throw new Error("Method not implemented.");
    }
    set Indent(indent: number) {
        throw new Error("Method not implemented.");
    }
    
}