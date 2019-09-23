/**

 ---
 <center><a href="lab.dom.tworzenie-elementow/todo.html" target="_blank">Otwórzcie stronę z zadaniem</a></center>

 Na stronie znajduje się pole do dodawania nowych zadań dowykonywania.
 Dodajcie zdarzenie, że po kliknięciu pprzycisku "Add" - zadanie zostanie dodane do listy o klasie todo.
 Struktura elementu ma taka sama jak obecnych elementów na liście.

 Dodajcie zdarzenie, które będzie powodować, że po kliknięciu na przycisk "Finish" element zostanie przeniesiony na listę "Done".
 Dodajcie zdarzenie, które będzie powodować, że po kliknięciu na przycisk "Restore" element zostanie przeniesiony na listę "Todo".

 **Hint**
 Nie możecie spinać zdarzenia z przyciskami w listach, ponieważ mogą dojść nowe elementy do list.
 Wykorzystajcie elementy zawsze istniejace (listy) i sprawdźcie co wywołało propagację zdarzeń.

 */


document.addEventListener("DOMContentLoaded", function(){

    new Todo();

});

let Todo = function(){
    this.input = document.querySelector("#newTask");
    this.addBtn = document.querySelector("#newTask + input");

    this.todoList = document.querySelector("ul.todo");
    this.doneList = document.querySelector("ul.done")

    this.initAddEvent();
    this.initFinishBtn();
    this.initRestoreBtn();
};

Todo.prototype.initAddEvent = function(){
    this.addBtn.addEventListener("click",  e => {
       let value = this.input.value;
       this.addElementToList(value);
    });
};

Todo.prototype.addElementToList = function(value){
    let newLi = document.createElement("li");
    newLi.classList.add("list-group-item");
    newLi.innerText = value;

    let newBtn = document.createElement("a");
    newBtn.className = "btn btn-primary float-right";
    newBtn.innerText = "Finish";

    newLi.appendChild(newBtn);

    this.todoList.appendChild(newLi);
};

Todo.prototype.initFinishBtn = function(){
    this.todoList.addEventListener("click", e =>{
        if(e.target.tagName === "A"){
            e.preventDefault();
            this.doneList.appendChild(e.target.parentElement);
            e.target.innerText = "Restore";
            e.target.classList.remove("btn-primary");
            e.target.classList.add("btn-success");
        }
    })
};

Todo.prototype.initRestoreBtn = function(){
    this.doneList.addEventListener("click", e =>{
        if(e.target.tagName === "A"){
            e.preventDefault();
            this.todoList.appendChild(e.target.parentElement);
            e.target.innerText = "Finish";
            e.target.classList.remove("btn-success");
            e.target.classList.add("btn-primary");
        }
    })
};
