const express = require('express');
const router = express.Router();
const workerService = require('../service/WorkerService');

router.get('/list', (req, res) => {
    workerService.listOrders().then(orders => {
       res.status(200).send(orders);
    })
});

router.get('/assemble/:orderId', (req, res) => {
    workerService.assembleShutter(req.params.orderId).then(response => {
        res.status(200).send(response);
    });
});

router.get('/listParts/:orderId', (req, res) => {
    workerService.listPartsByOrder(req.params.orderId).then(parts => {
        res.status(200).send(parts);
    });
});

module.exports = router;
