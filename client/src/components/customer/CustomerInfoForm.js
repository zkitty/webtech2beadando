import React from 'react';
import customerStore from "../../store/CustomerStore";

class CustomerInfoForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = { name: null, email: null, phoneNumber: null };
    }

    render() {
        return (
            <form className="mb-3">
                <h5>Customer Info</h5>

                <div className="form-group row">
                    <label className="col-3 col-form-label" htmlFor="customerName">Customer Name</label>
                    <div className="col-9">
                        <input
                            id="customerName"
                            className="form-control"
                            onChange={(event) => {
                                const name = event.target.value;
                                this.setState({ name: name });
                                customerStore._customer.name = name;
                            }}
                            type="text"/>
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-3 col-form-label" htmlFor="customerName">E-mail</label>
                    <div className="col-9">
                        <input
                            id="customerName"
                            className="form-control"
                            onChange={(event) => {
                                const email = event.target.value;
                                this.setState({ email: email });
                                customerStore._customer.email = email;
                            }}
                            type="email"/>
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-3 col-form-label" htmlFor="customerName">Mobile number</label>
                    <div className="col-9">
                        <input
                            id="customerName"
                            className="form-control"
                            onChange={(event) => {
                                const phoneNumber = event.target.value;
                                this.setState({ phoneNumber: phoneNumber });
                                customerStore._customer.phoneNumber = phoneNumber;
                            }}
                            type="phone"/>
                    </div>
                </div>
            </form>
        )
    }
}

export default CustomerInfoForm
