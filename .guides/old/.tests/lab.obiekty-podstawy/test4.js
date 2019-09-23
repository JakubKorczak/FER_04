"use strict";

const TestClass = require("../TestClass");
const rewire = require('rewire');
let tests = new TestClass();
let app;

let filePath = "lab.obiekty-podstawy/task1.js";
if (tests.debug) app = rewire("../../.solutions/" + filePath);
if (!tests.debug) app = rewire("../../../" + filePath);

let createUser = app.__get__('createUser');

let filePath2 = "lab.obiekty-podstawy/task4.js";
if (tests.debug) app = rewire("../../.solutions/" + filePath2);
if (!tests.debug) app = rewire("../../../" + filePath2);

let raiseSallary = app.__get__('raiseSallary');

/**
 * DATA
 */



let data = [
    createUser("Jan","Nowak", "12345", "admin", 4000),
    createUser("Piotr","Nowak", "12345", "client2", 2500),
    createUser("Andrzej","Nowak", "12345", "admin", 6500),
    createUser("Ewa","Nowak", "12345", "client2", 4000),
    createUser("Ewa","Kowalska", "12345", "admin", 4000),
    createUser("Jan","Kowalska", "12345", "client2", 2000)
];

let correctResult = [
    createUser("Jan","Nowak", "12345", "admin", 4000),
    createUser("Piotr","Nowak", "12345", "client2", 2750),
    createUser("Andrzej","Nowak", "12345", "admin", 6500),
    createUser("Ewa","Nowak", "12345", "client2", 4400),
    createUser("Ewa","Kowalska", "12345", "admin", 4000),
    createUser("Jan","Kowalska", "12345", "client2", 2200)
];


/**
 * TESTS
 */

tests.addTest(
    "Podniesione pensje tylko dla wybranych ról",
    "",
    (e) => {
        let result1 = raiseSallary("client2", 10, data);
        e.assert.deepEqual(result1, correctResult);

    });

tests.runTests();
