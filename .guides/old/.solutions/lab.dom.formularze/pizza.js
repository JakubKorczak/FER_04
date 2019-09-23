/**

 ---
 <center><a href="lab.dom.formularze/pizza.html" target="_blank">Otwórzcie stronę z zadaniem</a></center>


 Na stronie znajduje się formularz do zamówienia pizzy. W formularzu znajduje się pole z checkboxami, w którym użytkownik może wybrać sobie dodatki.
 Cena każdego z dodatków jest trzymana w atrybucie ```data-price```.
 Napiszcie takie eventy, żeby po zaznaczeniu checkoxa wyświetlała się poprawna kwota zamówienia oraz po wysłaniu formularza
 wewnątrz elementu ```page-info``` wyświetliła się następująca informacja: **"Do zapłaty: [odpowiednia kwota]"**, gdzie [odpowiednia kwota] to wartość zamówienia.

 Pamiętajcie o tym, że kliknięcie w przycisk (zatwierdzienie formularza) wywołuje domyślną akcję przeładowania strony.
 Zablokujcie tę akcję, aby móc zobaczyć wpisaną informację do elmentu ```page-info```.

 Zwróćie uwagę na dwa specjalne checkboxy:
 * Wyczyść -  powinien odznaczyć wszystkie inne opcje,
 * Wszystkie dodatki - powinien zaznaczyć wszystkie inne opcje (poza none).

 */

document.addEventListener("DOMContentLoaded", function(){

    addChecboxesEvents();
    form();

});

let form = function(){
    document.querySelector("form").addEventListener("submit", function(e){
        e.preventDefault();
        let priceEl = document.querySelector("#price");
        let payment = document.querySelector(".page-info");

        payment.innerText = "Do zapłaty: "+priceEl.innerText;
    })
}

let addChecboxesEvents = function(){
    let allCheckboxes = document.querySelectorAll("input[type=checkbox]");
    let firstCheckbox = allCheckboxes[0];
    let lastCheckbox = allCheckboxes[allCheckboxes.length - 1];

    //ważna jest kolejność dopinania elementów

    firstCheckbox.addEventListener("click", function(){
        if (this.checked){
            allCheckboxes.forEach( el => el.checked = true);
            lastCheckbox.checked = false;
        }
    });

    lastCheckbox.addEventListener("click", function(){
        if (this.checked){
            allCheckboxes.forEach( el => el.checked = false);
            lastCheckbox.checked = true;
        }
    });


    allCheckboxes.forEach(el => el.addEventListener("click", e => {
        calcToppings();
    }));


};

let calcToppings = function(){
    let selectedToppings = document.querySelectorAll("input[type=checkbox][data-price]:checked");
    let priceEl = document.querySelector("#price");
    let sum = 0;

    selectedToppings.forEach( el => {
        sum +=  parseFloat(el.dataset.price);
    });

    priceEl.innerText = sum.toFixed(2)+"zł";

}

