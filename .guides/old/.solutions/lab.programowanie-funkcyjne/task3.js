/**
 * Mając do dyspozycji tablicę z nazwami miast, utwórczcie nową tablicę z ilością liter każdego miasta.
 * Na przykład dla tablicy miast:
 *
 * let cities = ["Kraków", "Olsztyn", "Szczecin", "Ostrów Wielkopolski"];
 * Wynik powinien być następujący:
 * [6, 7, 8, 19];
 *
 */

let cities = ["Kraków", "Olsztyn", "Szczecin", "Ostrów Wielkopolski"];

let newCities = cities.map( city => city.length);
newCities.forEach( el => console.log(el) );