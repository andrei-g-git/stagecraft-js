import { Navbar } from "@blueprintjs/core"
import "./MainNavbar.scss";

const Group = Navbar.Group;

const MainNavbar = (props: any) => {
    return (
        <Navbar className="main-navbar">
            <Group>
                {
                    props.children
                }
            </Group>
        </Navbar>
    )
}

export default MainNavbar