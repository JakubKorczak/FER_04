/**
 *  Do pliku html dołączcie kolejny skrypt task4.js
 *
 *  Stwórzcie metodę raiseSallary(role, percent, usersArray), która otrzymuje jako parametry
 *  - nazwę roli
 *  - procent o ile podnosimy pensję pracownikom o podanej roli - podajemy jako wartości całkowice np. 5 dla 5%
 *  - tablicę pracowników / użytkowników
 *  Metoda ma zwracać tablicę wszystkich pracowników / użytkowników,
 *  ale Ci z zadaną rolą mają mieć już zwiększoną pensję
 *
 *  Do obliczenia wykorzystajcie odpowiednią metodę tablicową
 *
  */


function raiseSallary(role, percent,usersArray){
    return usersArray.map( u => {
        if(u.role == role){
            u.sallary = u.sallary + (u.sallary*(percent/100));
        }
        return u;
    });
}