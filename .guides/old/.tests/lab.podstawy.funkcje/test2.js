"use strict";

const TestClass = require("../TestClass");
let tests = new TestClass();
let app;

if (tests.debug)
    app = require("../../.solutions/lab.podstawy.funkcje/task2");
else
    app = require("../../../lab.podstawy.funkcje/task2");

/**
 * DATA
 */

let array = [1,2,3,24,3,2,5,2];
let numberThatExist = 2;
let numberThatNotExist = 10;


/**
 * TESTS
 */

tests.addTest(
    "Sumowanie gdy podana liczba znajduje się w tablicy",
    "",
    (e) => {
    let result = app.addTheSameNumbers(numberThatExist, array);
    if(e.log) console.log(result);
    e.assert.equal(6, result)
});

tests.addTest(
    "Zwracanie null, gdy podana liczba nie znajduje się w tablicy",
    "",
    (e) => {
    let result = app.addTheSameNumbers(numberThatNotExist, array);
    if(e.log) console.log(result);
    e.assert.equal(null, result)
});


tests.runTests();
