import React from 'react';
import ManagerStore from "../../store/ManagerStore";
import ManagerActions from "../../actions/ManagerActions";

class ManagerStatisticsPanel extends React.Component {

    constructor(props) {
        super(props);
        ManagerActions.checkStatistics();
        this._onChange = this._onChange.bind(this);
        this.state = { statistics: {} };
    }

    _onChange() {
        this.setState({ statistics: ManagerStore._statistics });
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
                <div className="card-header">Statistics</div>
                <div className="card-body">
                    <div>
                        <h5>Number of orders</h5>
                        <h1>{this.state.statistics.orderCount}</h1>
                        <hr className="mt-3 mb-3"/>
                    </div>
                    <div>
                        <h5>Maximum order price</h5>
                        <h1>{this.state.statistics.maxPrice} €</h1>
                        <hr className="mt-3 mb-3"/>
                    </div>
                    <div>
                        <h5>Minimum order price</h5>
                        <h1>{this.state.statistics.minPrice} €</h1>
                        <hr className="mt-3 mb-3"/>
                    </div>
                    <div>
                        <h5>All income</h5>
                        <h1>{this.state.statistics.sumPrice} €</h1>
                    </div>
                </div>
            </div>
        )
    }
}

export default ManagerStatisticsPanel
