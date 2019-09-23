/**

 Napiszemy grę, która będzie sprawdzać nasz reflex.
 Gra co sekundę ma losować od 1 do 3 boxów dla których będzie losowo wybierać kolor czerwony bądź zielony.
 Wybrany kolor ma być ustawiony przez dodanie do box-a odpowiedniej klasy.
 Pamiętajmy, aby przed ustawieniem kolorów dla nowo wylosowanych box-ów wyczyścić wczesniej ustawione klasy w poprzednich box-ach

 Teraz musimy dodać zdarzenie na kliknięciu na box-ach, tak aby po kliknięciu sprawdzić jaką box ma ustawioną klasę:
 - jak ma $green$ to dodajemy punkt oraz dodajemy klasę $good-clicked$
 - jak ma $red$ to odejmujemy punkt oraz dodajemy klasę $bad-clicked$

 Spróbujmy napisać grę obiektowo - tworząc typ BoxGame


 ---
 <center><a href="lab.dom.eventy/catchBoxGame/index.html" target="_blank">OTWÓRZ STRONĘ W NOWEJ KARCIE</a></center>


 */

document.addEventListener("DOMContentLoaded", function(){

    let game = new BoxGame();
    game.startGame();


});

let BoxGame = function(){
    this.boxes = document.querySelectorAll(".game-box div");
    this.totalPointsElem =  document.getElementById("total-points");

    this.totalPoints = 0;

};

BoxGame.prototype.removeBoxColors = function(){
    this.boxes.forEach( box => {
        box.classList.remove("green");
        box.classList.remove("red");
        box.classList.remove("good-clicked");
        box.classList.remove("bad-clicked");
    })
};

//ZWRÓCIĆ NA WYKORZYSTANIE STRZAŁEK, ABY ZACHOWAĆ KONTEKST THIS
BoxGame.prototype.addClick = function(){
  this.boxes.forEach( btn => {
      btn.addEventListener("click", e =>{
          if(e.target.className.indexOf("green") != -1){
              this.totalPoints++;
              e.target.classList.add("good-clicked");
          }else if(e.target.className.indexOf("red") != -1){
              this.totalPoints--;
              e.target.classList.add("bad-clicked");
          }

          this.totalPointsElem.innerText = this.totalPoints;
      })
  })
};



BoxGame.prototype.startGame = function(){
    this.addClick();

    setInterval( () => {
        this.removeBoxColors();

        let boxesToGenerate = Math.round(Math.random() * 3 )+1;

        for(let i=0; i<boxesToGenerate; i++){
            let boxNumber = Math.round(Math.random() * 8 );
            let colorNumber = Math.round( Math.random() )+1;
            let color = (colorNumber===1)?"green":"red";
            this.boxes[boxNumber].classList.add(color);

        }
    },1000)
};