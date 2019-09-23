/**

 ---
 <center><a href="lab.es6.classes/index.html">Otwórzcie stronę z zadaniem w nowej karcie</a></center>

 Na bazie klasy Duck stwórzcie kolejną o nazwie RubberDuck.

 Nadpiszcie odpowiednio konstruktor, tak aby podczas wywoływania metody wyswietl() typ kaczki zmienił się na "gumowa".

 Stwórzcie obiekt gumowaKaczucha.
 Wywołajcie dla niego wszystkie metody.

 Czy widzicie coś niepokojącego? ......
 Nasza gumowa kaczka potrafi latać!!

 Nadpiszcie odpowiednio metodę fly() tak, aby po jej wywołaniu w przypadku gumowej kaczki wypisywał się w konsoli tekst "gumowe kaczki nie potrafią latać :(".

 */

class RubberDuck extends Duck{
    constructor() {
        super();
        this.type = "gumowa";
    }

    fly() {
        console.log("gumowe kaczki nie potrafią latać :(");
    }

}

let gumowaKaczucha = new RubberDuck();
gumowaKaczucha.quack();
gumowaKaczucha.swim();
gumowaKaczucha.fly();