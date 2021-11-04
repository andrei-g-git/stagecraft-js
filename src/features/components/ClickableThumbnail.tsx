import "./ClickableThumbnails.scss";

const classMap = {
    fill: "thumbnail-size-fill",
    test: "test-delete"
}

type PropType = {
    image: string, 
    handleClick: (event: React.MouseEvent) => void,
    size: "fill" | "test"
}
const ClickableThumbnail = ({
    image, 
    handleClick,
    size
} : PropType) => {
    return (
        <img className={`${classMap[size]}`}
            src={image}
            onClick={handleClick}
        >
        </img>
    )
}

export default ClickableThumbnail