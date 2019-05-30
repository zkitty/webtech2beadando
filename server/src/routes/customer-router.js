const express = require('express');
const router = express.Router();
const customerService = require('../service/CustomerService');

router.get('/list/:customer', (req, res) => {
    customerService.getOrdersByName(req.params.customer).then(orders => {
        res.status(200).send(orders);
    })
});

router.post('/sendOrder', (req, res) => {
    customerService.sendOrder(req.body).then(response => {
        res.status(200).send(response);
    });
});

router.post('/pay/:orderId', (req, res) => {
    customerService.payOrder(req.params.orderId).then(response => {
       res.status(200).send(response);
    });
});

module.exports = router;
