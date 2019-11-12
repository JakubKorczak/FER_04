"use strict";

const TestClass = require("../TestClass");
const TestResult = require("../TestResult");
const rewire = require('rewire');

let testResult = new TestResult("fero.module2.lab.tablice-jednowymiarowe.task3");
let tests = new TestClass(testResult);

let app;

if (tests.debug)
    app = rewire("../../.solutions/lab.tablice-jednowymiarowe/task3.js");
else
    app = rewire("../../../lab.tablice-jednowymiarowe/task3.js");

let addArrays = app.__get__('addArrays');
/**
 * DATA
 */

let test1Arr1 = [4,0,1,3,4];
let test1Arr2 = [1,9,6,7,8,17];
let test1Res = [5,9,7,10,12,17];

let test2Arr1 = [8,3,22];
let test2Arr2 = [1,3,2];
let test2Res = [9,6,24];


let test3Arr1 = [2,3,1,5,3,5];
let test3Arr2 = [3,1,76,1];
let test3Res = [5,4,77,6,3,5];


/**
 * TESTS
 */

tests.addTest(
    "Suma elementów tablic ["+test1Arr1+"] i ["+test1Arr2+"]" ,
    "",
    (e) => {
    let result = addArrays(test1Arr1,test1Arr2);
    e.assert.deepEqual(test1Res, result);
    },1);

tests.addTest(
    "Suma elementów tablic ["+test2Arr1+"] i ["+test2Arr2+"]" ,
    "",
    (e) => {
        let result = addArrays(test2Arr1,test2Arr2);
        e.assert.deepEqual(test2Res, result);
    },1);

tests.addTest(
    "Suma elementów tablic ["+test3Arr1+"] i ["+test3Arr2 +"]",
    "",
    (e) => {
        let result = addArrays(test3Arr1,test3Arr2);
        e.assert.deepEqual(test3Res, result);
    },1);



tests.runTests();
