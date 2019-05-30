const dao = require('../dao/ShutterDao.js');

class WorkerService {

    listOrders() {
        return dao.readOrders();
    }

    viewCustomer(customerName) {
        return dao.readOrdersByCustomerName(customerName);
    }

    createInvoice(customerName) {
        return dao.readOrdersByCustomerName(customerName);
    }

    checkPayment(orderId) {
        return dao.readPaymentStatusById(orderId);
    }

    organizeInstallation(orderId) {
        return dao.readNextInstallationTime(orderId);
    }

}

module.exports = new WorkerService();
