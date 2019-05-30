import React from 'react';
import WorkerStore from "../../store/WorkerStore";
import WorkerActions from "../../actions/WorkerActions";

class WorkerOrderList extends React.Component {

    constructor(props) {
        super(props);
        WorkerActions.listOrders();
        this._onChange = this._onChange.bind(this);
        this.state = { orders: [] };
    }

    _onChange() {
        this.setState({ orders: WorkerStore._orders });
    }

    componentDidMount() {
        WorkerStore.addChangeListener(this._onChange)
    }

    componentWillUnmount() {
        WorkerStore.removeChangeListener(this._onChange)
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

                                    <div  onClick={() => WorkerActions.listParts(order._id)}>
                                        <h5>Customer name: {order.customer.name}</h5>
                                        <h5>Customer e-mail: {order.customer.email}</h5>
                                        <h5>Price: {order.price} €</h5>
                                    </div>
                                    
                                        <div>
                                            <button className="btn btn-warning"
                                                    onClick={() => WorkerActions.assembleShutter(order._id)}>Assemble this shutter
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
        )
    }
}

export default WorkerOrderList
