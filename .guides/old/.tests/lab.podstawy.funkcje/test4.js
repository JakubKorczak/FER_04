"use strict";

const TestClass = require("../TestClass");
let tests = new TestClass();
let app;

if (tests.debug)
    app = require("../../.solutions/lab.podstawy.funkcje/task4");
else
    app = require("../../../lab.podstawy.funkcje/task4");


/**
 * DATA
 */
let emptyArray = [];
let singleElementArray = [22];
let arrayWithAscendingElements = [31,32,33,34,35];
let arrayWithHoleInAscending = [31,32,34,35];
let arrayWithBiggerHoleInAscending = [31,35];
let arrayWithDescendingElements = [100,99,98,97,96];

/**
 * TESTS
 */

tests.addTest(
    "Zwracanie null dla pustej tablicy",
    "",
    e => {
        let result = app.getMissingElement(emptyArray, tests.debug);
        if (e.debug) console.log(result);
        e.assert.deepEqual(result, null);
    }
);

tests.addTest(
    "Zwracanie null dla tablicy z pojedynczym elementem",
    "",
    e => {
        let result = app.getMissingElement(singleElementArray, tests.debug);
        if (e.debug) console.log(result);
        e.assert.deepEqual(result, null);
    }
);

tests.addTest(
    "Zwracanie pozycji, po której dochodzi do 'przeskoku' o jeden",
    "",
    e => {
        let result = app.getMissingElement(arrayWithHoleInAscending, tests.debug);
        if (e.debug) console.log(result);
        e.assert.deepEqual(result, 1);
    }
);

tests.addTest(
    "Zwracanie pozycji, po której dochodzi do 'przeskoku' o więcej niż jeden",
    "",
    e => {
        let result = app.getMissingElement(arrayWithBiggerHoleInAscending, tests.debug);
        if (e.debug) console.log(result);
        e.assert.deepEqual(result, 0);
    }
);

tests.addTest(
    "Zwracanie pozycji, gdy zostanie przekazana tablica malęjąca",
    "",
    e => {
        let result = app.getMissingElement(arrayWithDescendingElements, tests.debug);
        if (e.debug) console.log(result);
        e.assert.deepEqual(result, 0);
    }
);

tests.addTest(
    "Zwracanie null gdy tablica spełnia wszystkie warunki",
    "",
    e => {
        let result = app.getMissingElement(arrayWithAscendingElements, tests.debug);
        if (e.debug) console.log(result);
        e.assert.deepEqual(result, null);
    }
);



tests.runTests();

