const shutter = require('./ShutterModel');
const mongoose = require('mongoose');

class ShutterDao {

    readOrders() {
        return shutter.find({});
    }

    readOrdersByCustomerName(customerName) {
        return shutter.find({ 'customer.name': customerName });
    }

    readPaymentStatusById(orderId) {
        return shutter.findOne({ '_id': orderId }).then(order => {
            if (order) {
                return order.isPaid;
            } else {
                return {};
            }
        });
    }

    readPartsByOrder(orderId) {
        return shutter.findOne({ '_id': orderId }).then(order => {
            if (order) {
                return order.parts;
            } else {
                console.log(err);
                return ({});
            }
        });
    }

    readNextInstallationTime(orderId) {
        let lastDate = {
            "year": 0,
            "month": 0,
            "day": 0,
            "hours": 0
        };

        return shutter.find({}).then(orders => {
            orders.forEach(function (order) {
                if (order.installationDate.year >= lastDate.year &&
                    order.installationDate.month >= lastDate.month &&
                    order.installationDate.day >= lastDate.day &&
                    order.installationDate.hours > lastDate.hours) {
                    lastDate = {
                        "year": order.installationDate.year,
                        "month": order.installationDate.month,
                        "day": order.installationDate.day,
                        "hours": order.installationDate.hours
                    };
                }
            });
            const timeForInstallation = {
                "year": lastDate.year,
                "month": lastDate.month,
                "day": lastDate.day,
                "hours": lastDate.hours + 1
            };

            if (timeForInstallation.hours > 24) {
                timeForInstallation.hours = 0;
                timeForInstallation.day++;
            }
            if (timeForInstallation.day > 31) {
                timeForInstallation.day = 1;
                timeForInstallation.month++;
            }
            if (timeForInstallation.month > 12) {
                timeForInstallation.month = 0;
                timeForInstallation.year++;
            }

            shutter.findOne({ '_id': orderId }).then(order => {
                if (order) {
                    order.installationDate = timeForInstallation;
                    order.save();
                } else {
                    console.log(err);
                }
            });

            return timeForInstallation;
        });
    }

    updateOrderPaid(orderId) {
        return shutter.findOne({ '_id': orderId }).then(order => {
            if (order) {
                order.isPaid = true;
                order.save();
                return order;
            } else {
                console.log(err);
                return {};
            }
        });
    }

    updateOrderAssembled(orderId) {
        return shutter.findOne({ '_id': orderId }).then(order => {
            if (order) {
                order.isAssembled = true;
                order.save();
                return order;
            } else {
                console.log(err);
                return {};
            }
        });
    }

    createOrder(order) {
        return shutter.create({
            _id: mongoose.Types.ObjectId(),
            isPaid: false,
            isAssembled: false,
            isInvoiced: false,
            installationDate: "",
            ...order,
        }).then(result => {
            return { "orderId": result._id };
        }).catch(err => {
            return { "error": err };
        });
    }
}

module.exports = new ShutterDao();
