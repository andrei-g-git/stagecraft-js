import "./DialogContent.scss";

const DialogContent = (props: {content: string, handleClick: (event: React.MouseEvent) => {}}) => {

    return (
        <div className="dialog-text-content-container"
            onClick={props.handleClick}
        >
            <div className="dialog-text" 
                dangerouslySetInnerHTML={{__html: props.content}}
            />
        </div>
    )
}

export default DialogContent;