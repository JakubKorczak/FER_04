
console.log("=== EX1 ===");

let ex1El = document.querySelector(".ex1");
ex1El.querySelectorAll("li:not([data-direction])").forEach( el => el.dataset.direction = "up");
ex1El.querySelectorAll("li:nth-of-type(2n)").forEach( el => el.style.backgroundColor = "green");
ex1El.querySelectorAll("li:nth-of-type(5n)").forEach( el => el.classList.add("big"));
ex1El.querySelectorAll("li:nth-of-type(3n)").forEach( el => el.style.textDecoration = "underline");

console.log("=== EX2 ===");
let imageEl = document.querySelector(".content img");
imageEl.classList.add("left");
imageEl.style.width = "200px";

let footerEl = document.querySelector("footer");
footerEl.style.clear = "both";

let navLiElems = document.querySelectorAll("nav li");
navLiElems.forEach( el => el.style.display = "inline-block" );

console.log("=== EX3 ===");

let ex3El = document.querySelector(".ex3");

let chromeImgEl = ex3El.querySelector(".chrome");
let chromeLinkEl = ex3El.querySelector(".chrome + a");

chromeImgEl.style.width = "100px";
chromeLinkEl.innerText = "Chrome";

let edgeImgEl = ex3El.querySelector(".edge");
let edgeLinkEl = ex3El.querySelector(".edge + a");

edgeImgEl.style.backgroundImage = "url(images/edge.png)";
edgeLinkEl.setAttribute("href","https://edge.microsoft.com");

let ffImgEl = ex3El.querySelector(".firefox");
let ffLinkEl = ex3El.querySelector(".firefox + a");

ffImgEl.style.backgroundImage = "url(images/firefox.png)";
ffLinkEl.innerText = "Firefox";
ffLinkEl.setAttribute("href","https://firefox.com");

console.log("=== EX4 ===");

let nameEl = document.getElementById("name");
nameEl.innerHTML = "Grzegorz Brzęczyszczykiewicz";

let colorEl = document.getElementById("fav_color");
colorEl.innerHTML = "Niebieski";

let mealEl = document.getElementById("fav_meal");
mealEl.innerHTML = "Bigos";

console.log("=== EX5 ===");

let ex5El = document.querySelector(".ex5");

ex5El.querySelector("ul").classList.add("menu");
ex5El.querySelectorAll("li").forEach( el => el.classList.add("menuElement"));
ex5El.querySelectorAll(".error").forEach( el => el.classList.remove("error") );

console.log("=== EX6 ===");
// Dodajcie do każdego elementu listy atrybut data-id przyjmujący kolejne liczby całkowite (zaczynając od 1).
// Rozwiążcie to zadanie na dwa sposoby:
//     - używając datasetu.
// - żywając metody setAttribute.

let ex6El = document.querySelector(".ex6");
let counter = 1;
ex6El.querySelectorAll("li").forEach( el => el.dataset.id = counter++);
// ex6El.querySelectorAll("li").forEach( el => el.setAttribute("data-id", counter++));