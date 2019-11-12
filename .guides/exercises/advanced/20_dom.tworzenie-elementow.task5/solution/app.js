/**

 ---
 <center><a href="lab.dom.tworzenie-elementow/task4.html" target="_blank">Otwórzcie stronę z zadaniem</a></center>


 Na stronie znajduje się lista z wpisami i guzik.
 Napiszcie taki event, żeby po kliknięciu w guzik z listy zostały usunięte wszystkie jej dzieci.
 Element ul.list powinien pozostać na stronie.

 */

document.addEventListener("DOMContentLoaded", function(){

    document.querySelector("#remove").addEventListener("click", function () {
        let elementsToDelete = [ ...document.querySelector("ul.list").children];
        elementsToDelete.forEach( el => el.parentElement.removeChild(el));
    })

});