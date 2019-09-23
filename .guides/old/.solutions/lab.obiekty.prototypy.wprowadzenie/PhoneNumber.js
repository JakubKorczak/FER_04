/**
 * Utwórzcie konstruktor dla typu PhoneNumber, który przyjmuje parametry (owner, phoneNumber)
 * i ustawia je jako atrybuty obiektu:
 * - owner - np. Imię, Nazwisko, do kogo dany numer należy
 * - phoneNumber - numer telefonu
 *
 * Przez prototyp dodajcie metodę printDetails wypisującą informacje o tym numerze
 * ```
 * Owner: Jan Nowak
 * Phone: +48.333222111
 */

let PhoneNumber = function(owner, phoneNumber){
    this.owner = owner;
    this.phoneNumber = phoneNumber;
};

PhoneNumber.prototype.printDetails = function(){
    console.log("Owner: "+this.owner);
    console.log("Phone: "+this.phoneNumber);
}
