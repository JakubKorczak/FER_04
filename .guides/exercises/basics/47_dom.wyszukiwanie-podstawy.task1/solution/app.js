
let task1 = () => {
    let firstEl = document.querySelector("h1");
    let titleEl = document.querySelector(".title");
    let animationEl = document.querySelector("[data-animation]");

    return {firstEl,titleEl, animationEl};
}

console.log(task1());

let task2 = () => {
    let divs = document.querySelectorAll("div").length;
    let offers = document.querySelectorAll(".oferts").length;
    let hrefs = document.querySelectorAll("[href]").length;

    return {divs, offers, hrefs};
}

console.log(task2());

let task3 = () => {
    let home1El = document.getElementById("home");
    let firstEl = document.querySelector("li[data-direction]");
    let blockEl = document.querySelector(".block");

    return {home1El, firstEl, blockEl};
}

console.log(task3());

let task4 = () => {
    let navLiEl = document.querySelectorAll("nav li");
    let allDivsP = document.querySelectorAll("div p");
    let articleDivs = document.querySelectorAll("article div");

    return {navLiEl, allDivsP, articleDivs};
}

console.log(task4());

let task5 = () => {
    let el = document.querySelector("article.first");
    let h1Elems = el.querySelectorAll("h1");
    return h1Elems.length;
}

console.log(task5());