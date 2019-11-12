

let foods =[];

class Food {
    constructor(name, protein, carbs, fat) {
        this.name = name;
        this.protein = protein;
        this.carbs = carbs;
        this.fat = fat;
    }

    calcCalories(){
        return this.protein*4 + this.carbs*4 + this.fat*9;
    }

    print(){
        console.log(`${this.name} is ${this.constructor.name} - proteins:${this.protein}, carbs:${this.carbs}, fat:${this.fat} gives ${this.calcCalories()} callories `);
    }

}

class FastFood extends Food{}
class FatFreeFood extends Food{}

//test
// let prod1 = new FastFood('Fries', 3.4, 41, 15)
// let prod2 = new FastFood('Donut', 4.9, 51, 25)
// let prod3 = new FatFreeFood('Greek Yogurt', 10, 3.6, 0.4)
//
// prod1.print();
// prod2.print();
// prod3.print();

document.addEventListener("DOMContentLoaded", function() {
    document.querySelector("form").addEventListener("submit", function (e) {
        e.preventDefault();
        let name = document.querySelector("#name").value;
        let proteins = parseInt(document.querySelector("#proteins").value);
        let carbs = parseInt(document.querySelector("#carbs").value);
        let fat = parseInt(document.querySelector("#fat").value);

        let tmp = new Food(name, proteins, carbs, fat);
        let food;
        if (tmp.calcCalories() > 250) {
            food = new FastFood(name, proteins, carbs, fat);
        } else {
            food = new FatFreeFood(name, proteins, carbs, fat);
        }

        foods.push(food);
        console.log(foods);
        createFoodList(foods);

    })
});

let createFoodElement = function(food){
    let newLi = document.createElement("li");
    newLi.innerText = food.name+" type="+food.constructor.name+" callories: "+food.calcCalories();
    document.querySelector("#products").appendChild(newLi);
};

let createFoodList = function(foodArray){
    document.querySelector("#products").innerHTML = "";
    foodArray.forEach( food => createFoodElement(food) );
}

