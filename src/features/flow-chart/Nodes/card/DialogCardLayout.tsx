import "./DialogCardLayout.scss";

const DialogCardLayout = (props: {
    picture: JSX.Element,
    name: JSX.Element,
    preview: JSX.Element,
    full: JSX.Element
}) => {

    return (
        <div className="dialog-card-layout">
            <div className="picture-against-name-and-preview">
                <div className="dialog-card-picture">
                    {
                        props.picture
                    }
                </div>

                <div className="name-and-preview">
                    <div className="dialog-card-name">
                        {
                            props.name
                        }
                    </div>
                    <div className="dialog-card-preview">
                        {
                            props.preview
                        }
                    </div>                    
                </div>                
            </div>



            <div className="dialog-card-full">
                {
                    props.full
                }
            </div>                        
        </div>
    )
}


export default DialogCardLayout;