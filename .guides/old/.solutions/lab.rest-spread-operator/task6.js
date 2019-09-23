/**
 * Stwórzcie funkcję sayHello, której celem będzie wypisanie Hello dla wszystkich jej parametrów.
 * Parametry powinny być stringami.
 *
 * Wykorzystajcie Rest/Spread operator.
 * Spróbujcie posłużyć się jedną z metod (forEach, map lub reduce).
 *
 * Przykładowe wywołania:
 * sayHello("Ania", "Kasia", "Steve", "Bogumił");
 *
 * Wynik w konsoli:
 * Hello: Ania
 * Hello: Kasia
 * Hello: Steve
 * Hello: Bogumił
 */

function sayHello(...args){
    args.forEach( param => console.log(param) );
}

sayHello("fdsf","sdf","sfsdfewr");