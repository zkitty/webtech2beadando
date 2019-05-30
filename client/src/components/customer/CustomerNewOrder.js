import React from 'react';
import CustomerShoppingCart from './CustomerShoppingCart';
import customerStore from "../../store/CustomerStore";
import customerActions from "../../actions/CustomerActions";
import CustomerInfoForm from "./CustomerInfoForm";
import WindowSizeForm from "./WindowSizeForm";
import windowCalculator from "../../service/WindowCalculator";
import partsCalculator from "../../service/PartsCalculator";
import priceCalculator from "../../service/PriceCalculator";

class CustomerNewOrder extends React.Component {
    constructor(props) {
        super(props);
        this._onChange = this._onChange.bind(this);
        this.state = { shoppingCart: null };
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

    saveToShoppingCart() {
        const windowWidth = customerStore._window.width;
        const windowHeight = customerStore._window.height;

        const window = windowCalculator.calculateWindow(windowWidth, windowHeight);
        const parts = partsCalculator.calculateParts(windowWidth, windowHeight);
        const price = priceCalculator.calculatePrice(parts);
        const newOrder = {
            customer: customerStore._customer,
            window: window,
            parts: parts,
            price: price
        };
        customerStore._shoppingCart.push(newOrder);
        customerStore.emitChange();
    }

    sendOrders(orders) {
        orders.forEach(o => {
            customerActions.sendOrder(o);
        });
    }

    render() {
        return (
            <div className="card">
                <div className="card-header">New Order</div>
                <div className="card-body">
                    <CustomerInfoForm/>
                    <WindowSizeForm/>
                    <form>
                        <div className="form-group row">
                            <label htmlFor="add" className="col-3 col-form-label"/>
                            <div className="col-9">
                                <button
                                    onClick={() => {
                                        this.saveToShoppingCart()
                                    }}
                                    className="btn btn-warning">Add
                                </button>
                            </div>
                        </div>
                    </form>

                    <CustomerShoppingCart/>


                    <button className="btn btn-danger btn-block mt-2"
                            onClick={() => this.sendOrders(customerStore._shoppingCart)}>Send Order
                    </button>
                </div>
            </div>
        );
    }
}

export default CustomerNewOrder;
