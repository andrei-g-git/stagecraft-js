import {GenericMenuItem} from "@/features/components";
import {ExportJson, MainNavbar} from "@/features/main-navigation";
import {NavMenu} from "@/features/components";/* "./menus/NavMenu"; */
import { connect } from "react-redux";
import { withModelState } from  "@/features/components"; 



const MainNavbarBuilder = (props: any) => {

	return (
		<MainNavbar>
			<NavMenu name="File"
				icon="document"
			>
				{
					makeExportJsonItem("Export As JSON")
				}

			</NavMenu>

			<NavMenu name="Edit"
				icon="edit"
			/>			
		</MainNavbar>
	)
}

const makeExportJsonItem = (name: string) => {    
	const ExportAsJsonWithState = withModelState(ExportJson);
	return <ExportAsJsonWithState 
		MenuItem={GenericMenuItem}
		name={name}
	/>
}

export default MainNavbarBuilder;
