"use strict";

const TestClass = require("../TestClass");
let tests = new TestClass();
let app;

if (tests.debug)
    app = require("../../.solutions/lab.math/task1");
else
    app = require("../../../lab.math/task1");

/**
 * DATA
 */

/**
 * TESTS
 */

tests.addTest(
    "Prawidłowe wyliczanie potęgowania - ^",
    "",
    (e) => {
        let result = app.calculator(2, 5, "^");
        if (e.log) console.log(result);
        e.assert.equal(result, 32)
    });

tests.addTest(
    "Prawidłowe wyliczanie pierwiastka stopnia 5-tego(num2) dla 32(num1) ",
    "",
    (e) => {
        let result = app.calculator(32, 5, "sq");
        if (e.log) console.log(result);
        e.assert.equal(result, 2)
    });

tests.addTest(
    "Prawidłowe zaokrąglanie z dokładnością do 0 miejsc po przecinku dla wartośći 2.12345",
    "",
    (e) => {
        let result = app.calculator(2.12345, 0, "dec");
        if (e.log) console.log(result);
        e.assert.equal(result, 2)
    });

tests.addTest(
    "Prawidłowe zaokrąglanie z dokładnością do 0 miejsc po przecinku dla wartośći 2.789",
    "",
    (e) => {
        let result = app.calculator(2.789, 0, "dec");
        if (e.log) console.log(result);
        e.assert.equal(result, 3)
    });

tests.addTest(
    "Prawidłowe zaokrąglanie z dokładnością do 2 miejsc po przecinku dla wartośći 2.12345",
    "",
    (e) => {
        let result = app.calculator(2.12345, 2, "dec");
        if (e.log) console.log("result="+result);
        e.assert.equal(result, 2.12)
    });


tests.runTests();
