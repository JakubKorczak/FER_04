/**
 * Stwórzcie dwie tablicę fruits i vegetables.
 * Następnie stwórzcie trzecią tablicę mix, która będzie połączeniem obu poprzednich tablic.
 * Użyj operator rozproszenia.
 */

let fruits = ["orange","apple"];
let vegetables = ["potato"];

let mix = [...fruits, ...vegetables];
console.log(mix);