"use strict";

const TestClass = require("../TestClass");
let tests = new TestClass();
let app;

if (tests.debug)
    app = require("../../.solutions/lab.podstawy.funkcje/task7");
else
    app = require("../../../lab.podstawy.funkcje/task7");


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
        app.numbers(13);
        e.assert(e.spy.calledWith("0 - parzysta"));
        e.assert(e.spy.calledWith("1 - nieparzysta"));
        e.assert(e.spy.calledWith("2 - parzysta"));
        e.assert(e.spy.calledWith("3 - nieparzysta"));
        e.assert(e.spy.calledWith("4 - parzysta"));
        e.assert(e.spy.calledWith("5 - nieparzysta"));
        e.assert(e.spy.calledWith("6 - parzysta"));
        e.assert(e.spy.calledWith("7 - nieparzysta"));
        e.assert(e.spy.calledWith("8 - parzysta"));
        e.assert(e.spy.calledWith("9 - nieparzysta"));
        e.assert(e.spy.calledWith("10 - parzysta"));
        e.assert(e.spy.calledWith("11 - nieparzysta"));
        e.assert(e.spy.calledWith("12 - parzysta"));
        e.assert(e.spy.calledWith("13 - nieparzysta"));
    }
);


tests.runTests();

