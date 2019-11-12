
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