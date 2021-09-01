import { Delta } from "@/components/Editor/quillTypes";
import { Common, Coordinates, Dialog, NamedValue, NodeModels, Script } from "./nodeModels";
import { Coord2D, Coord2DPair } from "./vectors";
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

    getType = (index: number) => {
        return this.Models[index].Type;
    }
    setType = (index: number, type: string) => {
        this.Models[index].Type = type;
    }

    getHtml = (index: number) => {
        return (this.nodes[index] as unknown as Dialog).Html;
    }
    setHtml = (index: number, html: string) => {
        (this.nodes[index] as unknown as Dialog).Html = html;
    };

    getPreviewHtml = (index: number) => {
        return (this.nodes[index] as unknown as Dialog).PreviewHtml;
    }
    setPreviewHtml = (index: number, html: string) => {
        (this.nodes[index] as unknown as Dialog).PreviewHtml = html;
    }
    getPreviewJson = (index: number) => {
        return (this.nodes[index] as unknown as Dialog).PreviewJson;
    }
    setPreviewJson = (index: number, json: RichContent) => {
        (this.nodes[index] as unknown as Dialog).PreviewJson = json;
    }
//
    getFullHtml = (index: number) => {
        return (this.nodes[index] as unknown as Dialog).FullHtml;
    }
    setFullHtml = (index: number, html: string) => {
        (this.nodes[index] as unknown as Dialog).FullHtml = html;
    }
    getFullJson = (index: number) => {
        return (this.nodes[index] as unknown as Dialog).FullJson;
    }
    setFullJson = (index: number, json: RichContent) => {
        (this.nodes[index] as unknown as Dialog).FullJson = json;
    }
//    
    getScript = (index: number) => {
        return (this.nodes[index] as unknown as Script).Script;
    }
    setScript = (index: number, script: string) => {
        (this.nodes[index] as unknown as Script).Script = script;
    }
    getArguments = (index: number) => { // ARGUMENTS SHOULD HAVE NAMES --- {name: string, value: any} --- type should be preserved to render in different colors
        return (this.nodes[index] as unknown as Script).Arguments;
    }
    setArguments = (index: number, args: NamedValue[] /* string[] */) => {
        (this.nodes[index] as unknown as Script).Arguments = args;
    }  

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

    getConnectionPairs = () => {
        //const idPairs: {in: number, out: number}[] = [];
        const coordinatePairs: Coord2DPair[] = [];
        this.nodes.forEach(node => {
            node.Outgoing.forEach(outgoingId => {
                //idPairs.push({in: node.Id, out: outgoingId});
                const outgoingNode = this.nodes.filter(node => node.Id === outgoingId)[0];
                coordinatePairs.push({
                    x1: (node as unknown as Coordinates).Position.x,
                    y1: (node as unknown as Coordinates).Position.y,
                    x2: (outgoingNode as unknown as Coordinates).Position.x,
                    y2: (outgoingNode as unknown as Coordinates).Position.y,
                })
            });
        });
        // return idPairs.filter((item, index) => index === idPairs.indexOf(item)) //indexOf returns only the first index maching that value, filtering in uniques
        //     .map(idPair => {x1: })
        return coordinatePairs.filter((pair, index) => index === coordinatePairs.indexOf(pair));
    }

    setHtmlById = (id: number, html: string) => {
        ((this.nodes as unknown as Common[])
            .filter(node => node.Id === id)[0] as unknown as Dialog)
            .Html = html;
    }
    setJsonById = (id: number, content: Delta) => { // NO DELTA!!!
        const literal = {content: content.ops};
        const conentInstance = literalToClass(literal, StandardRichContent);

        ((this.nodes as unknown as Common[])
            .filter(node => node.Id === id)[0] as unknown as Dialog)
            .Content = conentInstance;//{content: content.ops};      //i think this is because of the properties I set in the interface, I should try only giving it methods and let the class implementation
                                                //handle the properties i.e. constructor(public property: initialValue)
    }


    setPreviewHtmlById = (id: number, html: string) => {
        ((this.nodes as unknown as Common[])
            .filter(node => node.Id === id)[0] as unknown as Dialog)
            .PreviewHtml = html;       
    }
    setPreviewJsonById = (id: number, json: RichContent) => {
        // const literal = {content: json.Content};
        // const conentInstance = literalToClass(literal, StandardRichContent);

        ((this.nodes as unknown as Common[])
            .filter(node => node.Id === id)[0] as unknown as Dialog)
            .PreviewJson = json // --- not actual json, it's a RichContent instance ... //conentInstance;      wefwafawefawef  //<<<<<<<  
    }
//
    setFullHtmlById = (id: number, html: string) => {
        ((this.nodes as unknown as Common[])
            .filter(node => node.Id === id)[0] as unknown as Dialog)
            .FullHtml = html;       
    }
    setFullJsonById = (id: number, json: RichContent) => {
        ((this.nodes as unknown as Common[])
            .filter(node => node.Id === id)[0] as unknown as Dialog)
            .FullJson = json;
    }
//
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