"use strict";

const TestClass = require("../TestClass");
const TestResult = require("../TestResult");
const rewire = require('rewire');

let testResult = new TestResult("fero.module2.lab.tablice-jednowymiarowe.task2");
let tests = new TestClass(testResult);

let app;

if (tests.debug)
    app = rewire("../../.solutions/lab.tablice-jednowymiarowe/task2.js");
else
    app = rewire("../../../lab.tablice-jednowymiarowe/task2.js");

let multiply = app.__get__('multiply');
/**
 * DATA
 */

let arr1 = [1,2,3,4,5,6,7];
let res1 = 5040;

let arr2 = [1,1,1,1];
let res2 = 1;

let arr3 = [2,8,3,7];
let res3 = 336;

let arr4 = [];
let res4 = null;


/**
 * TESTS
 */

tests.addTest(
    "Wynik "+res1+" dla tablicy "+arr1 ,
    "",
    (e) => {
    let result = multiply(arr1);
    e.assert.equal(res1, result);
    },1);

tests.addTest(
    "Wynik "+res2+" dla tablicy "+arr2 ,
    "",
    (e) => {
        let result = multiply(arr2);
        e.assert.equal(res2, result);
    },1);

tests.addTest(
    "Wynik "+res3+" dla tablicy "+arr3 ,
    "",
    (e) => {
        let result = multiply(arr3);
        e.assert.equal(res3, result);
    },1);

tests.addTest(
    "Wynik "+res4+" dla pustej tablicy " ,
    "",
    (e) => {
        let result = multiply(arr4);
        e.assert.equal(res4, result);
    },1);



tests.runTests();
