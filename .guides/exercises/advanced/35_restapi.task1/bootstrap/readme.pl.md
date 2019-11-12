# Zadanie

---
Rozszeżymy warsztat "Time tracker" o zapis danych, tak abyśmy po każdym odświeżeniu stony nie tracili danych.

W tym celu wykorzystamy JSON-a i local storage przeglądarki.


# localStorage

Własność **localStorage** pozwala na dostęp do lokalnego obiektu Storage, który możemy wykorzystać do przechowywania danych w formacie tekstowym.

**Zapisywanie**
```js
localStorage.setItem('myCat', 'Tom');
```

**Odczytywanie**
```js
localStorage.getItem('myCat');
```


Jak widzimy są to pary klucz -> wartość.

---
Przejdźcie do warsztatu i sprawcie aby aplikacja korzystała z localStorage do przechowaniu zadań w formacie JSON pod kluczem **tasks**

Przy uruchomieniu aplikacji:
- sprawdza czy są dane w localStorage, jak tak to je odczytuje, parsuje JSON-a i przypisuje do zmiennej tasks
- przy każdym zapisie zadania / operacji, aktulizuje JSON-a w localStorage