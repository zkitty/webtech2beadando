import React from 'react'
import ReactDOM from "react-dom";

import CustomerNewOrder from "./CustomerNewOrder";
import workerStore from "../../store/WorkerStore";
import CustomerOrderList from "./CustomerOrderList";

class CustomerDetails extends React.Component {

    constructor(props) {
        super(props);
        this._onChange = this._onChange.bind(this);
        this.state = { parts: {} };
    }

    _onChange() {
        this.setState({ parts: workerStore._requiredParts });
    }

    componentDidMount() {
        workerStore.addChangeListener(this._onChange)
    }

    componentWillUnmount() {
        workerStore.removeChangeListener(this._onChange)
    }

    render() {
        return (
            <div className="row">
                <div className="col-4">
                    <div className="card">
                        <div className="card-header">Customer</div>
                        <div className="card-body">
                            <ul className="list-group btn-block">
                                <button className="btn btn-info" onClick={
                                    () => ReactDOM.render(React.createElement(CustomerNewOrder), document.getElementById('customerMainContent'))
                                }>New Order
                                </button>
                            </ul>
                            <ul className="list-group btn-block">
                                <button className="btn btn-info" onClick={
                                    () => ReactDOM.render(React.createElement(CustomerOrderList), document.getElementById('customerMainContent'))
                                }>List Orders
                                </button>
                            </ul>
                        </div>
                    </div>
                </div>


                <div className="col-8" id="customerMainContent">
                </div>
            </div>
        )
    }
}

export default CustomerDetails
