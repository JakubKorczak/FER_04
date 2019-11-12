/**
 * Rozszerzmy wbudowany w JS typ String i dodajmy metodę upperLower, która to zwraca zmodyfikowany tekst wg zasady:
 * - litery nieparzyste mają być z dużych liter
 * - litery parzyste mają być z małych liter
 * - przy obliczaniu pozycji litery nie są brane pod uwagę spacje
 *
 * Przykładowe wywołanie:
 * let text = "JavaScript rules";
 * let modified = text.upperLower();
 * console.log(modified); // wyświetli: JaVaScRiPt RuLeS
 */

String.prototype.upperLower = function(){
    let newText = "";
    let counter = 1;
    for(let i=0; i< this.length; i++){
        let char = this[i];
        if(char != " "){
            if(counter%2==0){
                char = char.toLowerCase();
            }else{
                char = char.toUpperCase();
            }
            counter++;
        }
        newText+=char;
    }
    return newText;
}