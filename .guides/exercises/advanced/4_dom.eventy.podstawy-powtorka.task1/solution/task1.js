/**
 ---
 Na stronie znajdują się trzy elementy div.

 Napiszcie wspólny event zmieniający kolor tła tylko w klikniętym divie.
 Użyj do tego obiektu obiekt event.

 # Hint:
 Żeby uzyskać losowy kolor użyj poniższego kodu:

 ```js
 let randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
 ```
 ---
 <center><a href="lab.dom.eventy.podstawy2/task1.html" target="_blank">OTWÓRZ STRONĘ W NOWEJ KARCIE</a></center>


 */

document.querySelectorAll(".box").forEach( el =>
    el.addEventListener("click", e => {
        console.log("click");
        let randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
        e.target.style.backgroundColor = randomColor;
    })
);
