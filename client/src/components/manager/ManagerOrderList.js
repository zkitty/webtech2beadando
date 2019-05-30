import React from 'react';
import ManagerStore from "../../store/ManagerStore";
import ManagerActions from "../../actions/ManagerActions";

class ManagerOrderList extends React.Component {

    constructor(props) {
        super(props);
        ManagerActions.listOrders();
        this._onChange = this._onChange.bind(this);
        this.state = { orders: [] };
    }

    _onChange() {
        this.setState({ orders: ManagerStore._orders });
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
                <div className="card-header">Orders</div>
                <div className="card-body">
                    <ul className="list-group">
                        {
                            this.state.orders.map((order) => {
                                return (
                                    <div key={order._id}>
                                        <h5>Order ID: {order._id}</h5>
                                        <h5>Customer: {order.customer.name}</h5>
                                        <h5>Price: {order.price} €</h5>

                                        <div>
                                            <button className="btn btn-warning mr-2"
                                                    onClick={() => ManagerActions.createInvoice(order._id)}>
                                                Create Invoice
                                            </button>
                                            <button className="btn btn-warning mr-2"
                                                    onClick={() => ManagerActions.listOrdersFromUser(order.customer.name)}>
                                                View Customer
                                            </button>
                                            <button className="btn btn-warning mr-2"
                                                    onClick={() => ManagerActions.organizeInstallation(order._id)}>Organize
                                                Installation
                                            </button>
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

export default ManagerOrderList;
