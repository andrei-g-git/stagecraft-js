import { Classes, Tab, Tabs } from "@blueprintjs/core"
import "./SettingsToolbar.scss";

const SettingsToolbar = (props: {flowCard: JSX.Element}) => {
    return (
        <Tabs className="settings-toolbar"
            vertical={true}
        >
            <Tab className={Classes.TAB} 
                id="flow-card"
                title="Flow Cards"
                panel={props.flowCard}
            />
            <Tab className={Classes.TAB} 
                id="balls"
                title="Balls"
                panel={<div style={{width: 700, height: 400, background: "bisque"}}>bbbbbbb</div>}
            />     
            {/* <Tabs.Expander />   */}     
        </Tabs>
    )
}

export default SettingsToolbar