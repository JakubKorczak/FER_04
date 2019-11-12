/**

 Napiszemy grę "Clicker", która będzie polegała na zbieraniu punktów poprzez klikanie.
 Za każde kliknięcie w przycisk o klasie "clicker" ma być dodawany punkt do globalnej puli punktów.

 Dodatkowo za każde kolejne zdobyte 50 punktów zostaje zwiększony licznik o 10 "auto punktów", czyli punktów, które się naliczają samoczynnie co 1s
 np. jeżeli licznik ma wartość 20, to co sekundę do puli globalnej punktów jest dodawane 20 punktów.
 Do implementacji "auto punktów" wykorzystajmy setInterval.

 Kolejny bonus jaki możemy zdobyć to 500 pkt doliczane jednorazowo do puli globalnej.
 Otrzymujemy je gdy w liczniku "auto punktów" przekroczymy kolejną 100-tke naliczoanych automatycznie punktów
 np. po przekroczeniu 200-tu otrzymamy jednorazowo 500pkt, po przekroczeniu 300-tu znów otrzymamy 500pkt

 Na stronie są przygotowane miejsca do wyświetlania wszystkich punktów jakie zdobyliśmy, licznika autopunktów, oraz infomację ile punktów mamy z premii "auto punktów"

 Przed przystąpieniem do pisania kodu możecie zobaczyć jak puplarny clicker działa: http://orteil.dashnet.org/cookieclicker/


 Spróbujcie napisać grę obiektowo - tworząc typ Clicker


 ---
 <center><a href="lab.dom.eventy/clicker/index.html" target="_blank">OTWÓRZ STRONĘ W NOWEJ KARCIE</a></center>


 */

document.addEventListener("DOMContentLoaded", function(){

    new Clicker();

});


let Clicker = function(){
    this.btnEl = document.querySelector("a.clicker");
    this.totalPointsElem = document.getElementById("total-points");
    this.autoPointsElem = document.getElementById("points-per-second");
    this.premiumPointsElem = document.getElementById("premium-points");

    this.totalPoints=0;
    this.autoPoints=0;
    this.premiumPoints=0;

    //to get info if new level of autoPoints
    this.previousAutoPointsCalcValue = 0;

    this.addClickEvent();
    this.startAutoPoints();

};


Clicker.prototype.addClickEvent = function() {
    this.btnEl.addEventListener("click", e => {
        e.preventDefault();

        this.totalPoints += 1;
        this.increaseAutoPoints();

        this.refreshStats();
    });
};

Clicker.prototype.increaseAutoPoints = function(){
    let calc = Math.floor(this.totalPoints / 50);

    if (calc > this.previousAutoPointsCalcValue) {
        this.previousAutoPointsCalcValue = calc;

        this.autoPoints += 10;
        if (this.autoPoints % 100 == 0) {
            this.premiumPoints += 500;
            this.totalPoints += 500;
        }
        this.refreshStats();
    }
};

Clicker.prototype.startAutoPoints = function(){
    setInterval(()=>{
        this.totalPoints += this.autoPoints;
        this.increaseAutoPoints();
        this.refreshStats();
    },1000);
};

Clicker.prototype.refreshStats = function(){
    this.totalPointsElem.innerText = this.totalPoints;
    this.autoPointsElem.innerText = this.autoPoints;
    this.premiumPointsElem.innerText = this.premiumPoints;
}