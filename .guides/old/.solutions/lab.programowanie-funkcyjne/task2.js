/**
 * Napiszcie swoją implementację metody reduce ale pod nazwą customReduce().
 * Zasada działania ma być taka sama jak metody reduce.
 *
 * Następnie wykorzystajcie nową metodę i mając do dyspozycji tablicę z liczbami, zwróćcie i wyświetlcie:
 * - wynik dodawania wszystkich liczb z tablicy (suma liczb z tablicy)
 * - wynik mnożenia wszystkich liczb z tablicy (iloczyn liczb z tablicy)
 */

Array.prototype.customReduce = function(fn, init){

    if(typeof fn != 'function') throw Error('fn param is not a function');
    if(this.length === 0) throw Error("No elements in array");

    let prev, start;

    if(typeof init === "undefined") {
        prev = this[0];
        start = 1;
    } else {
        prev = init;
        start = 0;
    }

    let len = this.length;
    for(let i=start; i<len; i++) {
        let result = fn(prev, this[i], i, this);
        prev = result;
    }
    return prev;
};