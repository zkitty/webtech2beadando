import React from 'react';

import customerStore from "../../store/CustomerStore";

class WindowSizeForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            height: 0,
            width: 0
        }
    }

    render() {
        return (
            <form className="mb-3">
                <h5>Window Size</h5>

                <div className="form-group row">
                    <label htmlFor="width" className="col-3 col-form-label">Width (cm)</label>
                    <div className="col-9">
                        <input type="number" className="form-control" id="width" onChange={(event) => {
                            const width = event.target.value;
                            this.setState({ width: width });
                            customerStore._window.width = width;
                        }}/>
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="height" className="col-3 col-form-label">Height (cm)</label>
                    <div className="col-9">
                        <input type="number" className="form-control" id="height" onChange={(event) => {
                            const height = event.target.value;
                            this.setState({ height: height });
                            customerStore._window.height = height;
                        }}/>
                    </div>
                </div>
            </form>
        )
    }
}

export default WindowSizeForm;
