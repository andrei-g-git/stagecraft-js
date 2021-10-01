import { Navbar } from "@blueprintjs/core"

const Group = Navbar.Group;

const MainNavbar = (props: any) => {
    return (
        <Navbar>
            <Group>
                {
                    props.children
                }
            </Group>
        </Navbar>
    )
}

export default MainNavbar