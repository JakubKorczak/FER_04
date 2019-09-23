"use strict";

const TestClass = require("../TestClass");
const rewire = require('rewire');
let tests = new TestClass();

let orderSrc;
let orderPath = "lab.obiekty-konstruktor/Order.js";
if (tests.debug) orderSrc = rewire("../../.solutions/" + orderPath);
if (!tests.debug) orderSrc = rewire("../../../" + orderPath);

let clientSrc;
let clientPath = "lab.obiekty-konstruktor/Client.js";
if (tests.debug) clientSrc = rewire("../../.solutions/" + clientPath);
if (!tests.debug) clientSrc = rewire("../../../" + clientPath);

let Order = orderSrc.__get__('Order');
let Client = clientSrc.__get__('Client');


/**
 * TESTS
 */

tests.addTest(
    "Stworzony konstruktur dla klienta",
    "",
    (e) => {

        let client = new Client("John Doe");
        e.assert.equal(client.name, "John Doe");
        e.assert.deepEqual(client.orders, []);
        e.assert.deepEqual(typeof client.addOrder, 'function');

    });

tests.addTest(
    "Stworzony konstruktur dla zamówienia",
    "",
    (e) => {

        let client = new Client("John Doe");
        let order = new Order(client, "ZO/0001");

        e.assert.deepEqual(order.client, client);
        e.assert.equal(order.number, "ZO/0001");


    });

tests.runTests();
