import "./DialogContent.scss";

const DialogContent = (props: {content: string}) => {

    return (
        <div className="preview-text-content-container">
            <div className="preview-text" 
                dangerouslySetInnerHTML={{__html: props.content}}
            />
        </div>
    )
}

export default DialogContent;