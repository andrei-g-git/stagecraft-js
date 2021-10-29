import { AllNodeModels } from "@/models/AllNodeModels";
import { CommonNode } from "@/models/commonNode";
import { BasicDialogNode } from "@/models/dialogNode";
import { BasicScriptNode } from "@/models/scriptNode";
import { NodeCoordinates } from "@/models/nodeCoordinates";
import { NodeNames } from "@/models/nodeNames";
import { NodePictures } from "@/models/nodePictures";
import { NodeDialog } from "@/models/nodeDialog";
import { NodeScript } from "@/models/nodeScript";

export const ALL_NODES_MODEL = "allNodes";
export const DIALOG_NODE_MODEL = "dialogNode";
export const SCRIPT_NODE_MODEL = "scriptNode";
export const COMMON_NODE_MODEL = "common";
export const COORDINATES_MODEL = "coordinates";
export const NAMING_MODEL = "naming";
export const PICTURES_MODEL = "pictures";
export const DIALOG_MODEL = "dialog";
export const SCRIPT_MODEL = "script";

export const nodeModelClasses: {[key: string]: any} = { //should probably do nodeModelClasses[ALL_NODES_MODEL] = AllNodeModels instead of this
    //allNodes: AllNodeModels, //`cannot access AllNodeModels before initialization` --- but if I leave the other classes it's fine...
    //nodes: BasicDialogNode[] | BasicScriptNode[],
    dialogNode: BasicDialogNode,
    scriptNode: BasicScriptNode,
    common: CommonNode,
    coordinates: NodeCoordinates,
    naming: NodeNames,
    pictures: NodePictures,
    dialog: NodeDialog,
    script: NodeScript

}

//console.log(nodeModelClasses)