/**
 * Stwórzcie funkcję randomize(param1, param2, callback), która jako parametry przyjmuje:
 * - dowolne dwie liczby - określające przedział między jakim będziemy losować liczbę
 * - funkcje anonimową, której zadaniem jest wypisanie wylosowanej liczby.
 * Niech funkcja ranodmize() sprawdza przed wywołaniem callback czy rzeczywiście jest ona funkcją.
 */

function randomize(param1, param2, callback){
    if(typeof callback != 'function') throw Error('callback param is not a function');
    
    return Math.round((Math.random() * (param2-param1)) + param1 );
}
