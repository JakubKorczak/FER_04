/**

 ---
 <center><a href="lab.es6.fetch/task1_w.html">Otwórz stronę z zadaniem w nowej karcie</a></center>

 Zapoznajcie się z plikami HTML i JavaScript.
 Zadanie polega na wczytaniu danych z adresu: https://swapi.co/api/films/
 Przejdźcie przez zadanie korzystając z debuggera.

 Zwróćcie uwagę na to kiedy dane zostają wczytane?

 Przydatne informacje:

 - użyjcie odpowiedniej metody HTTP, jeśli jest potrzebna,
 - użyjcie odpowiednich funkcji informujących użytkownika o statusie żądania (metody done(), fail()),
 - sprawdźcie w konsoli, jak wyglądają wczytywane dane, czy jest to tablica, string, JSON?
 - jeśli dane zostaną poprawnie wczytane, to wywołajcie odpowiednią funkcję np. insertContent(), do której jako argument przekaż wczytane dane,
 - wewnątrz funkcji insertContent() zróbcie pętlę po tablicy wyników,
 - wewnątrz pętli stwórzcie elementy li do których wstawicie tytuł filmu i następnie wstawcie je do listy ul

 */

document.addEventListener("DOMContentLoaded", function(){

    let movieList = document.querySelector('.list');
    let movieUrl = 'https://swapi.co/api/films/';

    loadMovies(movieUrl, movieList);

});

function insertContent( movies, listElemeent) {
    //tutaj zróbcie pętlę po filmach
    //wygenerujcie kolejne LI i wstawcie do listy movieList
    movies.forEach( movie => {
        let newLi = document.createElement("li");
        newLi.innerText = movie.title;
        listElemeent.append(newLi);
    })
}

function loadMovies(url, listElement) {
    //tutaj wykonaj połączenie za pomocą fetch-a
    fetch(url)
        .then( resp => {
            if (resp.ok) {
                return resp.json();
            }else {
                throw new Error('Błąd sieci!');
            }
        })
        .then( data => {
            insertContent(data.results, listElement)
        });

}

