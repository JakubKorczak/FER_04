"use strict";

const TestClass = require("../TestClass");
let tests = new TestClass();
let app;

if (tests.debug)
    app = require("../../.solutions/lab.podstawy.funkcje/task3");
else
    app = require("../../../lab.podstawy.funkcje/task3");


/**
 * DATA
 */
let number = 12;
let dividersInGoodOrder = [6, 4, 3, 2, 1];

/**
 * TESTS
 */

tests.addTest(
    "Zwracanie poprawnych dzielników w dobrej kolejności",
    "Metoda nie zwraca poprawnych dzielników bądź zwraca w złej kolejności",
    e => {
        let result = app.factors(number);
        if (e.debug) console.log(result);
        e.assert.deepEqual(result, dividersInGoodOrder);
    }
);

tests.runTests();

