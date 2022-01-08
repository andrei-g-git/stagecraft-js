import { Delta } from "@/features/Editor/types";
import { Common, Coordinates, Dialog, Instantiable, Named, NamedValue, /* NestedModels, */ NodeModels, Pictures, Script } from "./nodeModels";
import { Coord2DPair } from "./vectors";
import {RichContent} from "./wysiwygModels";
import { DIALOG, SCRIPT } from "./typeOfNodes";
import { BasicDialogNode } from "./dialogNode";
import { BasicScriptNode } from "./scriptNode";
import { iterateNestedObjects, retrieveNestedValue, } from "@/utils/objects";
import { ALL_NODES_MODEL, nodeModelClasses } from "@/constants/classes";
import { literalToClass } from "./usage/dataConversion";
import { NestedModels } from "@/models";
import { DIALOG_NODE, SCRIPT_NODE } from "@/constants/toolbarItems";

export class AllNodeModels implements NodeModels, NestedModels/* , StaticImplements<InstantiableStatic, typeof AllNodeModels> */{
//export const AllNodeModels: NodeModels & Instantiable = class {

    //literal: any;
    typeName: string;
    
    constructor(public nodes: Common[]){
        //this.literal = null;
        this.typeName = ALL_NODES_MODEL; //"all-nodes";
    }

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

    getTitle = (index: number) => {
        return (this.Models[index]).Title;
    }
    setTitle = (title: string, index: number) => {
        (this.Models[index]).Title = title;
    }

    getTitleById = (id: number) => {
        console.log("GETTING TITLE FOR NODE WITH ID     ", id)
        return ((this.nodes)
            .filter(node => node.Id === id)[0])
            .Title;        
    }
    setTitleById = (title: string, id: number) => {
        ((this.nodes)
        .filter(node => node.Id === id)[0])
        .Title = title;
    }

    // getTitleJsonById = (id: number) => RichContent;
    // setTitleJsonById = (title: RichContent, id: number) => {
    //     /* (( */this.nodes/*  as unknown as Common[]) */
    //     .filter(node => node.Id === id)[0] //as unknown as Dialog)
    //     .Title = title;
    // }

    // getHtml = (index: number) => {
    //     return (this.nodes[index] as unknown as Dialog).Html;
    // }
    // setHtml = (index: number, html: string) => {
    //     (this.nodes[index] as unknown as Dialog).Html = html;
    // };


    getName = (index: number) => {
        return (this.nodes[index] as unknown as Named).Name;
    }
    setName = (index: number, name: string) => {
        (this.nodes[index] as unknown as Named).Name = name;
    }
    getNameById = (id: number) => {
        return (((this.nodes)
        .filter(node => node.Id === id)[0]) as unknown as Named)
        .Name;       
    }
    setNameById = (name: string, id: number) => {
        (((this.nodes)
        .filter(node => node.Id === id)[0]) as unknown as Named)
        .Name = name;
    }

    getAvatarById = (id: number) => {
        return (((this.nodes)
        .filter(node => node.Id === id)[0]) as unknown as Pictures)
        .Avatar; 
    }
    setAvatarById = (id: number, fileName: string) => {
        (((this.nodes)
        .filter(node => node.Id === id)[0]) as unknown as Pictures)
        .Avatar = fileName;
    }

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
    getArguments = (index: number) => { 
        return (this.nodes[index] as unknown as Script).Arguments;
    }
    setArguments = (index: number, args: NamedValue[] ) => {
        (this.nodes[index] as unknown as Script).Arguments = args;
    }  
//
    getScriptById = (id: number) => {
        return ((this.nodes as unknown as Common[])
            .filter(node => node.Id === id)[0] as unknown as Script)
            .Script
    }
    setScriptById = (id: number, script: string) => {
        ((this.nodes as unknown as Common[])
            .filter(node => node.Id === id)[0] as unknown as Script)
            .Script = script;
    }
    getArgumentsById = (id: number) => { 
        return ((this.nodes as unknown as Common[])
            .filter(node => node.Id === id)[0] as unknown as Script)
            .Arguments
    }
    setArgumentsById = (id: number, args: NamedValue[] ) => {
        ((this.nodes as unknown as Common[])
            .filter(node => node.Id === id)[0] as unknown as Script)
            .Arguments = args;
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
        const coordinatePairs: Coord2DPair[] = [];
        this.nodes.forEach(node => {
            node.Outgoing.forEach(outgoingId => {
                const outgoingNode = this.nodes.filter(node => node.Id === outgoingId)[0];
                coordinatePairs.push({
                    x1: (node as unknown as Coordinates).Position.x,
                    y1: (node as unknown as Coordinates).Position.y,
                    x2: (outgoingNode as unknown as Coordinates).Position.x,
                    y2: (outgoingNode as unknown as Coordinates).Position.y,
                })
            });
        });
        return coordinatePairs.filter((pair, index) => index === coordinatePairs.indexOf(pair));
    }

