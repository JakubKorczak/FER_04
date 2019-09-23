/**

 ---
 <center><a href="lab.dom.formularze/task3.html" target="_blank">Otwórzcie stronę z zadaniem</a></center>

 Na stronie znajduje się tabela z wynikami w lokalnych mistrzostwach piłkarskich.

 Poniżej znajduje się formularz, który wypełniają wszyscy sędziowie po ukończonych rozgrywkach.

 Napiszcie kod JavaScript w taki sposób, żeby po wybraniu odpowiednich drużyn nastąpiła walidacja:
 1. Obie drużyny muszą być różne.
 2. Liczba goli powinna być nieujemna.

 Jeżeli formularz zostanie zweryfikowany poprawnie, odpowiednia informacja o wyniku spotkania powinna pojawić się w tabeli jako kolejny wiersz.


 */

document.addEventListener("DOMContentLoaded",function(){
    gameForm();
});

let gameForm = function(){

  let form = document.querySelector("form");

  form.addEventListener("submit", function(e){
      e.preventDefault();

      let team1 = this.querySelector("#team1").value;
      let points1 = this.querySelector("#points1").value;
      let team2 = this.querySelector("#team2").value;
      let points2 = this.querySelector("#points2").value;

      if(team1.length === 0 || team2 === 0 || (team1 === team2) || points1 < 0 || points2 < 0){
          alert("Wprowadzono niepoprawne ")
      }else{
          addElement(team1, points1, team2, points2);
          form.reset();
      }



  })

let addElement = function(team1, score1 , team2, score2 ){
    let scoreTable = document.querySelector("table");
    if( scoreTable.querySelector("tbody")){
        scoreTable = scoreTable.querySelector("tbody");
    }

    let newTr = document.createElement("tr");
    let newTd1 = document.createElement("td");
    let newTd2 = document.createElement("td");
    let newTd3 = document.createElement("td");


    newTd1.innerText = team1;
    newTd2.innerText = team2;
    newTd3.innerText = score1 +" - "+score2;

    newTr.appendChild(newTd1);
    newTr.appendChild(newTd2);
    newTr.appendChild(newTd3);


    scoreTable.appendChild(newTr);

}

};