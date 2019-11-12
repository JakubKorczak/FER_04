/**

 Uruchomcie stronę przygotowaną dla zadania:
 <center><a href="lab.dom.eventy2/task3.html" target="_blank">OTWÓRZ STRONĘ W NOWEJ KARCIE</a></center>

 Na stronie znajduje się input, do którego macie dodać obslugę dwóch zdarzeń
 - keydown - które ma blokować możliwość wprowadzania wartości liczbowych
 - keyup - blokować wprowadzanie więcej niż 30 znaków

 W paragrafie o klasie $content$ ma być wyświetlony wprowadzany w pole tekst, a w spanie o id length długość wprowadzonego tekstu.


 **Hint**
 Do sprawdzenia czy znak wprowadzony jest liczbą wykorzystajcie parsowanie i NaN.
 Do pobierania wartości z input-a wykorzystajcie atrybut $value$.

 */

document.addEventListener("DOMContentLoaded", function () {
    let input = document.getElementById("text");
    let textEl = document.querySelector(".content");
    let couterEl = document.getElementById("length");

    input.addEventListener("keydown", function(e){
        let keyValue = parseInt(e.key);
        textEl.innerText = this.value;

        if( !isNaN(keyValue) ) {
            e.preventDefault();
        }
    });

    input.addEventListener("keyup", function(e){
        let length = this.value.length;

        if(length > 30) {
            this.value = this.value.substr(0, 30);
            length--;
        }

        couterEl.innerText = length;
    });

});