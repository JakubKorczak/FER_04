# Warsztat

Napiszecie teraz aplikację Todo wraz z TimeTrackerem, czyli aplikację, do której będzie można dodawać zadania do wykonania oraz dodawać do nich operacje wykonane wraz z czasem jaki spędziliśmy nad danym zadaniem.


Ten kod to tylko przygotowane snippety do tego jak poszczególne elementy aplikacji powinny wyglądać.
To Wasza aplikacja poprzez JS-a ma te elementy generować.

Jak zapewne zauważyliście aplikacja składa się z:
- formularza do dodawania nowego zadania
- listy zadań - każde zadanie to osobna sekcja z klasą task
- do zadania można dodać operację poprzez przycisk **Add operation**
- pod pierwszym zadaniem macie pokazane różne etapy "życia" operacji
    - pierwszy element to formularz do dodawania nowej operacji (ma się pojawiać po kliknięciu **Add operation**)
    - drugi element - to wygląd operacji po dodaniu - ma ona dwie opcje dodawania czasu spędzonego nad tą operacją
        - **Add time manually** - wpisanie ręcznie czasu w minutach (widok czwartego elementu na liście)
        - **Start timer** - uruchamia timer, który na bierząco pokazuje ile czasu upłynęło (aktualizowany co sekundę) - widok to trzeci element na liście
    - ostatni element to wygląd już po zarejestrowaniu czasu dla operacji
- zadanie ma też opcję finish - powoduje to, że znikają wszystkie przyciski z tego zadania i jego operacji


Przygotujcie odpowiednie metody do tworzenia pojedynczych elementów DOM w pliku DomElements.js - metody te mają być w prototypie typu DomElements.

W pliku app.js będziemy przechowywać wszystkie zadania w zmiennej tasks, ktora będzie tablicą, która będzie przechowywać obiekty typu Task.
W oparciu o tą tablicę ma być budowany cały wygląd listy operacji - docelowo jedyny stały element w pliku index.html to formularz do dodawania zadań, reszta ma być budowana dynamicznie.

Omówmy teraz potrzebne typy Task i Operation, które macie utworzyć w odpowiednich plikach.

# Task
**atrybuty**:
- title
- description
- status - domyślnie open, po zakończeniu ma być closed
- operations - tablica przechowująca powiązane operacje

# Operation
**atrybuty**
- description
- timeSpent - startowo 0 - czyli nie zarejestrowano jeszcze czasu i wtedy mogą być widoczne przyciski - czas przechowujemy w sekundach, natomiast dopiero na wyświetlaniu (czyli w którejś z metod DomELements) formatujemy to na zapis 1h 23m 15s


**Hint**

W elementach dot. zadań wykorzystajcie dataset, aby przechowywać m.in. informację którego zadania dotyczy dana sekcja - wykorzystajcie do tego indeks tablicy tasks z pliku app.js
