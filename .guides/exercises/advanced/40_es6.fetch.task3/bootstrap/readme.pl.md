# Zadanie

 Za pomocą fetch() wykonajcie zapytanie na adres otwartego API:  
 https://www.googleapis.com/books/v1/volumes?q=isbn:{numerISBN}

 Gdzie zamiast numerISBN podasz ISBN przekazany przez użytkownika.
 Otrzymacie w odpowiedzi JSON, a z niego obiekt, w którym interesuje nas tablica pod kluczem items, a w niej pierwszy element - obiekt z informacją o książce.

 Po pobraniu elementy dodajcie  do elementu "book-info" h1 z tytułem (jest w tym obiekcie pod kluczem volumeInfo.title).

 Przykładowy kod ISBN: 0345260791