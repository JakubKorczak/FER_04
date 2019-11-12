/**

 ---
 <center><a href="lab.es6.fetch/task2.html">Otwórz stronę z zadaniem w nowej karcie</a></center>

 Za pomocą fetch() wykonajcie zapytanie na adres otwartego API:
 https://www.googleapis.com/books/v1/volumes?q=isbn:{numerISBN}

 Gdzie zamiast numerISBN podasz ISBN przekazany przez użytkownika.
 Otrzymacie w odpowiedzi JSON, a z niego obiekt, w którym interesuje nas tablica pod kluczem items, a w niej pierwszy element - obiekt z informacją o książce.

 Po pobraniu elementy dodajcie  do elementu "book-info" h1 z tytułem (jest w tym obiekcie pod kluczem volumeInfo.title).

 Przykładowy kod ISBN: 0345260791


 */

document.addEventListener("DOMContentLoaded", function(){

    addFormSubmitEvent();

});

let addFormSubmitEvent = function(){
    document.querySelector("form").addEventListener("submit", function(e){
        e.preventDefault();
        let isbn = this.querySelector("input[type=text]").value;
        fetch("https://www.googleapis.com/books/v1/volumes?q=isbn:"+isbn)
            .then(resp => {
                if (resp.ok) {
                    return resp.json();
                }else {
                    throw new Error('Błąd sieci!');
                }
            })
            .then( data =>{
                addBookInfo(data.items[0]);
            })
    })

};

let addBookInfo = function(book){
    if(book){
        let h1El = document.createElement("h1");
        h1El.innerText = book.volumeInfo.title;

        document.querySelector('.book-info').appendChild(h1El);
    }
};