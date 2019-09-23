/**
 * Stwórzcie funkcję getAnimal(), która zwraca nastepujący obiekt:
 * {
 *     name: "Mruczek",
 *     age: 10,
 *     getVoice: () => "miau miau"
 * }
 *
 * Podstaw pod zmienne catName oraz catVoice wartości pobrane z funkcji getAnimal().
 */

function getAnimal(){
    return {
             name: "Mruczek",
             age: 10,
             getVoice: () => "miau miau"
        }
}

let {name: catName, getVoice: catVoice} = getAnimal();

console.log(catName);
console.log(catVoice());