    // setHtmlById = (id: number, html: string) => {
    //     ((this.nodes as unknown as Common[])
    //         .filter(node => node.Id === id)[0] as unknown as Dialog)
    //         .Html = html;
    // }
    // setJsonById = (id: number, content: Delta) => { // NO DELTA!!!
    //     const literal = {content: content.ops};
    //     const conentInstance = literalToClass(literal, StandardRichContent);

    //     ((this.nodes as unknown as Common[])
    //         .filter(node => node.Id === id)[0] as unknown as Dialog)
    //         .Content = conentInstance;
    // }


    setPreviewHtmlById = (id: number, html: string) => {
        ((this.nodes as unknown as Common[])
            .filter(node => node.Id === id)[0] as unknown as Dialog)
            .PreviewHtml = html;       
    }
    setPreviewJsonById = (id: number, json: RichContent) => {

        ((this.nodes as unknown as Common[])
            .filter(node => node.Id === id)[0] as unknown as Dialog)
            .PreviewJson = json 
    }
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

    generateId = () => { 
        let id = Math.floor(Math.random() * 1000);
        return id;
    }

    static generateId = () => { 
        let id = Math.floor(Math.random() * 1000);
        return id;
    }

    private checkIdForDoublesAndUpdate = (self: NodeModels, id: number) => {
        const newId = Math.floor(Math.random() * 1000);
        const nodesMatchingGeneratedId = this.Models.filter(node => node.Id === id);

        let result = id;
        if(nodesMatchingGeneratedId.length){
            result = this.checkIdForDoublesAndUpdate(self, newId);
        }
        
        return result; 
    }

    addConnection = (outgoing: number, ingoing: number) => { //outgoing node whose connection is dragged is the ingoing node id to the target and vice versa
        (this.nodes as unknown as Common[])
            .filter(node => node.Id === outgoing)[0]
            .setOutgoing(ingoing);

        (this.nodes as unknown as Common[])
            .filter(node => node.Id === ingoing)[0]
            .setIngoing(outgoing);            
    }

    
    getJson = () => {
        return JSON.stringify(this.Models);
    }

    getOnlyJsonContent = () => {
        const exportNodes =  this.Models.map((model: Common, index: number) => {
            switch(model.Type){
                case DIALOG:
                    const dialogNode = model as BasicDialogNode;
                    return{
                        ...dialogNode.common,
                        ...dialogNode.naming,
                        dialog: {
                            preview: retrieveNestedValue(dialogNode.dialog, "preview"),
                            full: retrieveNestedValue(dialogNode.dialog, "full")
                        }
                    }
                case SCRIPT:
                    const scriptNode = model as BasicScriptNode;
                    return{
                        ...scriptNode.common,
                        // script: {
                        //     script: retrieveNestedValue(scriptNode, "script"),  //retrieves first instance of 'script' which has a 'script' prop itself -- should rename 'script' to 'name'
                        //     arguments: retrieveNestedValue(scriptNode, "_arguments")
                        // }
                        ...scriptNode.script
                    }
                default: return "Sorry, nothing..."
            }

        })

        return JSON.stringify(exportNodes)
    }

    nest = () => {
        this.nodes = this.nodes.map((node: Common, index: number) => {
             /* const classInstance = */ return literalToClass(node, nodeModelClasses[(node as unknown as NestedModels).typeName]) as Common; 

             //return classInstance;
        })
        //console.log("THIS:   ",this)
    }
    


    static createNested = (objectLiteral: any[]) => {
        const allNodeModels = literalToClass({nodes: objectLiteral}, AllNodeModels);

        iterateNestedObjects(
            {topModel: allNodeModels}, 
            //allNodeModels,
            (branch: any) => {
                
                if(Object.hasOwn(branch, "typeName")){
                    // console.log("BRANCH is:   ", branch)
                    // console.log("typeName:   ", branch["typeName"])
                    branch.nest();
                }
        })

        return allNodeModels;

    }

    static create = (objectLiteral: any[]) => { //this isn't an interface method...
        return new AllNodeModels(objectLiteral)
    }

    getNewestNode = () => {
        //return this.nodes.slice(-1)[0];
        if(this.nodes.length)
            return this.nodes[this.nodes.length - 1];
    }

    setUpNode = (blank: Common, x: number, y: number) => {
        const stringTypes = [
            {enum: DIALOG_NODE, str: DIALOG},
            {enum: SCRIPT_NODE, str: SCRIPT}
        ]

        this.addNode(blank);
        const index = this.nodes.length - 1;
        this.setId(index, this.generateId());
        this.setTitle("Click to change title", index);
        this.setCoordinatesByIndex(index, x, y);   
        //this.setType(index, stringTypes.filter(pair => pair.enum === selected)[0].str); //well this is shit    
        const newNode =  this.getNewestNode();        
        if(newNode) return newNode;
    }
}