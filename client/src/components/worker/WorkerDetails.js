import React from 'react'
import ReactDOM from "react-dom";
import WorkerStore from "../../store/WorkerStore";
import WorkerOrderList from "./WorkerOrderList";

class WorkerDetails extends React.Component {

    constructor(props) {
        super(props);
        this.state = null;
    }

    render() {
        return (
            <div id="workerMainContent">
                <WorkerOrderList/>
            </div>
        )
    }
}

export default WorkerDetails
