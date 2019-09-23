"use strict";

const TestClass = require("../TestClass");
let tests = new TestClass();
let app;

if (tests.debug)
    app = require("../../.solutions/lab.podstawy.funkcje/task8");
else
    app = require("../../../lab.podstawy.funkcje/task8");


/**
 * DATA
 */
let array = ["Jan","Piotr","Zosia","Ewa","Zygmunt"];
/**
 * TESTS
 */

tests.addTest(
    "Wyświetlanie wszystkich wartości z tablicy ["+array+"]",
    "",
    e => {
        app.printArray(array);
        e.assert(e.spy.calledWith("Jan"));
        e.assert(e.spy.calledWith("Piotr"));
        e.assert(e.spy.calledWith("Zosia"));
        e.assert(e.spy.calledWith("Ewa"));
        e.assert(e.spy.calledWith("Zygmunt"));
    }
);


tests.runTests();

