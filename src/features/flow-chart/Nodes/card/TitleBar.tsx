import "./TitleBar.scss";

const TitleBar = (props: {className: string, title: string | JSX.Element}) => {
    return (
        <div className={props.className}>
            <div className="bar-title-container">
                {
                    props.title
                }
            </div>
            <div className="titlebar-buttons"> 
                <div>{/* should be component */}
                    X
                </div>
            </div>
        </div>
    )
}

export default TitleBar;