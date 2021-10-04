import { NodeModels } from '@/models/nodeModels';
import { useEffect } from 'react';
import { connect } from 'react-redux';

const ExportJson = (props: any) => { //needs to export only json, not also the html within --- and get rid of the composition objects
    useEffect(() => {
        console.log("MODELLLLLLLLL::::   ", props.model)
    },
        []
    )

    return (
        <props.MenuItem name={props.name}
            handleClick={() => exportModelJson(props.model)} 
        />
    )
}

const exportModelJson = (model: NodeModels) => {
    console.log("MODEL:  ", model)
    const data = model.getJson();

    const fs = require("fs");
    fs.writeFile("model.json", data, (err: any) => {
        if (err) {
            console.log(err)
        } else {
            console.log("Wrote to disk")
        }
    })
}

const mapStateToProps = (state: any) => {
    return{
        model: state.model.nodeModel
    }
}

const mapDispatchToProps = (dispatch: Function) => {
    return{

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ExportJson);