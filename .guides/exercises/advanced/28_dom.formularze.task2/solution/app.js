/**

 ---
 <center><a href="lab.dom.formularze/task1.html" target="_blank">Otwórzcie stronę z zadaniem</a></center>

 Na stronie znajduje się formularz do zamówienia. Jest w nim sekcja odpowiedzialna za wystawienie faktury.
 Napiszcie kod JavaScript, który spowoduje, że sekcja ta jest widoczna tylko i wyłącznie wtedy, kiedy zaznaczony jest checkbox "Chcę otrzymać fakturę".


 */

document.addEventListener("DOMContentLoaded", function(){

    invoiceElems();

});

let invoiceElems = function () {

    let invoiceForm = document.querySelector("#invoiceData");
    invoiceForm.style.display = "none";

    let invoiceBtn = document.querySelector("#invoice");
    invoiceBtn.addEventListener("change", function(e){
        if(this.checked){
            invoiceForm.style.display = "block";
        }else{
            invoiceForm.style.display = "none";
        }
    })


};