const Settings = (props: any) => {
    return (
        <div style={{display: "flex", width: 600, height: 500}}>
            {
                props.children
            }
        </div>
    )
}

export default Settings;