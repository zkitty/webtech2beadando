import React from 'react'
import ReactDOM from "react-dom";
import WorkerStore from "../../store/WorkerStore";
import WorkerOrderList from "./WorkerOrderList";

class PartsList extends React.Component {

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
                <div className="col-12">
                    <h3>Required shutter parts</h3>
                    <table className="table table-light">
                        <tbody>
                        <tr>
                            <td>louvers</td>
                            <td>{this.state.parts.louvers}</td>
                        </tr>
                        <tr>
                            <td>shutter staples</td>
                            <td>{this.state.parts.shutterStaples}</td>
                        </tr>
                        <tr>
                            <td>rails</td>
                            <td>{this.state.parts.rails}</td>
                        </tr>
                        <tr>
                            <td>tilt rod</td>
                            <td>{this.state.parts.tiltRod}</td>
                        </tr>
                        <tr>
                            <td>hinges</td>
                            <td>{this.state.parts.hinges}</td>
                        </tr>
                        </tbody>
                    </table>

                    <button className="btn btn-info" onClick={
                        () => ReactDOM.render(React.createElement(WorkerOrderList), document.getElementById('mainContent'))
                    }>Back
                    </button>
                </div>
            </div>
        )
    }
}

export default PartsList
