import { Button, Classes, Dialog, DialogBody, DialogFooter } from "@blueprintjs/core";

//type ModalPropTypes = {title: string, icon: any, handleClose: (event: React.MouseEvent) => void, children: React.ReactNode}

const CenteredTitledModal = (props: any/* {
    title: string, 
    icon: any, 
    handleClick: (event: React.MouseEvent) => void, 
    children: React.ReactNode
} */) => {
    return (
        <Dialog className={Classes.DIALOG} 
            title={props.title}
            icon={props.icon}
            isOpen={props.isOpen}
            autoFocus={true}
            canEscapeKeyClose={true}
            //canOutsideClickClose={true}
            onClose={props.handleClose}
            shouldReturnFocusOnClose={true}
        >
            <DialogBody className={Classes.DIALOG_BODY}>
                {
                    props.children
                }
            </DialogBody>
            <DialogFooter className={Classes.DIALOG_FOOTER}
                actions={
                <Button intent="primary"
                    text="Close"
                    onClick={props.handleClick}
                />
            } />
        </Dialog>
    )
}

export default CenteredTitledModal;




/* THIS IS HOW THE PROPS PROBLEM IS SUPPOSED TO BE HANDLED WITH TYPE SCRIPT:

interface RootState {
  isOn: boolean
}

const mapState = (state: RootState) => ({
  isOn: state.isOn,
})

const mapDispatch = {
  toggleOn: () => ({ type: 'TOGGLE_IS_ON' }),
}

const connector = connect(mapState, mapDispatch)

// The inferred type will look like:
// {isOn: boolean, toggleOn: () => void}
type PropsFromRedux = ConnectedProps<typeof connector>



interface Props extends PropsFromRedux {
  backgroundColor: string
}

const MyComponent = (props: Props) => (
  <div style={{ backgroundColor: props.backgroundColor }}>
    <button onClick={props.toggleOn}>
      Toggle is {props.isOn ? 'ON' : 'OFF'}
    </button>
  </div>
)

export default connector(MyComponent)






*/