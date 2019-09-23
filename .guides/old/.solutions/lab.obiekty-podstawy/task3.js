/**
 *  Do pliku html dołączcie kolejny skrypt task3.js
 *
 *  Stwórzcie metodę totalSallary(role, usersArray), która otrzymuje jako parametry
 *  - nazwę roli
 *  - tablicę użytkowników
 *  Metoda ma zwracać sumę pensji dla danej roli
 *  Do obliczenia wykorzystajcie odpowiednią metodę tablicową
 *
  */


function totalSallary(role, usersArray){
    return usersArray.filter( u => u.role==role).reduce( (p,c) => p += c.sallary, 0);
}