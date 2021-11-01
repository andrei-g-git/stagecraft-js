import { Classes, Tab, Tabs } from "@blueprintjs/core"

const SettingsToolbar = (props: {flowCard: JSX.Element}) => {
    return (
        <Tabs //selectedTabId="balls"
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
                panel={<div style={{width: 500, height: 400, background: "bisque"}}>bbbbbbb</div>}
            />     
            {/* <Tabs.Expander />   */}     
        </Tabs>
    )
}

export default SettingsToolbar