

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

