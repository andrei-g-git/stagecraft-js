import dialogIcon from "@/assets/dialog_bubble.png";
import scriptIcon from "@/assets/code_icon_raw.png";
import { DIALOG_NODE, SCRIPT_NODE } from "@/constants/toolbarItems";
import "./FlowToolbar.scss";

const ReactflowToolbar = () => {
      return (
        <aside className="flow-toolbar">
          <img className="add-node dialog-item" 
            onDragStart={(event: React.DragEvent) => onDragStart(event, DIALOG_NODE)} 
            draggable
            src={dialogIcon}
          />
          <img className="add-node script-item" 
            onDragStart={(event: React.DragEvent) => onDragStart(event, SCRIPT_NODE)} 
            draggable
            src={scriptIcon}
          />
        </aside>
      );
}

const onDragStart = (event: React.DragEvent, nodeType: number) => { //using numbers for name constants is not that great on second inspection...
    if(event.dataTransfer){
        event.dataTransfer.setData('application/reactflow', String(nodeType));
        event.dataTransfer.effectAllowed = 'move';        
    }

  };

export default ReactflowToolbar