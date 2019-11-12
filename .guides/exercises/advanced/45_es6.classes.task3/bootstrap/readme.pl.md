# Zadanie


Na Waszej stronie internetowej macie stworzony formularz, który pozwala dodawać różne rodzaje produktów do listy.

W pliku taks6.js macie stworzoną klasę Food - jako klasę abstrakcyjną.  
  
W konstruktorze klasa ustawia nazwę produktu (name), ilość białka (protein), ilość węglowodanów (carbs) oraz ilość tłuszczu (fat) w produkcie, (W gramach).

Napiszcie kod dzięki, któremu po wypełnieniu formularza i kliknięciu przycisku "Dodaj", zostaną wykonane następujące czynności:
- nowy produkt zostanie dodany do listy ul o id products,
- zostanie stworzony nowy obiekt na podstawie odpowiedniej klasy dziedziczącej po Food. To znaczy, jeżeli produkt będzie zawierał powyżej 250 kcal zostanie stworzony jako obiekt klasy FastFood. Jeżeli poniżej 250 kcal zostanie stworzony jako obiekt klasy FatFreeFood.
- dodajcie stworzony obiekt do tablicy foods i wyświetlcie ją w konsoli.

Kalorie możecie obliczyć na podstawie następującego wzoru:
- 1 g białka	dostarcza	4 kcal
- 1 g tłuszczu	dostarcza	9 kcal
- 1 g węglowodanów	dostarcza	4 kcal

Przykład.
Po dodaniu produktu hot_dog i wypełnieniu jego danych odżywczych w formularzu, zostanie stworzony obiekt na bazie klasy Fast_Food np. w następujący sposób:
new FastFood('Hot Dog', 10, 4.2, 26), co po przeliczeniu: 10* 4 + 4.2 * 4 + 9 * 26 daje 280.8 kcal.

Na podstawie formularza stwórzcie kilka obiektów jak poniżej:
```
new FastFood('Fries', 3.4, 41, 15)
new FastFood('Donut', 4.9, 51, 25)
new FatFreeFood('Greek Yogurt', 10, 3.6, 0.4)
```

Napiszcie metodę o nazwie print (w odpowiedniej klasie), która będzie wypisywała informację o produkcie.
Wykorzystajcie ten szablon:

```
${this.name} is ${this.constructor.name} - proteins:${this.protein}, carbs:${this.carbs}, fat:${this.fat} gives ${this.calcCalories()} callories 
```

