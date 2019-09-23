"use strict";

const TestClass = require("../TestClass");
let tests = new TestClass();
let app;

if (tests.debug)
    app = require("../../.solutions/lab.math/task2");
else
    app = require("../../../lab.math/task2");

/**
 * DATA
 */

/**
 * TESTS
 */

tests.addTest(
    "Losowanie z zakresu 1 do 1",
    "",
    (e) => {
        let result = app.randomNumber(1, 1);
        if (e.log) console.log(result);
        e.assert.equal(result, 1)
    });

tests.addTest(
    "Losowanie z zakresu 1 do 5",
    "",
    (e) => {
        let result = app.randomNumber(1, 5);
        e.assert([1,2,3,4,5].indexOf(result) != -1);
    });


tests.runTests();
