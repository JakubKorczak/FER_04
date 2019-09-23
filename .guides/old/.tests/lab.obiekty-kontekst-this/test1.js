"use strict";

const TestClass = require("../TestClass");
const rewire = require('rewire');
let tests = new TestClass();


let productSrc;
let productPath = "lab.obiekty-kontekst-this/Product.js";
if (tests.debug) productSrc = rewire("../../.solutions/" + productPath);
if (!tests.debug) productSrc = rewire("../../../" + productPath);

let orderItemSrc;
let orderItemPath = "lab.obiekty-kontekst-this/OrderItem.js";
if (tests.debug) orderItemSrc = rewire("../../.solutions/" + orderItemPath);
if (!tests.debug) orderItemSrc = rewire("../../../" + orderItemPath);

let orderSrc;
let orderPath = "lab.obiekty-kontekst-this/Order.js";
if (tests.debug) orderSrc = rewire("../../.solutions/" + orderPath);
if (!tests.debug) orderSrc = rewire("../../../" + orderPath);

let ordersSrc;
let ordersPath = "lab.obiekty-kontekst-this/Orders.js";
if (tests.debug) ordersSrc = rewire("../../.solutions/" + ordersPath);
if (!tests.debug) ordersSrc = rewire("../../../" + ordersPath);


let clientSrc;
let clientPath = "lab.obiekty-kontekst-this/Client.js";
if (tests.debug) clientSrc = rewire("../../.solutions/" + clientPath);
if (!tests.debug) clientSrc = rewire("../../../" + clientPath);

let Product = productSrc.__get__('Product');
let Orders = ordersSrc.__get__('Orders');
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
    "Stworzony konstruktur dla Orders",
    "",
    (e) => {

            let orders = new Orders();
            e.assert.deepEqual(orders.orders, []);

    });

tests.runTests();


tests.addTest(
    "Stworzony konstruktur dla zamówienia",
    "",
    (e) => {

        let orders = new Orders();
        let client = new Client("John Doe");
        let order = new Order(client, "ZO/0001", orders);

        e.assert.deepEqual(order.client, client);
        e.assert.equal(order.number, "ZO/0001");
        e.assert.deepEqual(order.positions, []);

    });

tests.addTest(
    "Stworzony konstruktur dla pozycji zamówienia",
    "",
    (e) => {

        let orders = new Orders();
        let productMouse = new Product("mouse", 20.50);
        let client = new Client("John Doe");
        let order = new Order(client, "ZO/0001", orders);
        let orderPosition = new OrderItem(order, productMouse, 5);

        e.assert.deepEqual(orderPosition.order, order);
        e.assert.deepEqual(orderPosition.product, productMouse);
        e.assert.equal(orderPosition.quantity, 5)

    });

// tests.addTest(
//     "Dodawanie pozycji do zamówienia przez zamówienie",
//     "",
//     (e) => {
//
//         let orders = new Orders();
//         let productMouse = new Product("mouse", 20.50);
//         let client = new Client("John Doe");
//         let order = new Order(client, "ZO/0001", orders);
//         let orderItem = new OrderItem(productMouse, 2);
//         console.log("====");
//         console.log(order);
//         console.log("====");
//         order.addPosition(productMouse, 2);
//
//         e.assert.deepEqual(order.positions,[orderItem]);
//     });

//TODO Add testing of order.addposition

tests.addTest(
    "Order posiada metodę printOrderSummary",
    "",
    (e) => {

        let client = new Client("John Doe");

        let productMouse = new Product("mouse", 20.50);
        let productPc = new Product("pc", 3200.00);

        let orders = new Orders();
        let order = new Order(client, "ZO/0001", orders);


        // order.addPosition(productMouse, 2);
        // order.addPosition(productPc, 5);
        //
        // order.printOrderSummary();

        e.assert.equal(typeof order.printOrderSummary, 'function');

        // e.spy.calledWith("Zamówienie numer: ZO/0001");
        // e.spy.calledWith("Klient: John Doe");
        // e.spy.calledWith("Produkt: mouse");
        // e.spy.calledWith("Cena: 20.5");
        // e.spy.calledWith("Ilość: 5");
        //
        // e.spy.calledWith("Zamówienie numer: ZO/0001");
        // e.spy.calledWith("Klient: John Doe");
        // e.spy.calledWith("Produkt: pc");
        // e.spy.calledWith("Cena: 3200.00");

    });

tests.addTest(
    "Order posiada metodę countTotalValue",
    "",
    (e) => {

        let client = new Client("John Doe");

        let productMouse = new Product("mouse", 20.50);
        let productPc = new Product("pc", 3200.00);

        let orders = new Orders();
        let order = new Order(client, "ZO/0001", orders);

        e.assert.equal(typeof order.countTotalValue, 'function');


    });

tests.addTest(
    "Orders posiada metodę printAllOrders",
    "",
    (e) => {

        let client = new Client("John Doe");

        let productMouse = new Product("mouse", 20.50);
        let productPc = new Product("pc", 3200.00);

        let orders = new Orders();
        let order = new Order(client, "ZO/0001", orders);

        e.assert.equal(typeof orders.printAllOrders, 'function');


    });

tests.addTest(
    "Orders posiada metodę getHighestValueOrder",
    "",
    (e) => {

        let client = new Client("John Doe");

        let productMouse = new Product("mouse", 20.50);
        let productPc = new Product("pc", 3200.00);

        let orders = new Orders();
        let order = new Order(client, "ZO/0001", orders);

        e.assert.equal(typeof orders.getHighestValueOrder, 'function');


    });

tests.runTests();

