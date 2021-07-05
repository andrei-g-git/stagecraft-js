import { Coordinates } from "./nodeModels";
import { Coord2D } from "./vectors";

export class NodeCoordinates implements Coordinates{
    position: Coord2D = {
        x: 0, 
        y: 0
    };

    get Position(): Coord2D {
        return this.position;
    }
    set Position(position: Coord2D) {
        this.position = position;
    }
    
}