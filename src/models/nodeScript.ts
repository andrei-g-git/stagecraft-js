import { Script} from "./nodeModels";

export class NodeScript implements Script{

    constructor(private script: string = "", private _arguments: string[] = []){} //wait should these be public? kind of deals away with encapsulation...

    get Script(): string {
        return this.script;
    }
    set Script(code: string) {
        this.script = code;
    }
    get Arguments(): string[] {
        return this._arguments;
    }
    set Arguments(args: string[]) {
        this._arguments = args;
    }

    getArgument = (index: number) => {
        return this._arguments[index];
    }
    setArgument = (arg: string) => {
        if(this.script.length){
            this._arguments.push(arg);
        }else{
            console.log("Define a script first!");
        }
        
    }
    setArgumentAt = (index: number, arg: string) => {
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