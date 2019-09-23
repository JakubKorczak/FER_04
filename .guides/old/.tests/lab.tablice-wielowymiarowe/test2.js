"use strict";

const TestClass = require("../TestClass");
const rewire = require('rewire');
let tests = new TestClass();
let app;

if (tests.debug)
    app = rewire("../../.solutions/lab.tablice-wielowymiarowe/task2.js");
else
    app = rewire("../../../lab.tablice-wielowymiarowe/task2.js");

let createArray = app.__get__('createArray');
/**
 * DATA
 */

let correctResult = [
    [1,2,3,4],
    [5,6,7,8],
    [9,10,11,12]
];


/**
 * TESTS
 */

tests.addTest(
    "Poprawnie tworzona tablica",
    "",
    (e) => {
    let result = createArray();
    e.assert.deepEqual(correctResult, result);
});

tests.runTests();
