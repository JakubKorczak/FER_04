let text = "JavaScript Rules";
console.log(text.upperLower());

let arr = [1,2,3,4,5];
arr.printValues();


let employee = new Employee("Jan", "Nowak", 50);
let client = new Client("Client 1", "Client full name");
let task = new Task("Some task 1", client);
task.addOperation("Some operation 1", employee, 30);
task.addOperation("Some operation 2", employee, 60);

let task2 = new Task("Some task 2", client);
task2.addOperation("Some operation 1", employee, 25);
task2.addOperation("Some operation 2", employee, 60);

client.printTasks();