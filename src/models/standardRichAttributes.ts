import { RICH_ATTRIBUTES_MODEL } from "@/constants/classes";
import { RichAttributes } from "./wysiwygModels";
//import {NestedModels} from "@/models";
export class StandardRichAttributes implements RichAttributes/* , NestedModels */{
    //typeName: string = RICH_ATTRIBUTES_MODEL;

    constructor(
        public bold: boolean = false, //should these be public?
        public color: string = "",
        public italic: boolean = false,
        public link: string = "",
        public strike: boolean = false,
        public underline: boolean = false,
        public header: number = 3,
        public list: string = "",
        public indent: number = 1
    ){}

    // nest = () => {
    //     //leaf class, don't need this
    // }
    
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