---

Napiszecie teraz ponownie aplikację Todo wraz z TimeTrackerem ale tym razem dane będziecie zapisywać z wykorzystanie JSON_SERVER-a i macie wszystkie typy stworzyć poprzez zapis klasowy.


Przypomnijmy jakie ma mieć funkcjonalnośći nasza aplikacja:
- dodawanie zadań
- dodawanie operacji do zadań
- rejestracja czasu operacji (wpisywana ręcznie bądź z wykorzystaniem stopera)


<a href="lab.dom.formularze.time-tracker/index.html" target="_blank">Otwórzcie stronę w nowej karcie</a> 

Tak jak poprzednio macie w kodzie html przygotowane snippety kodu dla poszczególnych elmentów aplikacji - wykorzystajcie je jako wzorzec do tworzenia elementów za pomocą JavaScript.

**Przypomnienie**
Jak zapewne zauważyliście aplikacja składa się z:
- formularza do dodawania nowego zadania
- listy zadań - każde zadanie to osobna sekcja z klasą task
- do zadania można dodać operację poprzez przycisk **Add operation**
- pod pierwszym zadaniem macie pokazane różne etapy "życia" operacji
    - pierwszy element to formularz do dodawania nowej operacji (ma się pojawiać po kliknięciu $Add operation$)
    - drugi element - to wygląd operacji po dodaniu - ma ona dwie opcje dodawania czasu spędzonego nad tą operacją
        - **Add time manually** - wpisanie ręcznie czasu w minutach (widok czwartego elementu na liście)
        - **Start timer** - uruchamia timer, który na bierząco pokazuje ile czasu upłynęło (aktualizowany co sekundę) - widok to trzeci element na liście
    - ostatni element to wygląd już po zarejestrowaniu czasu dla operacji
- zadanie ma też opcję **Finish** - powoduje to, że znikają wszystkie przyciski z tego zadania i jego operacji


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


W pliku db.json macie przygotowane dane zadań i operacji.

Do pobierania danych wykorzystajcie adres $tasks$.


<center>
{Aktualizacja plików}(sh .guides/.scripts/setup.sh)  
</center>

<center>
{Uruchum JSON-SERVER}(sh .guides/.scripts/json-server.sh)  
</center>



**Hint**
W elementach dot. zadań wykorzystajcie dataset, aby przechowywać m.in. informację którego zadania dotyczy dana sekcja - wykorzystajcie do tego indeks tablicy tasks z pliku app.js

Jeżeli wystąpią problemy z json-server, możecie wykorzystywać tego json-a:
```json
{
  "tasks": [
    {
      "id": 1,
      "title": "task1",
      "description": "desc1",
      "status": "open",
      "operations": [
        {
          "description": "Operation1",
          "timeSpent": 1200
        },
        {
          "description": "Operation2",
          "timeSpent": 1800
        }
      ]
    },
    {
      "id": 2,
      "title": "task2",
      "description": "desc2",
      "status": "open",
      "operations": [
        {
          "description": "Operation1",
          "timeSpent": 0
        }
      ]
    }
  ]
}
```

i stronę http://myjson.com/, dzięki której możecie tymczosowo uruchomić zewnętrzny serwer REST API.