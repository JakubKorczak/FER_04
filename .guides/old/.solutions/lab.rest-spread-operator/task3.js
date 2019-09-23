/**
 * Stwórzcie zmienną przechowującą Twoje imię.
 * Za pomocą operatora rozproszenia zapiszcie każdą literkę do tablicy.
 * Wypiszcie tablicę w konsoli.
 */

let name = "Piotr";
let arr = [...name];

arr.forEach( letter => console.log(letter) );