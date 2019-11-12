
let Client = function(shortcut, fullname){
    this.shortcut = shortcut;
    this.fullname = fullname;
    this.tasks = [];
};

Client.prototype.addTask = function(task){
    this.tasks.push(task);
};

Client.prototype.printTasks = function(){
    this.tasks.forEach( task => console.log(task.toString()) );
};