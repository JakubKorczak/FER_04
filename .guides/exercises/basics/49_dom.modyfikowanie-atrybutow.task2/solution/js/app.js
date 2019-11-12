
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
