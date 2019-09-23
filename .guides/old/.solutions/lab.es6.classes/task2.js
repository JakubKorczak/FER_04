/**

 ---
 <center><a href="lab.es6.classes/index.html">Otwórzcie stronę z zadaniem w nowej karcie</a></center>

 Na bazie klasy Duck stwórzcie kolejną o nazwie WildDuck.
 Nadpiszcie odpowiednio konstruktor, tak aby podczas wywoływania metody wyswietl() typ kaczki zmienił się na "dzika".

 Stwórzcie obiekt dzikaKaczucha.
 Wywołajcie dla niego wszystkie metody.

 */

class WildDuck extends Duck{
    constructor() {
        super();
        this.type = "dzika";
    }
}

let dzikaKaczucha = new WildDuck();
dzikaKaczucha.print();
dzikaKaczucha.quack();
dzikaKaczucha.swim();