import React from 'react'
import ReactDOM from "react-dom";
import WorkerStore from "../../store/WorkerStore";
import ManagerOrderList from "./ManagerOrderList";
import ManagerStatisticsPanel from "./ManagerStatisticsPanel";

class ManagerDetails extends React.Component {

    constructor(props) {
        super(props);
        this._onChange = this._onChange.bind(this);
        this.state = { parts: {} };
    }

    _onChange() {
        this.setState({ parts: WorkerStore._requiredParts });
    }

    componentDidMount() {
        WorkerStore.addChangeListener(this._onChange)
    }

    componentWillUnmount() {
        WorkerStore.removeChangeListener(this._onChange)
    }

    render() {
        return (
            <div className="row">

                <div className="col-4">
                    <div>
                        <div className="card">
                            <div className="card-header">Manager</div>
                            <div className="card-body">
                                <ul className="list-group btn-block">
                                    <button className="btn btn-info" onClick={
                                        () => ReactDOM.render(React.createElement(ManagerOrderList), document.getElementById('managerMainContent'))
                                    }>List Orders
                                    </button>
                                </ul>
                                <ul className="list-group btn-block ">
                                    <button className="btn btn-info" onClick={
                                        () => ReactDOM.render(React.createElement(ManagerStatisticsPanel), document.getElementById('managerMainContent'))
                                    }>Check Statistics
                                    </button>
                                </ul>

                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-8" id="managerMainContent">
                </div>

            </div>
        )
    }
}

export default ManagerDetails
