"use strict";

const TestClass = require("../TestClass");
let tests = new TestClass();
let app;

if (tests.debug)
    app = require("../../.solutions/lab.podstawy.funkcje/task6");
else
    app = require("../../../lab.podstawy.funkcje/task6");


/**
 * DATA
 */
let array = [1,2,3,4,5];
/**
 * TESTS
 */

tests.addTest(
    "Tworzenie i zwracanie tablicy",
    "Nie zwrócona tablica, bądź ma złą zawartość",
    e => {
        let result = app.createArray(5);
        if (e.debug) console.log(result, array);
        e.assert.deepEqual(result, array);
    }
);


tests.runTests();

