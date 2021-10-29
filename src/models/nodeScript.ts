import { SCRIPT_MODEL } from "@/constants/classes";
import { NamedValue, Script/* , NestedModels */ } from "./nodeModels";
import {NestedModels} from "@/models";

export class NodeScript implements Script, NestedModels{
    typeName: string = SCRIPT_MODEL;

    constructor(private script: string = "", private _arguments: NamedValue[] /* string[] */ = []){} //wait should these be public? kind of deals away with encapsulation...

    nest = () => {}

    get Script(): string {
        return this.script;
    }
    set Script(code: string) {
        this.script = code;
    }
    get Arguments(): NamedValue[]/* string[] */ {
        return this._arguments;
    }
    set Arguments(args: NamedValue[] /* string[] */) {
        this._arguments = args;
    }

    getArgument = (index: number) => {
        return this._arguments[index];
    }
    setArgument = (arg: NamedValue /* string */) => { // ARGUMENTS SHOULD HAVE NAMES --- {name: string, value: any} --- type should be preserved to render in different colors
        if(this.script.length){
            this._arguments.push(arg);
        }else{
            console.log("Define a script first!");
        }
        
    }
    setArgumentAt = (index: number, arg: NamedValue /* string */) => {
        if(this.script.length){
            this._arguments[index] = arg;
        }else{
            console.log("Define a script first!");
        }
    }

    removeScript = () => {
        this.script = "";
        this._arguments = [];
    }
    removeArgument = (index: number) => {
        this._arguments.splice(index, 1);
    }
}