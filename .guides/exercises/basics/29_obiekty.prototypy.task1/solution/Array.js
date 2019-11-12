/**
 * Dopiszmy do prototypu Array metodę printValues, która będzie wypisywać
 * w konsoli kolejne wartości z tablicy
 */


Array.prototype.printValues = function(){
    this.forEach(el => console.log(el));
};