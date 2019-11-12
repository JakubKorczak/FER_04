# Zadanie


Zadanie polega na wykorzystaniu API udostępnionego przez NASA - https://api.nasa.gov/index.html.

Zapoznajcie się się z API wystawionym przez NASA.  
Zobaczcie jak wyglada dokumentacja, jakie dane można otrzymać oraz jak budować zapytania.

Przed przystąpieniem do pisania kodu, upewnijcie się, że macie własny API Key (wypełnij formularz na stronie).

Zadanie polega na stworzeniu strony, która składa się z dwóch sekcji.  
Każda z sekcji powinna mieć 100% szerokości i wysokości okna przeglądarki.

Pierwsza sekcja to sekcja powitalna.  
- Na samym środku sekcji powinien znajdować się napis NASA API Challenge.  
- Tłem całej sekcji powinien być jakikolwiek obrazek (na przykład zdjęcie Ziemi bądź innej planety) pobrany poprzez API.

Druga sekcja posiada galerię, który wyświetla zdjęcia Marsa.  
- Wykorzystajcie do tego API - https://api.nasa.gov/api.html#MarsPhotos.
- Galeria na starcie powinna pokazywać 6 zdjęć.
- Pod galerią umieśćcie przycisk **Load more**.
- Po naciśnięciu powinno się pojawić 6 kolejnych zdjęć pobranych z wykorzystaniem API

Dodatkowo
- Zmodyfikujcie zapytanie o obrazek do pierwszej sekcji tak, aby za każdym razem był pobierany inny obrazek.
- Wykorzystajcie technikę preloadingu przy wyświetlaniu nowych elementów w galerii
