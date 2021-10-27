import { AllNodeModels } from "@/models/AllNodeModels";
import { BasicDialogNode } from "@/models/dialogNode";
import { BasicScriptNode } from "@/models/scriptNode";

export const ALL_NODES_MODEL = "allNodes";
export const DIALOG_NODE_MODEL = "dialogNode";
export const SCRIPT_NODE_MODEL = "scriptNode";

export const nodeModelClasses = { //should probably do nodeModelClasses[ALL_NODES_MODEL] = AllNodeModels instead of this
    allNodes: AllNodeModels, //`cannot access AllNodeModels before initialization` --- but if I leave the other classes it's fine...
    dialogNode: BasicDialogNode,
    scriptNode: BasicScriptNode
}

//console.log(nodeModelClasses)