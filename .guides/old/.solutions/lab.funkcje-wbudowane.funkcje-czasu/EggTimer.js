/**
 * Napiszcie nowy typ EggTimer, który będzie nie będzie miał żadnych argumentów,
 * natomiast będzie posiadał metodę: boil(minutes).
 *
 * Metoda ta ma odliczać czas pozostały do ugotowania np. jajka.
 * Po wywołaniu metoda ma co 10 sekund podawąć ile czasu zostało do ugotowania,
 * a po minięciu czasu podanego jako parametr ma przestać odliczać
 * i wyświetlić komunikat - "Ugotowane - Czas minął !!!"
 *
 * Przykład działania:
 * Pozostało 1 minuta i 40 sekund
 * Pozostało 1 minuta i 30 sekund
 * Pozostało 1 minuta i 20 sekund
 * ...
 * Pozostało 0 minut i 10 sekund
 * Ugotowane - Czas minął !!!
 *
 * Uwaga: Zwróćcie uwagę na odmianę słow minuta ;)
 *
 */


let EggTimer = function(){};
EggTimer.prototype.boil = function(minutes){

    let seconds = minutes * 60;

    let info = setInterval( () => {
        let tmpMinutes = Math.floor( seconds/60 );
        let tmpSeconds = seconds % 60;
        let minutesWord = "minut";
        if(tmpMinutes<=4) minutesWord = "minuty";
        if(tmpMinutes == 1) minutesWord = "minuta";
        if(tmpMinutes == 0) minutesWord = "minut";

        console.log("Pozostało "+tmpMinutes+" "+minutesWord+" i "+tmpSeconds+" sekund");

        seconds -= 10;
    }, 10000);

    setTimeout( () =>{
        clearInterval(info);
        console.log("Ugotowane - Czas minął !!!");
    }, minutes*60*1000);

};