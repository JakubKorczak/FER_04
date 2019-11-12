/**
 ---
 Na stronie znajduje się sekcja z dwoma elementami article.
 W każdym artykule znajdują się elementy h2, a oraz div o klasie content, który jest ukryty w CSS.

 Naszym zadaniem jest:
 - ustawienie na pierwszym linku eventu, który spowoduje, że kiedy użytkownik w niego kliknie pokaże się element o klasie content (należący do tego artukułu).
 - ustawienie na drugim linku eventu, który spowoduje, że kiedy użytkownik na niego najedzie pokaże się element o klasie 'content' (należący do tego artukułu).

 ---
 <center><a href="lab.dom.eventy.podstawy2/task3.html" target="_blank">OTWÓRZ STRONĘ W NOWEJ KARCIE</a></center>

 */

let showMore1 = document.querySelector("article:nth-of-type(1) a");
let hideMore1 = document.querySelector("article:nth-of-type(1) .content a");
let content1 = document.querySelector("article:nth-of-type(1) .content");

let showMore2 = document.querySelector("article:nth-of-type(2) a");
let hideMore2 = document.querySelector("article:nth-of-type(2) .content a");
let content2 = document.querySelector("article:nth-of-type(2) .content");

showMore1.addEventListener("click", e=>{
    e.preventDefault();
    content1.classList.remove("hide");
});
hideMore1.addEventListener("click", e=>{
    e.preventDefault();
    content1.classList.add("hide");
});

showMore2.addEventListener("click", e=>{
    e.preventDefault();
    content2.classList.remove("hide");
});
hideMore2.addEventListener("click", e=>{
    e.preventDefault();
    content2.classList.add("hide");
});