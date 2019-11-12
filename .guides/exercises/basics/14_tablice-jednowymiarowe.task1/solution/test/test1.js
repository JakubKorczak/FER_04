let TestResult, SingleTestResult, SimpleError, EsprimaHelper, Helper;
/** Load based if run from solution or run by student */
try {
    TestResult = require("../../assets/TestResult");
    SingleTestResult = require("../../assets/SingleTestResult");
    SimpleError = require("../../assets/SimpleError");
    EsprimaHelper = require("../../assets/EsprimaHelper");
    Helper = require("../../assets/Helper");
} catch (e) {
    TestResult = require("../../../assets/TestResult");
    SingleTestResult = require("../../../assets/SingleTestResult");
    SimpleError = require("../../../assets/SimpleError");
    EsprimaHelper = require("../../../assets/EsprimaHelper");
    Helper = require("../../../assets/Helper");

}

const puppeteer = require("puppeteer");
const path = require("path");
const assert = require('assert');
const rewire = require('rewire');

//PREPARE
let testName = Helper.createTestName("fero", 2, __dirname);
console.log("===========");
console.log(testName);
console.log("===========");
let testResult = new TestResult(testName);
let browser;
let subTests = [];

let app = rewire("../task1.js");
let createArray = app.__get__('createArray');


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
        "Tablica z liczbami do 6",
        "",
        1
    );
    subTests.push(test1);
    it(test1.testName, async () => {
        let result = createArray(6);
        assert.deepEqual(result, [1, 2, 3, 4, 5, 6]);
        test1.points = 1;
    });


    let test2 = new SingleTestResult(
        "Tablica z liczbami do 1",
        "",
        1
    );
    subTests.push(test2);
    it(test2.testName, async () => {
        let result = createArray(1);
        assert.deepEqual(result, [1]);
        test2.points = 1;
    })

    let test3 = new SingleTestResult(
        "Test dla liczby ujemnej (powinna być pusta tablica)",
        "",
        1
    );
    subTests.push(test3);
    it(test3.testName, async () => {
        let result = createArray(-6);
        assert.deepEqual(result, []);
        test3.points = 1;
    });

    let test4 = new SingleTestResult(
        "Test dla zera",
        "",
        1
    );
    subTests.push(test4);
    it(test4.testName, async () => {
        let result = createArray(-6);
        assert.deepEqual(result, []);
        test4.points = 1;
    });


})
