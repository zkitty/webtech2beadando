import React from 'react'
import ReactDOM from "react-dom";
import CustomerDetails from './customer/CustomerDetails';
import WorkerDetails from "./worker/WorkerDetails";
import ManagerDetails from "./manager/ManagerDetails";

class NavBar extends React.Component {

    constructor(props) {
        super(props);
        this.state = null;
    }

    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <a className="nav-link" href="#" onClick={() =>
                            ReactDOM.render(React.createElement(CustomerDetails), document.getElementById('mainContent'))
                        }>Customer</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#" onClick={() =>
                            ReactDOM.render(React.createElement(WorkerDetails), document.getElementById('mainContent'))
                        }>Worker</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#" onClick={() =>
                            ReactDOM.render(React.createElement(ManagerDetails), document.getElementById('mainContent'))
                        }>Manager</a>
                    </li>
                </ul>
            </nav>
        )
    }
}

export default NavBar
