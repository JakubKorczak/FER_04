/**
 *  Do pliku html dołączcie kolejny skrypt task5.js
 *
 *  Stwórzcie metodę printUsers(users), która otrzymuje jako parametry tablicę użytkowników
 *  Metoda ma wypisywać kolejnych użytkowników w konsoli zgodnie z poniższym schematem
 *
 *  name: Jan
 *  surname: Nowak
 *  sallary: 4000
 *  role: client2
 *  ----
 *  name: Ewa
 *  surname: Kowalska
 *  sallary: 4000
 *  role: admin
 *  ----
 *
 *
 *  Do działań wykorzystajcie odpowiednie metody tablicowe
 *
  */


function printUsers(usersArray){
   usersArray.forEach( user => {
       console.log("name: "+user.name);
       console.log("surname: "+user.surname);
       console.log("sallary: "+user.sallary);
       console.log("role: "+user.role);
       console.log("----")
   })
}