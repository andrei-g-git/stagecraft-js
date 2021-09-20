const LineEditor = (props: any) => {
    return (
        <input type="text"
            value={props.content}
            onChange={(event) => props.changeContent(event.target.value)}
        />
    )
}


export default LineEditor;