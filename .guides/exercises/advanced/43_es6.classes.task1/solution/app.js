/**

 ---
 <center><a href="lab.es6.classes/task1_w.html">Otwórzcie stronę z zadaniem w nowej karcie</a></center>

 Stwórzcie klasę abstrakcyjną Vehicle, która ma atrybut name i jest ustawiany przez konstruktor.

 Stwórzcie trzy obiekty boat, car i plane na podstawie odpowiednich klas dziedziczących po Vehicle.

 W odpowiednich klasach stwórzcie metody, które będą wypisywały w konsoli informacje wyróżniające te pojazdy.
 Zróbcie to w taki sposób, aby obiekt boat nie mógł jeździć ani latać, itp.

 */

class Vehicle {
    constructor(name){
        this.name = name;
    }
}

class Boat extends Vehicle{
    sail(){
        console.log(this.name + " is sailing");
    }
}

class Car extends Vehicle{
    drive(){
        console.log(this.name + " is driven");
    }
}

class Plane extends  Vehicle{
    fly(){
        console.log(this.name + " is flying");
    }
}

let boat = new Boat("Sportina");
let car = new Car("Tesla");
let plane = new Plane("Cesna");

boat.sail();
car.drive();
plane.fly();