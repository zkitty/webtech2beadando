import { Dispatcher } from 'flux'
import React from 'react'
import ReactDOM from 'react-dom'
import toastMessages from './ToastMessages'
import AppConstants from './AppConstants'
import CustomerStore from "../store/CustomerStore";
import WorkerStore from '../store/WorkerStore'
import ManagerStore from '../store/ManagerStore'
import WorkerPartsList from "../components/worker/WorkerPartsList";
import ManagerOrderListCustomer from "../components/manager/ManagerOrderListCustomer";
import { round, max, min, mean } from 'lodash';

class AppDispatcher extends Dispatcher {
    handleViewAction(action) {
        this.dispatch({
            source: 'VIEW_ACTION',
            payload: action
        });
    }
}

const serverUrl = 'http://localhost:8080';
const dispatcher = new AppDispatcher();

// WORKER_LIST_ORDERS
dispatcher.register((data) => {
    if (data.payload.actionType !== AppConstants.WORKER_LIST_ORDERS) {
        return;
    }

    fetch(`${serverUrl}/worker/list`)
        .then(response => {
            return response.json()
        })
        .then(result => {
            WorkerStore._orders = result;
            WorkerStore.emitChange();
        });
});

// WORKER_LIST_PARTS
dispatcher.register((data) => {
    if (data.payload.actionType !== AppConstants.WORKER_LIST_PARTS) {
        return;
    }

    WorkerStore._requiredParts = WorkerStore._orders.find((order) => {
        return order._id === data.payload.payload;
    });
    fetch(`${serverUrl}/worker/listParts/${data.payload.payload}`, {
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            "Accept": "application/x-www-form-urlencoded"
        }
    }).then((response) => {
        return response.json()
    }).then((res) => {
        WorkerStore._requiredParts = res;
        WorkerStore.emitChange();
    });

    ReactDOM.render(
        React.createElement(WorkerPartsList),
        document.getElementById('mainContent'));
    WorkerStore.emitChange();
});

// WORKER_ASSEMBLE_SHUTTER
dispatcher.register((data) => {
    if (data.payload.actionType !== AppConstants.WORKER_ASSEMBLE_SHUTTER) {
        return;
    }

    const orderToAssemble = WorkerStore._orders.find((order) => {
        return order._id === data.payload.payload;
    });
    fetch(`${serverUrl}/worker/assemble/${data.payload.payload}`)
        .then((response) => {
            toastMessages.showAssembleMessage(orderToAssemble._id, response);
        });
});

// MANAGER_LIST_ORDERS
dispatcher.register((data) => {
    if (data.payload.actionType !== AppConstants.MANAGER_LIST_ORDERS) {
        return;
    }
    fetch(`${serverUrl}/manager/list`)
        .then(response => {
            return response.json()
        })
        .then(result => {
            ManagerStore._orders = result;
            ManagerStore.emitChange();
        });
});

// MANAGER_VIEW_CUSTOMER
dispatcher.register((data) => {
    if (data.payload.actionType !== AppConstants.MANAGER_VIEW_CUSTOMER) {
        return;
    }
    ManagerStore._selectedCustomer = data.payload.payload;
    ManagerStore._ordersFromSelectedUser = ManagerStore._orders.find((order) => {
        return order.customer.name === data.payload.payload;
    });
    fetch(`${serverUrl}/manager/viewCustomer/${data.payload.payload}`)
        .then((response) => {
            return response.json()
        })
        .then((res) => {
            ManagerStore._ordersFromSelectedUser = res;
            ManagerStore.emitChange();
        });

    ReactDOM.render(
        React.createElement(ManagerOrderListCustomer),
        document.getElementById('mainContent'));
    ManagerStore.emitChange();
});

// MANAGER_CREATE_INVOICE
dispatcher.register((data) => {
    if (data.payload.actionType !== AppConstants.MANAGER_CREATE_INVOICE) {
        return;
    }
    const orderToInvoice = ManagerStore._orders.find((order) => {
        return order._id === data.payload.payload;
    });
    fetch(`${serverUrl}/manager/createInvoice/${data.payload.payload}`)
        .then((response) => {
            toastMessages.showInvoiceMessage(orderToInvoice._id, response);
        });
});

// MANAGER_CHECK_STATISTICS
dispatcher.register((data) => {
    if (data.payload.actionType !== AppConstants.MANAGER_CHECK_STATISTICS) {
        return;
    }

    fetch(`${serverUrl}/manager/list`)
        .then(response => {
            return response.json()
        })
        .then(result => {
            const prices = result.map(r => r.price);
            ManagerStore._statistics = {
                "orderCount": result.length,
                "maxPrice": max(prices),
                "minPrice": min(prices),
                "sumPrice": prices.reduce(function(prices,b){return prices + b;},0),

            };
            ManagerStore.emitChange();
        });
});

// MANAGER_ORGANIZE_INSTALLATION
dispatcher.register((data) => {
    if (data.payload.actionType !== AppConstants.MANAGER_ORGANIZE_INSTALLATION) {
        return;
    }

    fetch(`${serverUrl}/manager/organizeInstallation/${data.payload.payload}`)
        .then(response => {
            return response.json()
        })
        .then(result => {
            toastMessages.showInstallationTimeMessage(data.payload.payload, result);
        });
});

// CUSTOMER_LIST_ORDERS
dispatcher.register((data) => {
    if (data.payload.actionType !== AppConstants.CUSTOMER_LIST_ORDERS) {
        return;
    }

    fetch(`${serverUrl}/customer/list/${data.payload.payload}`)
        .then(response => {
            return response.json()
        })
        .then(result => {
            CustomerStore._orders = result;
            CustomerStore.emitChange();
        });
});

// CUSTOMER_SEND_ORDER
dispatcher.register((data) => {
    if (data.payload.actionType !== AppConstants.CUSTOMER_SEND_ORDER) {
        return;
    }

    fetch(`${serverUrl}/customer/sendOrder/`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data.payload.payload)
    }).then((response) => {
        return response.json()
    }).then((result) => {
        toastMessages.showNewOrderMessage(result.orderId);
    })
});

// CUSTOMER_PAY_ORDER
dispatcher.register((data) => {
    if (data.payload.actionType !== AppConstants.CUSTOMER_PAY_ORDER) {
        return;
    }

    const orderToPay = CustomerStore._orders.find((order) => {
        return order._id === data.payload.payload;
    });
    fetch(`${serverUrl}/customer/pay/${data.payload.payload}`, {
        method: 'POST'
    }).then((response) => {
        toastMessages.showPayMessage(orderToPay._id, response);
    });
});

export default dispatcher;
