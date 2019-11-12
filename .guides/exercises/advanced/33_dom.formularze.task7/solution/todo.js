
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
