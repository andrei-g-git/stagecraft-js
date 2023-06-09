import { SCRIPT_NODE_MODEL, nodeModelClasses } from "@/constants/classes";
import { Common, Coordinates, NamedValue, Script, ScriptNode /* , NestedModels */ } from "./nodeModels";
import {NestedModels} from "@/models";
import { Coord2D } from "./vectors";
import { literalToClass } from "./usage/dataConversion";

export class BasicScriptNode implements ScriptNode, Common, Coordinates, Script, NestedModels{
    typeName: string = SCRIPT_NODE_MODEL;

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

    get Arguments(): NamedValue[] /* string[] */{
        return this.script.Arguments;
    }
    set Arguments(args: NamedValue[] /* string[] */){
        this.script.Arguments = args;
    }

    getArgument = (index: number) => {
        return this.script.getArgument(index);
    }
    setArgument = (arg: NamedValue /* string */) => { // ARGUMENTS SHOULD HAVE NAMES --- {name: string, value: any} --- type should be preserved to render in different colors
        this.script.setArgument(arg);
    }
    setArgumentAt = (index: number, arg: NamedValue /* string */) => {
        this.script.setArgumentAt(index, arg);
    }

    removeScript = () => {
        this.script.removeScript();
    }
    removeArgument = (index: number) => {
        this.script.removeArgument(index);
    }   

    
    nest = () => {
        this.common = literalToClass(this.common, nodeModelClasses[(this.common as unknown as NestedModels).typeName]) as Common;
        this.coordinates = literalToClass(this.coordinates, nodeModelClasses[(this.coordinates as unknown as NestedModels).typeName]) as Coordinates;
        this.script = literalToClass(this.script, nodeModelClasses[(this.script as unknown as NestedModels).typeName]) as Script; 
    }

    static create = (literal: {
        common: any,
        coordinates: any,
        script: any
    }) => {
        return new BasicScriptNode(
            literal.common,
            literal.coordinates,
            literal.script
        );
    }
}