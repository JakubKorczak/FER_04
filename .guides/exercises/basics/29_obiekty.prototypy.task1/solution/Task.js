

let Task = function(subject, client){
    this.subject = subject;
    this.status = "not started"; //available "in progress", "finished"
    this.client = client;
    this.operations = [];
    client.addTask(this);
};

Task.prototype.addOperation = function(description, employee, minutes){
    let operation = new TaskOperation(this, description, employee, minutes);
    this.operations.push(operation);
};

Task.prototype.getTotalTime = function(){
    return this.operations.reduce( (prev, op) =>  prev += op.minutes, 0 );
};

Task.prototype.calcCost = function(){
    return this.operations.reduce( (prev, op) =>  prev += ((op.minutes/60)*op.employee.hourSallary), 0);
};

Task.prototype.toString = function(){
    return "Task: "+this.subject+" current spend time: "+this.getTotalTime()+" current cost: "+this.calcCost();
};
