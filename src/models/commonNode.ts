import { Common } from "./nodeModels";

export class CommonNode implements Common{

    // id: number = 0;
    // title: string = "";
    // type: string = "";
    // ingoing: number[] = [];
    // outgoing: number[] = [];
    constructor(
        public id: number = 0,
        public title: string = "",
        public type: string = "",
        public ingoing: number[] = [],
        public outgoing: number[] = []
    ){}

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
    setIngoing = (ingoing: number, index: number) => {
        this.ingoing[index] = ingoing;
    }
    setOutgoing = (outgoing: number, index: number) => {
        this.outgoing[index] = outgoing;
    }
}