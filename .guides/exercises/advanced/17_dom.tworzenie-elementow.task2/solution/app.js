/**

 ---
 <center><a href="lab.dom.tworzenie-elementow/task1.html" target="_blank">Otwórzcie stronę z zadaniem</a></center>

 Na stronie przypisanej do zadania znajduje się lista i guzik.

 Dopiszcie odpowiednie eventy do nich w taki sposób, żeby po kliknięciu w guzik dodał się nowy element do listy.

 Element powinien mieć w sobie informacje na temat tego, ile elementów jest w liście w chwili jego dodania.

 */

document.addEventListener("DOMContentLoaded", function(){
    let ulElem = document.querySelector(".menu");
    let btnElem = document.getElementById("add");

    btnElem.addEventListener("click", function(e){
        let count = ulElem.children.length;
        let newLi = document.createElement("li");
        newLi.innerText = count;
        ulElem.appendChild(newLi);
    });
})