# Zadanie


 Stwórzcie klasę **Task**, która będzie miała strukturę:
 **atrybuty**
 - title
 - description
 - date
 - status

 **Konstruktor**:
 constructor(title, description, data)
 a dla atrybutu status ustawia wartość "open"

 Dodajcie do klasy metody:
 - getInfo - zwraca tekst: `Zadanie: ${title} Data: ${date} Description: ${description}` - wykorzystajcie szablony tekstów i interpolacje
 - close - ustawia status na "close"
 - open - ustawia status na "open"

---
 Stwórzcie klasę **DOMTasks**, która bedzie służyć do tworzenia elementów DOM dla zadania:
 **konstruktor**
 constructor(tasksArray) - otrzymuje tablicę Task-ów

 **metody**
 - createElements - tworzy elelenty w listach .todo i .done - wykorzystuje do tego metodę createElement(task) - pamiętajcie najpierw o usunięciu już istniejących elementów w listach
 - createElement(task) - tworzy pojedynczy element z zadaniem i wstawia go do odpowiedniej listy .done lub .todo - struktura elementów jest pokazana w pliku html
 - addOpenEvent - dodaje zdarzenie do otwierania zadań - zmiana statusu na open oraz przeniesienie do odpowiedniej listy
 - addCloseEvent - dodaje zdarzenie do zamykania zadań - zmiana statusu na close oraz przeniesienie do odpowiedniej listy
 - addNewEvent(taskArray) - dodaje zdarzenie do formularza - po jego zatwierdznieu jest tworzone nowe zadanie i dodaje do tablicy przekazane przez parametr i wymusza przebudowanie list


 W pliku app.js  stwórzcie tablicę tasks, która będzie wykorzystywana do przechowywania zadań.
 Utwórczie obiekt DOMTasks i wywołajcie odpowiednie metody aby uruchomić funkcjonalność aplikacji.