/**
 * Utwórzcie konstruktor dla typu CellPhone, który będzie miał atrybuty:
 * - model
 * - brand
 * - receivedCalls - tablica do przechowywania numerów połączeń przychodzących
 * - outgoingCalls - tablica do przechowywania numerów wychodzących
 * - phoneBook - książka telefoniczna - tablica zawierająca referencje do obiektów typu PhoneNumber
 *
 * W konstruktorze mają być przekazane parametry model i brand.
 *
 * Przez prototyp dodajcie do CellPhone metody:
 * - receiveCall(phoneNumber) - która dodaje numer do tablicy receivedCalls
 * - makeCall(phoneNumber) - która dodaje numer do tablicy outgoingCalls
 * - addPhoneToPhoneBook(owner, phone) - metoda, która tworzy obiekt typu PhoneNumber i dodaje go do tablicy phoneBook
 * - printPhoneBook() - metoda wypisująca wszystkie numery w książce telefonicznej tego telefonu
 */

let CellPhone = function(model, brand){
    this.mode = model;
    this.brand = brand;
    this.receivedCalls = [];
    this.outgoingCalls = [];
    this.phoneBook = [];
};

CellPhone.prototype.receiveCall = function(phoneNumber){
    this.receivedCalls.push(phoneNumber);
};

CellPhone.prototype.makeCall = function(phoneNumber){
    this.outgoingCalls.push(phoneNumber);
};

CellPhone.prototype.addPhoneToPhoneBook = function(owner, phone){
    let phoneNumber = new PhoneNumber(owner,phone);
    this.phoneBook.push(phoneNumber);
};

CellPhone.prototype.printPhoneBook = function(){
    this.phoneBook.forEach( phone => phone.printDetails() );
};
