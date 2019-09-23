/**
 Na stronie znajdują się trzy guziki i jeden licznik.
 Napiszcie jeden wspólny event dla wszystkich guzików, który spowoduje, że po kliknięciu w guzik licznik zwiększy wartość o 1.
 */

let button1 = document.getElementById("button1");
let button2 = document.getElementById("button2");
let button3 = document.getElementById("button3");

let counter = document.querySelector("span.counter");

function increaseCounter(){
    let value = parseInt(counter.innerText) + 1;
    counter.innerText = value;
}

button1.addEventListener("click", increaseCounter);
button2.addEventListener("click", increaseCounter);
button3.addEventListener("click", increaseCounter);