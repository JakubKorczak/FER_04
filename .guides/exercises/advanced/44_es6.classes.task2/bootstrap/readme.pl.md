# Zadanie

Definicje umieszczajcie w odpowiednich plikach, natomiast wszelkie wywołania mają być wykonywane w pliku app.js


## Część 1

Będzie to klasa abstrakcyjna, z której będą dziedziczyć inne kaczki.

Stwórzcie wewnątrz tej klasy konstruktor i metody:
- constuctor - którego zadaniem będzie ustawienie typu kaczki na "zwykła kaczka" np. this.type = "zwykla"
- quack() - wypisuje "kwa kwa"
- swim() - wypisuje "płynę...""
- print() - wypisuje "Wygląda jak zwykla kaczka". Skorzystaj z ustawienia type do wypisania typu kaczki.

Stwórz obiekt kaczucha. Wywołaj dla niego wszystkie metody.

## Część 2

Na bazie klasy Duck stwórzcie kolejną o nazwie WildDuck.

Nadpiszcie odpowiednio konstruktor, tak aby podczas wywoływania metody wyswietl() typ kaczki zmienił się na "dzika".

Stwórzcie obiekt dzikaKaczucha.
Wywołajcie dla niego wszystkie metody.


## Część 3

Na bazie klasy Duck stwórzcie kolejną o nazwie MallardDuck.

Nadpiszcie odpowiednio konstruktor, tak aby podczas wywoływania metody wyswietl() typ kaczki zmienił się na "krzyżówka".

Stwórzcie obiekt krzyzoKaczucha.  
Wywołajcie dla niego wszystkie metody.

## Część 4

Stworzyliście klasę Duck.  
Mogą z niej dziedziczyć wszytkie kaczki.  
Wazym zadaniem teraz jest dodanie do odpowiedniej klasy metody fly().

Metoda ma wypisywać w konsoli tekst `Kaczka ${type} leci`.

## Część 5

Na bazie klasy Duck stwórzcie kolejną o nazwie RubberDuck.

Nadpiszcie odpowiednio konstruktor, tak aby podczas wywoływania metody wyswietl() typ kaczki zmienił się na "gumowa".

Stwórzcie obiekt gumowaKaczucha.  
Wywołajcie dla niego wszystkie metody.

Czy widzicie coś niepokojącego? ......  
Nasza gumowa kaczka potrafi latać!!

Nadpiszcie odpowiednio metodę fly() tak, aby po jej wywołaniu w przypadku gumowej kaczki wypisywał się w konsoli tekst: gumowe kaczki nie potrafią latać :(


 


