const dao = require('../dao/ShutterDao');

class WorkerService {

    listOrders() {
        return dao.readOrders();
    }

    assembleShutter(orderId) {
        return dao.updateOrderAssembled(orderId);
    }

    listPartsByOrder(orderId) {
        return dao.readPartsByOrder(orderId);
    }

}

module.exports = new WorkerService();
