import { useCallback } from "react";

export const useDragOver = () => {
    return useCallback(
        (event: React.DragEvent) => {
            event.preventDefault();
            event.dataTransfer && (event.dataTransfer.dropEffect = "move");
        },
        []
    )    
}



