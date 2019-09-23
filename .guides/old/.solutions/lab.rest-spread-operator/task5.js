/**
 * Poniżej macie zadeklarowaną tablicę.
 * Stwórzcie funkcję o nazwie setFunnyName,
 * która będzie przyjmować dowolną liczbę parametrów.
 * Zadaniem funkcji jest dodanie wszystkich przekazanych
 * do niej parametrów do tablicy people.
 * Użyjcie operatora reszty.
 */

let people = [
   "Kim Yoo Suk",
    "Sue Yoo",
    "Dr. Alden Cockburn",
    "Rusty Kuntz"
];

function setFunnyName(...data){
    people = [...people, ...data];
}

setFunnyName("sdf","sdfsdf","sdfs","sdfe")
console.log(people);