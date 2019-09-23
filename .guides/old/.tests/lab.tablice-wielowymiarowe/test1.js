"use strict";

const TestClass = require("../TestClass");
const TestResult = require("../TestResult");
const rewire = require('rewire');

let testResult = new TestResult("fero.module2.lab.tablice-wielowymiarowe.task1");
let tests = new TestClass(testResult);

let app;
let file = "lab.tablice-jednowymiarowe/task1.js";

if (tests.debug) app = rewire("../../.solutions/"+file);
else app = rewire("../../../"+file);

let array2D = app.__get__('array2D');


/**
 * TESTS
 */

tests.addTest(
    "Tablica z liczbami do 6" ,
    "",
    (e) => {
        let result = createArray(6);
        e.assert.deepEqual(result, [1,2,3,4,5,6]);
    },1);

tests.addTest(
    "Tablica z liczbami do 1" ,
    "",
    (e) => {
        let result = createArray(1);
        e.assert.deepEqual(result, [1]);
    },1);

tests.addTest(
    "Test dla liczby ujemnej (powinna być pusta tablica)" ,
    "",
    (e) => {
        let result = createArray(-6);
        e.assert.deepEqual(result, []);
    },1);

tests.addTest(
    "Test dla zera" ,
    "",
    (e) => {
        let result = createArray(-6);
        e.assert.deepEqual(result, []);
    },1);


tests.runTests();
