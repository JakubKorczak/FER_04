"use strict";

const TestClass = require("../TestClass");
let tests = new TestClass();
let app;

if (tests.debug)
    app = require("../../.solutions/lab.podstawy.funkcje/task9");
else
    app = require("../../../lab.podstawy.funkcje/task9");


/**
 * DATA
 */

let num1 = 2;
let num2 = 4;
let num3 = 3;


/**
 * TESTS
 */

tests.addTest(
    "Sumowanie dwóch liczb z wykorzystaniem sumTwo",
    "",
    e => {
        let result = app.sumTwo(num1, num2);
        e.assert.equal(result, 6);
    }
);

tests.addTest(
    "Sumowanie trzech liczb z wykorzystaniem sumThree",
    "",
    e => {
        let result = app.sumThree(num1, num2, num3);
        e.assert.equal(result, 9);
    }
);


tests.runTests();

