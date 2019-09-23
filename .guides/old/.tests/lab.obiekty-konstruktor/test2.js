"use strict";

const TestClass = require("../TestClass");
const rewire = require('rewire');
let tests = new TestClass();


let productSrc;
let productPath = "lab.obiekty-konstruktor/Product.js";
if (tests.debug) productSrc = rewire("../../.solutions/" + productPath);
if (!tests.debug) productSrc = rewire("../../../" + productPath);

let orderItemSrc;
let orderItemPath = "lab.obiekty-konstruktor/OrderItem.js";
if (tests.debug) orderItemSrc = rewire("../../.solutions/" + orderItemPath);
if (!tests.debug) orderItemSrc = rewire("../../../" + orderItemPath);

let orderSrc;
let orderPath = "lab.obiekty-konstruktor/Order.js";
if (tests.debug) orderSrc = rewire("../../.solutions/" + orderPath);
if (!tests.debug) orderSrc = rewire("../../../" + orderPath);

let clientSrc;
let clientPath = "lab.obiekty-konstruktor/Client.js";
if (tests.debug) clientSrc = rewire("../../.solutions/" + clientPath);
if (!tests.debug) clientSrc = rewire("../../../" + clientPath);

let Product = productSrc.__get__('Product');
let Order = orderSrc.__get__('Order');
let OrderItem = orderItemSrc.__get__('OrderItem');
let Client = clientSrc.__get__('Client');


/**
 * TESTS
 */

tests.addTest(
    "Stworzony konstruktur dla produktu",
    "",
    (e) => {

        let productMouse = new Product("mouse", 20.50);
        e.assert.deepEqual(productMouse, {name: "mouse", price: 20.50});

    });

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
        e.assert.deepEqual(order.positions, []);

    });

tests.addTest(
    "Stworzony konstruktur dla pozycji zamówienia",
    "",
    (e) => {

        let productMouse = new Product("mouse", 20.50);
        let client = new Client("John Doe");
        let order = new Order(client, "ZO/0001");
        let orderPosition = new OrderItem(order, productMouse, 5);

        e.assert.deepEqual(orderPosition.order, order);
        e.assert.deepEqual(orderPosition.product, productMouse);
        e.assert.equal(orderPosition.quantity, 5)

    });

tests.runTests();
