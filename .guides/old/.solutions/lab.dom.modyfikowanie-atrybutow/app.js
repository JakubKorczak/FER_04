/**

<center><a href="lab.dom.modyfikowanie-atrybutow/index.html">OTWÓRZ STRONĘ W NOWEJ KARCIE</a></center>
---

# Zadanie 1
- stwórzcie funkcję getDatasInfo(elements), do której przekażecie jako argument zmienną links (pamiętajcie o tym, że jest to pseudotablica)
- stwórzcie w funkcji nową tablicę i wypełnijcie ją wartościami pobranymi z atrybutu data każdego elementu li (do przechodzenia po atrybutach skorzystajcie z pętli for in)
- zwróćcie utworzoną tablicę.

# Zadanie 2
Przeanalizujcie kod HTML i JavaScript.
W pliku jest przygotowanych kilka zmiennych, w których zapisane są wyszukane elementy DOM.
- wypiszcie w konsoli wszystkie te zmienne.
- sprawdźcie, które z nich to pseudotablice.
- w przypadku pseudotablic przeiterujcie po nich i wypiszcie nazwę tagu oraz klasy dla każdego elementu.

# Zadanie 3
- Wypiszcie w konsoli wartość innerText dla elementów zmiennej blocks.
- Natępnie ustawcie wartość innerText na "Nowa wartość diva o klasie blocks".

# Zadanie 4
- znajdźcie na stronie element o class superFooter
- stwórzcie funkcję getId(element), do której przekażecie jako argument znaleziony element
- pobierzcie w funkcji nazwę id elementu i zwróćcie ją

# Zadanie 5
- stwórzcie funkcję getTags(elements), do której przekażecie jako argument zmienną childElements (pamiętajcie o tym, że jest to pseudotablica)
- stwórzcie w funkcji nową tablicę i wypełnij ją nazwami tagów pobranymi z elementów znajdujących się w childElements
- zwróćcie tą tablicę.

# Zadanie 6
- stwórzcie funkcję getClassInfo(element), do której przekażecie jako argument zmienną banner
- zwróćcie tablicę z listą klas, pobraną z przekazanego do funkcji argumentu.
 */


var homeElement = document.getElementById("home");
var childElements = document.querySelector(".oferts").querySelectorAll('div, h2, p');
var banner = document.querySelector(".ban");
var blocks = document.querySelectorAll(".block");
var links = document.querySelector(".links").querySelectorAll('li');

console.log("=== EX1 ===");

function getDatasInfo(elements){
    let arr = [];
    Array.from(elements).forEach( elem => {
        let dataset = elem.dataset;
        for(attribute in dataset){
            arr.push(dataset[attribute]);
        }
    });
    return arr;
}

let datasetValues = getDatasInfo(links);
console.log(datasetValues);

console.log("=== EX2 ===");

console.log(homeElement);
console.log(childElements);
childElements.forEach( el =>{
    console.log(el.tagName);
    console.log(el.className);
});

console.log(banner);

console.log(blocks);
blocks.forEach( el => console.log(el.tagName, el.className) );

console.log(links);
links.forEach( el => console.log(el.tagName, el.className) );

console.log("=== EX3 ===");

blocks.forEach( el => console.log(el.innerText));
blocks.forEach( el => el.innerText = "Nowa wartość diva o klasie blocks" );

console.log("=== EX4 ===");

let superFooterEl = document.querySelector(".superFooter");
function getId(element){
    return element.id;
}
console.log(getId(superFooterEl));

console.log("=== EX5 ===");

function getTags(elements){
    return Array.from(elements).map( el => el.tagName );
}
console.log(getTags(childElements));

console.log("=== EX6 ===");

let getClassInfo = function(element){
    return Array.from(element.classList).map( el => el);
};
console.log(getClassInfo(banner));


