const mock = require('mock-require');
const shutterSpy = jasmine.createSpyObj('shutter', ['find', 'findOne', 'create']);
mock('./ShutterModel', shutterSpy);

const dao = require('./ShutterDao');

describe('Shutter DAO', () => {

    it('readOrders should return the result from the shutter model', (done) => {
        shutterSpy.find.and.returnValue(Promise.resolve([1, 2]));
        dao.readOrders().then(response => {
            expect(response).toEqual([1, 2]);
            done();
        });
    });

    it('readOrdersByCustomerName should be call the shutter model with the customer name', () => {
        dao.readOrdersByCustomerName('Carl');
        expect(shutterSpy.find).toHaveBeenCalledWith({ 'customer.name': 'Carl' });
    });

    it('readPartsByOrder should return only the parts of the order', (done) => {
        shutterSpy.findOne.and.returnValue(Promise.resolve({
            "parts": {
                "tiltRod": 3,
                "hinges": 18,
                "louvers": 12,
                "shutterStaples": 9,
                "rails": 3
            },
            "price": 507,
            "isPaid": true,
            "isAssembled": false,
            "isInvoiced": false,
        }));

        dao.readPartsByOrder(1).then(response => {
            expect(response).toEqual({
                "tiltRod": 3,
                "hinges": 18,
                "louvers": 12,
                "shutterStaples": 9,
                "rails": 3
            });
            done();
        });
    });

    it('createOrder should return the order id', (done) => {
        shutterSpy.create.and.returnValue(Promise.resolve({
            "_id": 10,
            "xy": "0"
        }));

        dao.createOrder({}).then(response => {
            expect(response).toEqual({ orderId: 10 });
            done();
        });
    });
});
