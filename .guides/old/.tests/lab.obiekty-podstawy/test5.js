"use strict";

const TestClass = require("../TestClass");
const rewire = require('rewire');
let tests = new TestClass();
let app;

let filePath = "lab.obiekty-podstawy/task1.js";
if (tests.debug) app = rewire("../../.solutions/" + filePath);
if (!tests.debug) app = rewire("../../../" + filePath);

let createUser = app.__get__('createUser');

let filePath2 = "lab.obiekty-podstawy/task5.js";
if (tests.debug) app = rewire("../../.solutions/" + filePath2);
if (!tests.debug) app = rewire("../../../" + filePath2);

let printUsers = app.__get__('printUsers');

/**
 * DATA
 */



let data = [
    createUser("Jan","Nowak", "12345", "admin", 4000),
    createUser("Piotr","Nowak", "12345", "client2", 2500)
];

/**
 * TESTS
 */

tests.addTest(
    "Prawidłowe wyświetlanie informacji",
    "",
    (e) => {
        printUsers(data);
        e.assert(e.spy.calledWith("name: Jan"));
        e.assert(e.spy.calledWith("surname: Nowak"));
        e.assert(e.spy.calledWith("sallary: 4000"));
        e.assert(e.spy.calledWith("role: admin"));

        e.assert(e.spy.calledWith("name: Piotr"));
        e.assert(e.spy.calledWith("surname: Nowak"));
        e.assert(e.spy.calledWith("sallary: 2500"));
        e.assert(e.spy.calledWith("role: client2"));

    });

tests.runTests();
