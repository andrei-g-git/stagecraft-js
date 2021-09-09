const TextField = (props: any) => {
    return(
        <input className="text-field" 
            type="text" 
            value={props.content}
            onChange={(event) => props.storeText(event.target.value)}
        />
    )
}

export default TextField;