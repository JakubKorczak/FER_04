/**

 ---
 <center><a href="lab.dom.tworzenie-elementow/task2.html" target="_blank">Otwórzcie stronę z zadaniem</a></center>

 Na stronie znajduje się tablica z informacjami na temat zamówień (z dwoma już wprowadzonymi zamówieniami).

 Poniżej znajduje się formularz do wypełnienia nowego zamówienia.

 Napiszcie event, który pobierze informacje z inputów (el.value) i wprowadzi nowy wpis do tablicy.

 */

document.addEventListener("DOMContentLoaded", function(){

    let orders = document.getElementById("orders");
    let orderIdEl = document.getElementById("orderId");
    let itemEl = document.getElementById("item");
    let quantityEl = document.getElementById("quantity");
    let addEl = document.getElementById("add");

    addEl.addEventListener("click", function(){
        let orderId = orderIdEl.value;
        let item = itemEl.value;
        let quantity = quantityEl.value;

        let newTr = document.createElement("tr");
        let idTd = document.createElement("td");
        let itemTd = document.createElement("td");
        let quantityTd = document.createElement("td");

        idTd.innerText = orderId;
        itemTd.innerText = item;
        quantityTd.innerText = quantity;

        newTr.appendChild(idTd);
        newTr.appendChild(itemTd);
        newTr.appendChild(quantityTd);

        let tbodyEl = orders.querySelector("tbody");
        if(tbodyEl){
            tbodyEl.appendChild(newTr);
        }else{
            orders.appendChild(newTr);
        }

    })


});