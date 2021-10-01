import {GenericMenuItem} from "@/features/components";
import {MainNavbar, withExportJson} from "@/features/main-navigation";
import {NavMenu} from "@/features/components";/* "./menus/NavMenu"; */
import { connect } from "react-redux";



const MainNavbarBuilder = (props: any) => {

	const ExportAsJson = withExportJson(GenericMenuItem, props.model);	

	return (
		<MainNavbar>
			<NavMenu name="File"
				icon="document"
			>
				<ExportAsJson name="Export As JSON" />
				{/* <GenericMenuItem name="bbbbb" /> */}
			</NavMenu>

			<NavMenu name="Edit"
				icon="edit"
			/>			
		</MainNavbar>
	)
}

const mapStateToProps = (state: any) => {
	return{
		model: state.model.nodeModels
	}
}

export default connect(mapStateToProps, null)(MainNavbarBuilder);