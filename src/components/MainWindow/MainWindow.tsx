
//test delete
import FlowCanvas from "../Canvas/FlowCanvas.js";
import QuillEditor from "../Editor/QuillEditor.jsx";
import FlowSheet from "../FlowSheet.tsx/FlowSheet";
import "./MainWindow.scss";

const MainWindow = (props: any) => {

    return(
        <div className="main-window-container">

            <QuillEditor />

            <FlowCanvas />

            <FlowSheet />
        </div>
    )
}

//test delete
// function htmlDecode(input: string){
//     var e = document.createElement('div');
//     e.innerHTML = input;
//     var result: string = "";
//     if((e.childNodes.length > 0) && (e.childNodes[0].nodeValue !== null)){
//         result = e.childNodes[0].nodeValue
//     }
//     return result;

//   }

export default MainWindow;