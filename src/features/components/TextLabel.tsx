import "./TextLabel.scss";

const TextLabel = (props: {content: string}) => {
    return (
        <div className="text-label">
            {
                props.content
            }
        </div>
    )
}

export default TextLabel;