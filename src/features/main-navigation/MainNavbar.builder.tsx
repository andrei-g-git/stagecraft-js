import {GenericMenuItem} from "@/features/components";
import {MainNavbar, withOpenSettings, withSettingsToggleState} from "@/features/main-navigation";
import {NavMenu} from "@/features/components";
import { withModelState } from  "@/features/components"; 
import { withExportNodesJson, withLoadProject, withSaveProject } from "./menus/hoc/file-menu.hoc";
import { withLoadNodesState } from "../components/higher-order-components/store.hoc";



const MainNavbarBuilder = (props: any) => {

	return (
		<MainNavbar>
			<NavMenu name="File"
				icon="document"
			>
				{
					makeSaveProjectItem("Save Project")
				}
				{
					makeExportOnlyJson("Export as JSON")
				}
				{
					makeLoadProject("Load Project")
				}

			</NavMenu>

			<NavMenu name="Edit"
				icon="edit"
			> 
				{
					makeOpenSettings("Settings")
				}
			</NavMenu>			
		</MainNavbar>
	)
}

const makeSaveProjectItem = (name: string) => {  
	const SaveProjectWithState = withModelState(
		withSaveProject(GenericMenuItem) //only name and this differ, should have reusable function
	);
	return <SaveProjectWithState 
		name={name}
	/>
}

const makeExportOnlyJson = (name: string) => {
	const ExportOnlyJsonWithState = withModelState(
		withExportNodesJson(GenericMenuItem)
	);
	return <ExportOnlyJsonWithState 
		name={name}
	/>
}

const makeLoadProject = (name: string) => {
	const LoadProjectWithState = withLoadNodesState(
		withLoadProject(GenericMenuItem)
	);
	return <LoadProjectWithState name={name} />
}

///////

const makeOpenSettings = (name: string) => {
	const OpenSettings = withSettingsToggleState(
		withOpenSettings(GenericMenuItem)
	);
	return <OpenSettings name={name} />
}

export default MainNavbarBuilder;
