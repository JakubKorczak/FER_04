class DomElements {

    buildApp(tasks) {
        tasks.forEach(task => this.createTaskEl(task));
    }

    createTaskEl(task) {
        let tasksEl = document.querySelector(".tasks");
        let newTask = document.createElement("section");
        newTask.className = "task";

        let h2El = document.createElement("h2");
        h2El.innerText = task.title;
        newTask.appendChild(h2El);

        let listOperation = document.createElement("ul");
        listOperation.className = "list-group todo";

        //task description
        let newLi = document.createElement("li");
        newLi.innerText = task.description;
        newLi.className = "list-group-item active task-description";

        if (task.status === "open") {
            newLi.classList.add("active");

            let aFinish = document.createElement("a");
            aFinish.className = "btn btn-secondary float-right";
            aFinish.innerText = "Finish";

            let operationBtn = document.createElement("a");
            operationBtn.className = "btn btn-secondary float-right";
            operationBtn.innerText = "Add Operation";

            newLi.appendChild(aFinish);
            newLi.appendChild(operationBtn);
        }


        listOperation.appendChild(newLi);

        task.operations.forEach(op => this.createOperationEl(op, listOperation));

        tasksEl.appendChild(h2El);
        tasksEl.appendChild(listOperation);
    }

    createOperationEl(operation, listEl) {
        let newLi = document.createElement("li");
        newLi.className = "list-group-item task-operation";
        newLi.innerText = operation.description;

        if (operation.timeSpent === 0) {

            let startTimer = document.createElement("a");
            startTimer.className = "btn btn-primary float-right";
            startTimer.innerText = "Start timer";

            let setTimer = document.createElement("a");
            setTimer.className = "btn btn-primary float-right";
            setTimer.innerText = "Add time manually";

            newLi.appendChild(startTimer);
            newLi.appendChild(setTimer);

        }

        console.log(listEl);
        listEl.appendChild(newLi);
    }

}