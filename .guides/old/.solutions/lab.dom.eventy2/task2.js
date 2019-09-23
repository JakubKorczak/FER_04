/**

 Uruchomcie stronę przygotowaną dla zadania:
 <center><a href="lab.dom.eventy2/task2.html" target="_blank">OTWÓRZ STRONĘ W NOWEJ KARCIE</a></center>

 Na stronie znajduje się jeden element div.
 Napiszcie dla niego event, który będzie wypisywał położenie kursora myszy w chwili, gdy znajduje się nad tym elementem - wartość ma być zmieniana przy poruszaniu kursorem
 .
 Wyszukajcie zarówno położenie kursora globalne (czyli odległość od górnego lewego rogu okna), jak i lokalne (czyli odległość od lewego górnego rogu elementu).
 Do wyliczenia lokalnej pozycji kursora wykorzystajcie pozycje box-a (offsetTop, offsetLeft)

 */

document.addEventListener("DOMContentLoaded", function(){

    let boxEl = document.getElementById("box");
    let globalX = document.getElementById("globalX");
    let globalY = document.getElementById("globalY");
    let localX = document.getElementById("localX");
    let localY = document.getElementById("localY");

    boxEl.addEventListener("mousemove", function(e){
        let globalXVal = e.clientX;
        let globalYVal = e.clientY;

        let boxX = this.offsetLeft;
        let boxY = this.offsetTop;

        globalX.innerText = globalXVal;
        globalY.innerText = globalYVal;

        localX.innerText = globalXVal - boxX;
        localY.innerText = globalYVal - boxY;
    })

});