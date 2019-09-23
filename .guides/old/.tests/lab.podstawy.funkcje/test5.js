"use strict";

const TestClass = require("../TestClass");
let tests = new TestClass();
let app;

if (tests.debug)
    app = require("../../.solutions/lab.podstawy.funkcje/task5");
else
    app = require("../../../lab.podstawy.funkcje/task5");


/**
 * DATA
 */

let singleElementArray = [22];
let array = [100,99,98,97,96,78,30,20];
let validResultArrayForFive = [97,96,78,30,20];
/**
 * TESTS
 */

tests.addTest(
    "Zwracanie pustej tablicy przy braku pierwszego parametru",
    "",
    e => {
        let result = app.getLastNumbers(array);
        if (e.debug) console.log(result);
        e.assert.deepEqual(result, []);
    }
);

tests.addTest(
    "Zwracanie pustej tablicy gdy pierwszy parametr nie jest liczbą",
    "",
    e => {
        let result = app.getLastNumbers(array,array);
        if (e.debug) console.log(result);
        e.assert.deepEqual(result, []);
    }
);

tests.addTest(
    "Zwracanie pustej tablicy jeżeli liczba jest większa niż długość tablicy",
    "",
    e => {
        let result = app.getLastNumbers(5, singleElementArray);
        if (e.debug) console.log(result);
        e.assert.deepEqual(result, []);
    }
);

tests.addTest(
    "Zwracanie tablicy o prawidłowej długości",
    "",
    e => {
        let result = app.getLastNumbers(5,array);
        if (e.debug) console.log(result);
        e.assert.deepEqual(result, validResultArrayForFive);
    }
);





tests.runTests();

