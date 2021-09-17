const DialogContent = (props: {content: string}) => {
    return (
        <div className="preview-text-content">
            <div dangerouslySetInnerHTML={{__html: props.content}} />
        </div>
    )
}

export default DialogContent;