import React from 'react';
import customerStore from "../../store/CustomerStore";

class CustomerShoppingCart extends React.Component {

    constructor(props) {
        super(props);
        this._onChange = this._onChange.bind(this);
        this.state = { shoppingCart: [] };
    }

    _onChange() {
        this.setState({ shoppingCart: customerStore._shoppingCart });
    }

    componentDidMount() {
        customerStore.addChangeListener(this._onChange);
    }

    componentWillUnmount() {
        customerStore.removeChangeListener(this._onChange);
    }

    render() {
        return (
            <div className="card mt-2">
                <div className="card-header">Order details</div>
                <div className="card-body">
                    <ul className="list-group">
                        {
                            this.state.shoppingCart.map((order, index) => {
                                return (
                                    <div key={index}>
                                        <h5>Customer: {order.customer.name}</h5>
                                        <h5>Price: {order.price} €</h5>
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

export default CustomerShoppingCart
