const express = require('express');
const managerService = require('../service/ManagerService');
const router = express.Router();

router.get('/list', (req, res) => {
    managerService.listOrders().then((orders) => {
        res.status(200).send(orders);
    });
});

router.get('/viewCustomer/:customer', (req, res) => {
    managerService.viewCustomer(req.params.customer).then(orders => {
        res.status(200).send(orders);
    })
});

router.get('/createInvoice/:customer', (req, res) => {
    managerService.createInvoice(req.params.customer).then(response => {
        res.status(200).send(response);
    })
});

router.get('/checkPayment/:orderId', (req, res) => {
    managerService.checkPayment(req.params.orderId).then(paymentStatus => {
        res.status(200).send(paymentStatus);
    })
});

router.get('/organizeInstallation/:orderId', (req, res) => {
    managerService.organizeInstallation(req.params.orderId).then(installationTime => {
        res.status(200).send(installationTime);
    })
});

module.exports = router;
