"use strict";

const TestClass = require("../TestClass");
const rewire = require('rewire');
let tests = new TestClass();
let app;

let filePath = "lab.obiekty-podstawy/task1.js";

if (tests.debug)
    app = rewire("../../.solutions/" + filePath);
else
    app = rewire("../../../" + filePath);

let createUser = app.__get__('createUser');
/**
 * DATA
 */

let correctResult = {
    name: "Grzegorz",
    surname: "Brzęczyszczykiewicz",
    password: "Szczekociny",
    role: "admin",
    sallary: 5000
};


/**
 * TESTS
 */

tests.addTest(
    "Poprawnie utworzony obiekt",
    "",
    (e) => {
        let result = createUser("Grzegorz", "Brzęczyszczykiewicz", "Szczekociny","admin", 5000);
        e.assert.deepEqual(correctResult, result);
    });

tests.runTests();
