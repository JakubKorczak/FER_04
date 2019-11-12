// let tasks = [];
//
// let task1 = new Task("task1", "desc1");
// let task2 = new Task("task2", "desc2");
//
// let operation1_1 = new Operation("Operation1");
// operation1_1.setTimeSpent(1200);
//
// let operation1_2 = new Operation("Operation2");
//
// task1.addOperation(operation1_1);
// task1.addOperation(operation1_2);
// task2.addOperation(operation1_1);
//
// tasks.push(task1);
// tasks.push(task2);
//
// console.log(JSON.stringify(tasks));


document.addEventListener("DOMContentLoaded", function () {

    let url = "https://api.myjson.com/bins/17c96m";

    fetch(url)
        .then( resp => {
            if(resp.ok){
                return resp.json();
            }else{
                throw new Error("Błąd sieci");
            }
        })
        .then( tasks => {
            let app = new DomElements();
            app.buildApp(tasks);
        });

});
