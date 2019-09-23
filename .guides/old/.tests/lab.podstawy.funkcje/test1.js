"use strict";

const TestClass = require("../TestClass");
let tests = new TestClass();
let app;

if (tests.debug)
    app = require("../../.solutions/lab.podstawy.funkcje/task1");
else
    app = require("../../../lab.podstawy.funkcje/task1");

/**
 * DATA
 */

let array = [1,2,3,4,5];
let numberThatExist = 2;
let numberThatNotExist = 10;


/**
 * TESTS
 */

tests.addTest(
    "Zwracanie true gdy szukany element istnieje w tablicy" ,
    "Wyszukiwanie liczby 2 w tablicy "+ array ,
    (e) => {
    let exist = app.getNumber(numberThatExist, array);
    if(e.log) console.log(exist);

    e.assert.equal(true, exist)
});

tests.addTest(
    "Zwracanie false gdy szukany element nie istnieje w tablicy",
    "Metoda powinna zwrócić false przy wyszukiwaniu liczby "+numberThatNotExist+" w tablicy "+ array,
    (e) => {
    let exist = app.getNumber(numberThatNotExist, array);
    if(e.log) console.log(exist);
    e.assert.equal(false, exist)
});



tests.runTests();
