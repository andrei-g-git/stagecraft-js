import { Common, Coordinates, Script, ScriptNode } from "./nodeModels";
import { Coord2D } from "./vectors";

export class BasicScriptNode implements ScriptNode, Common, Coordinates, Script{
    constructor(
        public common: Common, //these shouldn't be public...
        public coordinates: Coordinates,
        public script: Script
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
    setIngoingAtIndex = (ingoingId: number, index: number) => {
        this.common.setIngoingAtIndex(ingoingId, index);
    };
    setOutgoingAtIndex = (outgoingId: number, index: number) => {
        this.common.setOutgoingAtIndex(outgoingId, index); 
    };

    setIngoing = (ingoing: number) => {
        this.common.setIngoing(ingoing);
    }
    setOutgoing = (outgoing: number) => {
        this.common.setOutgoing(outgoing);
    }   

    get Position(): Coord2D {
        return this.coordinates.Position;
    }
    set Position(position: Coord2D) {
        this.coordinates.Position = position;
    }    

    get Script(): string{
        return this.script.Script;
    }
    set Script(code: string){
        this.script.Script = code;
    }

    get Arguments(): string[]{
        return this.script.Arguments;
    }
    set Arguments(args: string[]){
        this.script.Arguments = args;
    }

    getArgument = (index: number) => {
        return this.script.getArgument(index);
    }
    setArgument = (arg: string) => {
        this.script.setArgument(arg);
    }
    setArgumentAt = (index: number, arg: string) => {
        this.script.setArgumentAt(index, arg);
    }

    removeScript = () => {
        this.script.removeScript();
    }
    removeArgument = (index: number) => {
        this.script.removeArgument(index);
    }   
}