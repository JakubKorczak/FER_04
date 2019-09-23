/**
 * Stwórzcie funkcję saySomething() i jako parametr przekaż jej następujący obiekt:
 * let wally = {
 *     name: "Wally",
 *     age: 2,
 *     proffesion: "Naprawianie innych robotów"
 *  }
 *
 *  Następnie za pomocą destrukturyzacji podstawcie wszystkie 3 atrybuty obiektu pod takie same nazwy zmiennych.
 *  Następnie zwróćcie string w postaci:
 *  "Cześć mam na imię Wally, mam 2 lata i moim zajęciem jest Naprawianie innych robotów".
 */

let wally = {
    name: "Wally",
    age: 2,
    proffesion: "Naprawianie innych robotów"
};

function saySomething(obj) {

    let {name, age, proffesion} = obj;
    return `Cześć mam na imię ${name}, mam ${age} lata i moim zajęciem jest ${proffesion}`;
}

console.log(saySomething(wally));
