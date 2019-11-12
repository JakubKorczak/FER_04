let kaczucha = new Duck();
//pokazać, że metody są w prototypie
console.log(kaczucha);
kaczucha.print();
kaczucha.quack();
kaczucha.swim();

let dzikaKaczucha = new WildDuck();
dzikaKaczucha.print();
dzikaKaczucha.quack();
dzikaKaczucha.swim();

let krzyzoKaczucha = new MallardDuck();
krzyzoKaczucha.print();
krzyzoKaczucha.swim();
krzyzoKaczucha.quack();

kaczucha.fly();
dzikaKaczucha.fly();
krzyzoKaczucha.fly();

let gumowaKaczucha = new RubberDuck();
gumowaKaczucha.quack();
gumowaKaczucha.swim();
gumowaKaczucha.fly();