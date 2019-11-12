

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


