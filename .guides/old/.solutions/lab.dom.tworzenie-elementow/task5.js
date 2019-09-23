/**

 ---
 <center><a href="lab.dom.tworzenie-elementow/task5.html" target="_blank">Otwórzcie stronę z zadaniem</a></center>


 Na stronie znajdują się dwie listy.
 Obok każdego wpisu (w obu listach) znajdują się przyciski.
 Napiszcie taki kod JavaScript, żeby po przyciśnięciu guzika element listy był przenoszony do drugiej listy.

 Pamiętajcie, że element może być przenoszony wiele razy (np. z listy 1 do listy 2, a potem z powrotem do listy 1).

 Rozwiążcie to zadanie na dwa sposoby
 - przypinając zdarzenie do przycisków
 - przypinając zdarzenie do list ul

 */

document.addEventListener("DOMContentLoaded", function(){

    let list1 = document.getElementById("list1");
    let list2 = document.getElementById("list2");

    //v1
    // document.querySelectorAll(".listContainer a.moveBtn").forEach( el => {
    //     el.addEventListener("click", function(e){
    //         e.preventDefault();
    //
    //         let elementToMove = this.parentElement;
    //
    //         let atList = elementToMove.parentElement.id;
    //         if( atList === "list1"){
    //             list2.appendChild(elementToMove);
    //         }else{
    //             list1.appendChild(elementToMove);
    //         }
    //
    //     })
    // })

    //v2
    document.querySelectorAll(".listContainer ul").forEach( el => {
        el.addEventListener("click", function(e){
            e.preventDefault();

            let clickedElement = e.target;

            if(clickedElement.tagName === "A" && clickedElement.className.indexOf("moveBtn") !== -1){
                let elementToMove = clickedElement.parentElement;

                let atList = this.id;
                if( atList === "list1"){
                    list2.appendChild(elementToMove);
                }else{
                    list1.appendChild(elementToMove);
                }
            }

        })
    })


});