/**
<center><a href="lab.dom.modyfikowanie-atrybutow2/index.html">OTWÓRZ STRONĘ W NOWEJ KARCIE</a></center>
---

Do każdego podpunktu stwórzcie odpowiednią funkcję o nazwie podanej w treści zadania.

# Zadanie 1
Pobranie informacji z atrybutu data:
- znajdźcie element o id menu,
- stwórzcie funkcję getDataInfo(element) do której przekażecie , jako argument , znaleziony element,
- stwórzcie w funkcji nową tablicę i wypełnijcie ją wartościami pobranymi z atrybutu data-info każdego elementu li. Zauważcie, że elementy li to dzieci elementu o id menu.
- zwróćcie tą tablicę.

# Zadanie 2
Szukanie elementu po id:
- znajdźcie element o id main-contener.
- stwórzcie funkcję getElementClass(element) do której przekażecie , jako argument , znaleziony element.
- zwróćcie tablicę złożoną z nazw klas tego elementu.

# Zadanie 3
Szukanie elementu po klasie:
- znajdźcie element o klasie pink-color.
- stwórzcie funkcję getElementText(element) do której przekażecie, jako argument, znaleziony element.
- zwróćcie z funkcji tekst, znajdujący się w tym elemencie

# Zadanie 4
Szukanie elementu po klasie:
- znajdźcie elementy o klasie images.
- stwórzcie funkcję getElementAlt(elements) do której przekażecie, jako argument, znalezione elementy.
- stwórzcie w funkcji tablicę i wypełnijcie ją wartościami pobranymi z atrybutu alt obrazków. Pobierzcie te atrybuty z przekazanych jako argument elementów.

# Zadanie 5
Szukanie elementu po klasie:
- znajdźcie elementy o klasie my-link.
- stwórzcie funkcję getElementHref(elements) do której przekażecie, jako argument, znalezione elementy.
- stwórzcie w funkcji tablicę i wypełnijcie ją wartościami pobranymi z atrybutu href linków. Pominięte mają być te elementy, które mają pustą wartość dla atrybutu href bądź nie posiadają atrybutu href. Pobierzcie te atrybuty z przekazanych jako argument elementów.
 */

console.log("=== EX1 ===");

let menuEl = document.getElementById("menu");

let getDataInfo = function(element){
    let liElems = element.querySelectorAll("li");
    return Array.from(liElems).map( el => el.dataset.info );
};
console.log(getDataInfo(menuEl));

console.log("=== EX2 ===");

let mainContentEl = document.getElementById("main-contener");
let getElementClass = function (element){
    return Array.from(element.classList).map( el => el );
};
console.log(getElementClass(mainContentEl));

console.log("=== EX3 ===");

let pinkElem = document.querySelector(".pink-color");
let getElementText = function(element){
  return element.innerText;
};
console.log(getElementText(pinkElem));

console.log("=== EX4 ===");

let imagesElems = document.getElementsByClassName("images");
let getElementAlt = function(elements){
    return Array.from(elements).map( element => element.getAttribute("alt") );
};
console.log(getElementAlt(imagesElems));

console.log("=== EX5 ===");

let myLinkElems = document.getElementsByClassName("my-link");
let getElementHref = function(elements){
    let arr = [];
    Array.from(elements).forEach( element => {
        if(element.hasAttribute("href") && element.getAttribute("href").length > 0){
            arr.push(element.getAttribute("href"));
        }
    });
    return arr;
};

console.log(getElementHref(myLinkElems));
