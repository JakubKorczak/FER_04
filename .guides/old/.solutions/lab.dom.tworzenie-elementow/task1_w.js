/**
 ---
 <center><a href="lab.dom.tworzenie-elementow/task1_w.html" target="_blank">Otwórzcie stronę z zadaniem</a></center>

 Na stronie znajduje się tabela z zamówieniami.
 Przy każdym zamówieniu znajduje się guzik, który służy do usuwania tego zamówienia.
 Dopiszcie do niego odpowiedni event, który spowoduje, że dane zamówienie zniknie z tablicy.

 Spróbujcie zrobić to w taki sposób, żeby wszystkie guziki korzystały z tego samego eventu (wykorzystajcie this bądź event).

 */

document.addEventListener("DOMContentLoaded", function(){
    document.querySelectorAll("a.deleteBtn").forEach( btn => {
        btn.addEventListener("click", e => {
            console.log(e.target);
            let elemToDelete = e.target.parentElement.parentElement;
            elemToDelete.parentElement.removeChild(elemToDelete);
        });
    });
});