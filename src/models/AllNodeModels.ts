import { Delta } from "@/components/Editor/quillTypes";
import { Common, Coordinates, Dialog, NodeModels } from "./nodeModels";
import { Coord2D } from "./vectors";
import {RichContent} from "./wysiwygModels";
import { literalToClass } from "./usage/dataConversion";
import { StandardRichContent } from "./StandardRichContent";

export class AllNodeModels implements NodeModels{
    constructor(public nodes: Common[]){}

    get Models(): Common[] {
        return this.nodes;
    }
    set Models(nodes: Common[]) {
        this.nodes = nodes;
    }
    get Length(): number {
        return this.Models.length;
    }

    addNode = (node: Common) =>{
        this.Models.push(node);
    }

    getHtml = (index: number) => {
        return (this.nodes[index] as unknown as Dialog).Html;
    }
    setHtml = (index: number, html: string) => {
        (this.nodes[index] as unknown as Dialog).Html = html;
    };    
    getId = (index: number) => {
        return (this.nodes[index] as unknown as Common).Id;
    }
    setId = (index: number, id: number) => {
        (this.nodes[index] as unknown as Common).Id = id;
    }
    setCoordinatesById = (id: number, x: number, y: number) => {
        ((this.nodes as unknown as Common[])
            .filter(node => node.Id === id)[0] as unknown as Coordinates)
            .Position = {x: x, y: y};
    };
    getCoordinatesByIndex = (index: number) => {
        //console.log("TTT", this.nodes[index])
        return (this.nodes[index] as unknown as Coordinates)
            .Position
    }
    setCoordinatesByIndex = (index: number, x: number, y: number) => {
        (this.nodes[index] as unknown as Coordinates)
            .Position = {x: x, y: y};
    }

    getAllCoordinates = () => {
        return (this.nodes as unknown as Coordinates[])
            .map(node => node.Position)
    }
    setHtmlById = (id: number, html: string) => {
        ((this.nodes as unknown as Common[])
            .filter(node => node.Id === id)[0] as unknown as Dialog)
            .Html = html;
    }
    setJsonById = (id: number, content: Delta) => {
        const literal = {content: content.ops};
        const conentInstance = literalToClass(literal, StandardRichContent);

        ((this.nodes as unknown as Common[])
            .filter(node => node.Id === id)[0] as unknown as Dialog)
            .Content = conentInstance;//{content: content.ops};      //i think this is because of the properties I set in the interface, I should try only giving it methods and let the class implementation
                                                //handle the properties i.e. constructor(public property: initialValue)
    }

    generateId = (/* self: NodeModels */) => { //I definitely need to test this...
        let id = Math.floor(Math.random() * 1000);
        //id = this.checkIdForDoublesAndUpdate(this, id); // stack overflow...
        return id;
    }

    private checkIdForDoublesAndUpdate = (self: NodeModels, id: number) => {
        const newId = Math.floor(Math.random() * 1000);
        const nodesMatchingGeneratedId = this.Models.filter(node => node.Id === id);

        let result = id;
        if(nodesMatchingGeneratedId.length){
            result = /* self */this.checkIdForDoublesAndUpdate(self, newId);
        }
        
        return result; 
    }

    
    addConnection = (outgoing: number, ingoing: number) => { //outgoing node whose connection is dragged is the ingoing node id to the target and vice versa
        console.log("############# from NODE model, outgoing, ingoing:   ", outgoing, "   ", ingoing);
        (this.nodes as unknown as Common[])
            .filter(node => node.Id === outgoing)[0]
            .setOutgoing(ingoing);

        (this.nodes as unknown as Common[])
            .filter(node => node.Id === ingoing)[0]
            .setIngoing(outgoing);            
    }

}