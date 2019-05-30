const express = require('express');
const cors = require('cors');
var path = require('path');

const indexRouter = require('./routes/index-router');
const customerRouter = require('./routes/customer-router');
const workerRouter = require('./routes/worker-router');
const managerRouter = require('./routes/manager-router');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(express.static(path.resolve(__dirname, '../../client/build')));

app.use('/', indexRouter);
app.use('/customer', customerRouter);
app.use('/worker', workerRouter);
app.use('/manager', managerRouter);

const port = process.env.PORT || '8080';
app.listen(port, () => console.log(`Shutter app listening on port ${port}!`));
