/**
 * Stwórzcie funkcję generateRandomNumbers(), której zadaniem jest wylosowanie
 * i zapisanie do tablicy 6 liczb (0-5) oraz zwrócenie tej tablicy.
 *
 * Zapiszcie do zmiennych pierwszą i trzecią liczbę ze zwróconej tablicy.
 * Wyświetlcie te zmienne w konsoli.
 */

function generateRandomNumbers(){
    let arr = [];
    for(let i=1; i<=6; i++){
        arr.push( Math.round( Math.random() * 5) );
    }
    return arr;
}

let [num1, ,num3] = generateRandomNumbers();
console.log(num1);
console.log(num3);

