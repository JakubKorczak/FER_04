"use strict";

let SimpleError = require("./SimpleError");
const assert = require('assert');
const sinon = require('sinon');

class TestClass {
    constructor(testResultObj) {
        this.tests = [];
        this.errors = [];

        this.testResult = testResultObj;

        //To set on machine run in terminal
        // export ENV_DEBUG=true
        this.debug = (process.env.ENV_DEBUG === "true") ? true : false;

        //Init console spy
        this.spy = sinon.spy(console, "log");
        this.assert = assert;
    }

    addTest(desc, msg, fn, points) {
        this.tests.push({desc, fn, msg, points});
    }

    runTests() {

        after( ()=>{
            this.testResultSend();
        });

        describe("", () => {
            this.tests.forEach(async test => {
                this.testResultSetMaxPoint(test);

                it(test.desc, async () => {
                    if (typeof test.fn == 'function') {
                        try {
                            test.fn(this);
                            this.testResultAddPoints(test);
                        } catch (e) {
                            test.originalError = e.message;
                            this.testResultAddTest(test);
                            throw new SimpleError(test.msg);
                        }
                    }
                })
            });

        });
    }

    testResultSend() {
        if (this.testResult)
            this.testResult.send();
    }

    testResultSetMaxPoint(test) {
        if (this.testResult && test.points) this.testResult.maxPoints += test.points;
    }

    testResultAddPoints(test) {
        this.testResultAddTest(test);

        if (this.testResult && test.points) {
            this.testResult.points += test.points;
        }

    }

    testResultAddTest(test) {
        if (this.testResult) {
            this.testResult.tests.push(test);
        }
    }
}

module.exports = TestClass;

