/**
 ---
 Na stronie znajdują się dwa elementy pokazujące wielkość okna.
 Dopiszcie event do okna (obiekt globalny window), który spowoduje, że elementy te będą pokazywały poprawne wartości nawet po przeskalowaniu okna.

  ---
 <center><a href="lab.dom.eventy.podstawy2/task2.html" target="_blank">OTWÓRZ STRONĘ W NOWEJ KARCIE</a></center>
 */


document.getElementById("windowWidth").innerText = window.innerWidth;
document.getElementById("windowHeight").innerText = window.innerHeight;

window.addEventListener("resize", function(){
    document.getElementById("windowWidth").innerText = window.innerWidth;
    document.getElementById("windowHeight").innerText = window.innerHeight;
});