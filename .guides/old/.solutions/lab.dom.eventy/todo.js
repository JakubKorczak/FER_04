/**

 Napiszcie zdarzenie do przycisków na liście zadań do wykonania tak aby po kliknięciu
 - dodać klasę $finished$ do elementu li dla danego zadania
 - przyskowi, który został kliknięcy
     - zabrać klasę $btn-primary$
     - dodac klasę $btn-success$
     - ustawić tekst na "Ukończone"
     - odpiąć zdarzenie
     - dodać nowe zdarzenie na kliknięciu, które będzie blokowało domyślne przeładowywanie strony po kliknięciu

 ---
 <center><a href="lab.dom.eventy/todo.html" target="_blank">OTWÓRZ STRONĘ W NOWEJ KARCIE</a></center>

 ---
 Zwróćcie uwagi na klasy, za pomocą których jest ostylowany wygląd.
 Są to klasy z bootstrapa, dzięki któremu możemy bardzo szybko uzyskać bazowy fajny wygląd aplikacji.
 Zobaczcie jak mogą wyglądać przyciski na stronie: https://getbootstrap.com/docs/4.3/components/buttons/

 */

document.addEventListener("DOMContentLoaded", function(){
    let buttons = document.querySelectorAll(".todo-app li a.btn");
    buttons.forEach( btn => btn.addEventListener("click", setTaskFinished));
});

function setTaskFinished(e){
    e.preventDefault();
    let id = this.dataset.id;
    //przypomnienie z preworka szablonów tektów
    let liElem = document.querySelector(`.todo-app li[data-id="${id}"]`);
    liElem.classList.add("finished");

    this.classList.remove("btn-primary");
    this.classList.add("btn-success");
    this.removeEventListener("click",setTaskFinished);
    this.addEventListener("click",blockDefaultAction);
}

function blockDefaultAction(e){
    e.preventDefault();
    console.log("blocked");
}