import "./DividingContainer.scss";

const classMap = {
    top: "divider-border-top",
    right: "divider-border-right",
    bottom:  "divider-border-bottom",
    left:  "divider-border-left" 
}
type PropType = {
    border: "top" | "right" | "bottom" | "left",
    children: React.ReactNode
}

const DividingContainer = ({border, children}: PropType) => {
    return (
        <div className={`dividing-container ${classMap[border]}`}>
            {
                children
            }
        </div>
    )
}

export default DividingContainer;