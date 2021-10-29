import { COORDINATES_MODEL } from "@/constants/classes";
import { Coordinates, NestedModels } from "./nodeModels";
import { Coord2D } from "./vectors";

export class NodeCoordinates implements Coordinates, NestedModels{
    typeName: string = COORDINATES_MODEL;
    
    constructor(
        public position: Coord2D = {
            x: 0, 
            y: 0
        }
    ){}

    nest = () => {}
    
    get Position(): Coord2D {
        return this.position;
    }
    set Position(position: Coord2D) {
        this.position = position;
    }
    
}