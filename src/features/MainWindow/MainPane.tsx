import "./MainPane.scss";

const MainPane = (props: any) => {

    return(
        <div className="main-pane">
            <div className="menu-bar">
                {props.menubar}
            </div>
            <div className="work-area">
                <div className="left-nav">
                    {
                        props.explorer
                    }
                    {/* <div className="left-nav-top">

                    </div>
                    <div className="left-nav-bottom">

                    </div> */}
                </div>
                <div className="canvas-toolbar">
                    {
                        props.toolbar
                    }
                </div>
                <div className="canvas-container">
                    {
                        props.center
                    }
                </div>
                <div className="right-pane">
                    {
                        props.right
                    }
                </div>
            </div>
            <div className="footer">
                {
                    props.bottom
                }
            </div>
        </div>
    )
}

export default MainPane;