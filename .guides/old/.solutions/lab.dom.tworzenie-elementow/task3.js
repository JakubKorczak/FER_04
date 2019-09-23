/**

 ---
 <center><a href="lab.dom.tworzenie-elementow/task3.html" target="_blank">Otwórzcie stronę z zadaniem</a></center>

 Na stronie znajduje się guzik.
 Musiszcie dopisać do niego event w taki sposób, żeby po kliknięciu w niego guzik został usunięty ze strony.

 */

document.addEventListener("DOMContentLoaded", function(){

    document.querySelector("#remove").addEventListener("click", function () {
        this.parentElement.removeChild(this);
    })

});