import React from 'react';
import ReactDOM from "react-dom";
import ManagerStore from "../../store/ManagerStore";
import ManagerActions from "../../actions/ManagerActions";
import ManagerOrderList from "./ManagerOrderList";

class ManagerOrderListCustomer extends React.Component {

    constructor(props) {
        super(props);
        ManagerActions.listOrdersFromUser(ManagerStore._selectedCustomer);
        this._onChange = this._onChange.bind(this);
        this.state = { orders: [] };
    }

    _onChange() {
        this.setState({ orders: ManagerStore._ordersFromSelectedUser });
    }

    componentDidMount() {
        ManagerStore.addChangeListener(this._onChange)
    }

    componentWillUnmount() {
        ManagerStore.removeChangeListener(this._onChange)
    }

    render() {
        return (
            <div className="card">
                <div className="card-header">Orders from {ManagerStore._selectedCustomer}</div>
                <div className="card-body">
                    <ul className="list-group">
                        {
                            this.state.orders.map((order) => {
                                return (
                                    <div key={order._id}>
                                        <h5>Order ID: {order._id}</h5>
                                        <h5>Price: {order.price} €</h5>
                                        <h5>Paid: {order.isPaid ? "Yes" : "No"}</h5>

                                        <div>
                                            <button className="btn btn-warning mr-2"
                                                    onClick={() => ManagerActions.createInvoice(order._id)}>Create
                                                Invoice
                                            </button>
                                            <button className="btn btn-warning mr-2"
                                                    onClick={() => ManagerActions.organizeInstallation(order._id)}>Organize
                                                Installation
                                            </button>
                                            <div>
                                                <button className="btn btn-info mt-2" onClick={
                                                    () => ReactDOM.render(React.createElement(ManagerOrderList), document.getElementById('mainContent'))
                                                }>Back
                                                </button>
                                            </div>
                                        </div>
                                        <hr className="mt-3 mb-3"/>
                                    </div>)
                            })
                        }
                    </ul>
                </div>
            </div>
        )
    }
}

export default ManagerOrderListCustomer;
