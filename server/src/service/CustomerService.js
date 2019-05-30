const dao = require('../dao/ShutterDao.js');

class CustomerService {

    getOrdersByName(customerName) {
        return dao.readOrdersByCustomerName(customerName);
    }

    sendOrder(order) {
        return dao.createOrder(order);
    }

    payOrder(orderId) {
        return dao.updateOrderPaid(orderId);
    }

}

module.exports = new CustomerService();
