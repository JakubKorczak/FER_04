class Task{

    constructor(title, description){
        this.title = title;
        this.description = description;
        this.status = "open";
        this.operations = [];
    }

    addOperation(operation){
        this.operations.push(operation);
    }

}