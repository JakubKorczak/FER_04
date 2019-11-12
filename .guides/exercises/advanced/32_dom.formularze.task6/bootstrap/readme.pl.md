# Zadanie



 Na stronie znajduje się formularz do zamówienia pizzy. W formularzu znajduje się pole z checkboxami, w którym użytkownik może wybrać sobie dodatki.
 
 Cena każdego z dodatków jest trzymana w atrybucie ```data-price```.
 
 Napiszcie takie eventy, żeby po zaznaczeniu checkoxa wyświetlała się poprawna kwota zamówienia oraz po wysłaniu formularza
 wewnątrz elementu ```page-info``` wyświetliła się następująca informacja: **"Do zapłaty: [odpowiednia kwota]"**, gdzie [odpowiednia kwota] to wartość zamówienia.

 Pamiętajcie o tym, że kliknięcie w przycisk (zatwierdzienie formularza) wywołuje domyślną akcję przeładowania strony.
 Zablokujcie tę akcję, aby móc zobaczyć wpisaną informację do elmentu ```page-info```.

 Zwróćie uwagę na dwa specjalne checkboxy:
 * Wyczyść -  powinien odznaczyć wszystkie inne opcje,
 * Wszystkie dodatki - powinien zaznaczyć wszystkie inne opcje (poza none).