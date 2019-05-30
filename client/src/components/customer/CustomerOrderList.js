import React from 'react';
import CustomerStore from "../../store/CustomerStore";
import customerStore from "../../store/CustomerStore";
import CustomerActions from "../../actions/CustomerActions";
import customerActions from "../../actions/CustomerActions";

class CustomerOrderList extends React.Component {

    constructor(props) {
        super(props);
        this._onChange = this._onChange.bind(this);
        this.state = { orders: [] };
    }

    _onChange() {
        this.setState({ orders: CustomerStore._orders });
    }

    componentDidMount() {
        CustomerStore.addChangeListener(this._onChange);
    }

    componentWillUnmount() {
        CustomerStore.removeChangeListener(this._onChange);
    }

    render() {
        return (
            <div>
                <div className="card mb-3">
                    <div className="card-header">Select Customer</div>
                    <div className="card-body">
                        <form>
                            <div className="form-group row">
                                <label className="col-3 col-form-label" htmlFor="customerName">Customer Name</label>
                                <div className="col-9">
                                    <input
                                        id="customerName"
                                        className="form-control"
                                        onChange={(event) => {
                                            const name = event.target.value;
                                            this.setState({ name: name });
                                            CustomerStore._name = name;
                                        }}
                                        type="text"/>
                                </div>
                            </div>
                            <div className="form-group row">
                                <div className="col-12">
                                    <button
                                        onClick={() => {
                                            customerActions.listOrders(customerStore._name)
                                        }}
                                        className="btn btn-warning btn-block">
                                        List
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>

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

                                            <div className="mt-2">
                                                <button className="btn btn-danger btn-block"
                                                        onClick={() => CustomerActions.payOrder(order._id)}>Pay
                                                </button>
                                            </div>

                                            <hr className="mt-3 mb-3"/>
                                        </div>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default CustomerOrderList
