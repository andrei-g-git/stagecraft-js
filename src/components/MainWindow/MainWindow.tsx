
//test delete
import FlowSheet from "../FlowSheet.tsx/FlowSheet";
import DialogNodeView from "../Nodes/DialogCard";

const MainWindow = (props: any) => {

    return(
        <div className="main-window-container">

            {/* <DialogNodeView preview="<p> AAAAAAA </p>"                
                fullContent={<div dangerouslySetInnerHTML={{__html: '<p>aa<strong>aaaa bb</strong><strong style="color: rgb(230, 0, 0);">bb</strong><span style="color: rgb(230, 0, 0);">bb</span><em style="color: rgb(230, 0, 0);">bb ccc</em><em><s>cccc</s></em><s>cc dddd</s>ddddd</p>'}}></div>}
            /> */}

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