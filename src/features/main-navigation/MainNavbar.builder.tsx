import {GenericMenuItem} from "@/features/components";
import {ExportJson, MainNavbar, withExportJson} from "@/features/main-navigation";
import {NavMenu} from "@/features/components";/* "./menus/NavMenu"; */
import { connect } from "react-redux";
import { withModelState } from  "@/features/components"; //"../components/higher-order-components/store.hoc";



const MainNavbarBuilder = (props: any) => {

	return (
		<MainNavbar>
			<NavMenu name="File"
				icon="document"
			>
				<ExportJson 
					name="Export as Jsonyyyy"
					MenuItem={GenericMenuItem}
				/>
				{/* <GenericMenuItem name="bbbbb" /> */}
			</NavMenu>

			<NavMenu name="Edit"
				icon="edit"
			/>			
		</MainNavbar>
	)
}

// const makeExportJsonItem = (/* model: NodeModels */) => {    this is fucking stupid...
// 	//const ExportAsJson = withExportJson(GenericMenuItem, model);
// 	console.log("MAKING EXPORTJSON")
// 	const ExportAsJsonWithState = withModelState(ExportJson);
// 	return <ExportAsJsonWithState 
// 		MenuItem={GenericMenuItem}
// 		name="Export As JSON"
// 	/>
// }

// const mapStateToProps = (state: any) => {
// 	return{
// 		model: state.model.nodeModels
// 	}
// }

//export default connect(mapStateToProps, null)(MainNavbarBuilder);


export default MainNavbarBuilder;