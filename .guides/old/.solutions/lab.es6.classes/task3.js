/**

 ---
 <center><a href="lab.es6.classes/index.html">Otwórzcie stronę z zadaniem w nowej karcie</a></center>

 Na bazie klasy Duck stwórzcie kolejną o nazwie MallardDuck.
 Nadpiszcie odpowiednio konstruktor, tak aby podczas wywoływania metody wyswietl() typ kaczki zmienił się na "krzyżówka".

 Stwórzcie obiekt krzyzoKaczucha.
 Wywołajcie dla niego wszystkie metody.

 */

class MallardDuck extends Duck{
    constructor() {
        super();
        this.type = "krzyżówka";
    }
}

let krzyzoKaczucha = new MallardDuck();
krzyzoKaczucha.print();
krzyzoKaczucha.swim();
krzyzoKaczucha.quack();