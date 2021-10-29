import { COMMON_NODE_MODEL } from "@/constants/classes";
import { Common, NestedModels } from "./nodeModels";

export class CommonNode implements Common, NestedModels{
    typeName: string = COMMON_NODE_MODEL;

    constructor(
        public id: number = 0,
        public title: string = "",
        public type: string = "",
        public ingoing: number[] = [],
        public outgoing: number[] = []
    ){}

    nest = () => {
        //this.common = literalToClass(this.common, nodeModelClasses[(this.common as unknown as NestedModels).typeName]) as Common;
    }

    get Id(): number {
        return this.id;        
    }
    set Id(id: number) {
        this.id = id;
    }
    get Title(): string {
        return this.title;
    }
    set Title(title: string) {
        this.title = title;
    }
    get Type(): string {
        return this.type;
    }
    set Type(type: string) {
        this.type = type;
    }
    get Ingoing(): number[] {
        return this.ingoing;
    }
    set Ingoing(ingoing: number[]) {
        this.ingoing = ingoing;
    }
    get Outgoing(): number[] {
        return this.outgoing;
    }
    set Outgoing(outgoing: number[]) {
        this.outgoing = outgoing;
    }
    setIngoingAtIndex = (ingoing: number, index: number) => {
        this.ingoing[index] = ingoing;
    }
    setIngoing = (ingoing: number) => {
        this.ingoing.push(ingoing)
    }

    setOutgoingAtIndex = (outgoing: number, index: number) => {
        this.outgoing[index] = outgoing;
    }
    setOutgoing = (outgoing: number) => {
        this.outgoing.push(outgoing);
    }
}