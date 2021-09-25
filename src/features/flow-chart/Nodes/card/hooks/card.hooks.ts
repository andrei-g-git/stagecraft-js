import { useEffect } from "react"

export const useTitleEditor = (props: any) => {
    useEffect(() => {
        props.selectNode(props.id);
        props.toggleEditor(true);
    }, 
        []
    )
}