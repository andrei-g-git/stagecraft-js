import "./TitleBar.scss";

const TitleBar = (props: {
    className: string, 
    title: string | JSX.Element, 
    Delete: JSX.Element
}) => {
    return (
        <div className={props.className}>
            <div className="bar-title-container">
                {
                    props.title
                }
            </div>
            <div className="titlebar-buttons"> 
                {
                    props.Delete
                }
            </div>
        </div>
    )
}

export default TitleBar;