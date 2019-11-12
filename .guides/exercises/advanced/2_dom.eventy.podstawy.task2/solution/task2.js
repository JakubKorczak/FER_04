
let button1 = document.getElementById("button1");
let counter1 = document.querySelector("#button1 + p span");

button1.addEventListener("click", e =>{
    e.preventDefault();
    let value =  parseInt(counter1.innerText) + 1;
    counter1.innerText = value;
});

let button2 = document.getElementById("button2");
let counter2 = document.querySelector("#button2 + p span");

button2.addEventListener("click", e =>{
    e.preventDefault();
    let value =  parseInt(counter2.innerText) + 1;
    counter2.innerText = value;
});

let button3 = document.getElementById("button3");
let counter3 = document.querySelector("#button3 + p span");

button3.addEventListener("click", e =>{
    e.preventDefault();
    let value =  parseInt(counter3.innerText) + 1;
    counter3.innerText = value;
});