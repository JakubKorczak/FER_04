/**
---
 <center><a href="lab.es6.classes/index.html">Otwórzcie stronę z zadaniem w nowej karcie</a></center>

 Stwórzcie klasę Duck.
 Będzie to klasa abstrakcyjna, z której będą dziedziczyć inne kaczki.

 Stwórzcie wewnątrz tej klasy konstruktor i metody:
 - constuctor - którego zadaniem będzie ustawienie typu kaczki na "zwykła kaczka" np. this.type = "zwykla"
 - quack() - wypisuje "kwa kwa"
 - swim() - wypisuje "płynę...""
 - print() - wypisuje "Wygląda jak zwykla kaczka". Skorzystaj z ustawienia type do wypisania typu kaczki.

 Stwórz obiekt kaczucha. Wywołaj dla niego wszystkie metody.

 */

class Duck{
    constructor(){
        this.type = "zwykła";
    }

    quack(){
        console.log("kwa kwa");
    }

    swim(){
        console.log("płynę...");
    }

    print(){
        console.log("Wygląda jak "+this.type+" kaczka");
    }

    //task4
    fly(){
        console.log(`Kaczka ${this.type} leci`);
    }

}

let kaczucha = new Duck();
//pokazać, że metody są w prototypie
console.log(kaczucha);
kaczucha.print();
kaczucha.quack();
kaczucha.swim();