import { Delta } from "@/components/Editor/quillTypes";
import { Common, Coordinates, Dialog, NodeModels } from "./nodeModels";
import { Coord2D } from "./vectors";
import {RichContent} from "./wysiwygModels";

export class AllNodeModels implements NodeModels{
    constructor(public nodes: Common[]){}

    get Models(): Common[] {
        return this.nodes;
    }
    set Models(nodes: Common[]) {
        this.nodes = nodes;
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
        ((this.nodes as unknown as Common[])
            .filter(node => node.Id === id)[0] as unknown as Dialog)
            .Content = content.ops;      //i think this is because of the properties I set in the interface, I should try only giving it methods and let the class implementation
                                                //handle the properties i.e. constructor(public property: initialValue)
    }

}