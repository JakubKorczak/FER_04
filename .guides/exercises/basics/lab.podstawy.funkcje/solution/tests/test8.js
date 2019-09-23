const TestResult = require("../../../assets/TestResult");
const SingleTestResult = require("../../../assets/SingleTestResult");
const SimpleError = require("../../../assets/SimpleError");

const puppeteer = require("puppeteer");
const path = require("path");
const assert = require('assert');

const sinon = require('sinon');
let spy = sinon.spy(console, "log");

//PREPARE
let testResult = new TestResult("fero.module1.exam1.task1");
let browser;
let subTests = [];
let app = require("../task8");


/**
 * DATA
 */
let array = ["Jan", "Piotr", "Zosia", "Ewa", "Zygmunt"];

describe("", () => {

    before(async () => {
        // browser = await puppeteer.launch({
        //     args: ["--no-sandbox", "--disable-setuid-sandbox"]
        // });
        //
        // const context = await browser.createIncognitoBrowserContext();
        // let page = await context.newPage();
        // let filePath = path.join(__dirname, "../zadanie01.html");
        // await page.goto(`file://${filePath}`);
    });

    after(async () => {
        // await browser.close();
        subTests.forEach(t => testResult.addTest(t));
        testResult.send();
    });
    let test1 = new SingleTestResult(
        "Wyświetlanie wszystkich wartości z tablicy [" + array + "]",
        "",
        1
    );
    subTests.push(test1);
    it(test1.testName, async () => {
        app.printArray(array);
        assert(spy.calledWith("Jan"));
        assert(spy.calledWith("Piotr"));
        assert(spy.calledWith("Zosia"));
        assert(spy.calledWith("Ewa"));
        assert(spy.calledWith("Zygmunt"));
        test1.points = 1;
    });

});

