# Zadanie

Wyobraźcie sobie, że tworzycie serwis internetowy, na którym będą dwa rodzaje menu: poziome i pionowe.  
Stwórzcie klasę abstrakcyjną np. **MenuGenerator**, na bazie której będziemy tworzyć nowe rodzaje menu.

Podczas tworzenia menu, do konstruktora przekażcie element do którega ma być wstawione meny oraz tablicę z elementami menu (przykład wywołania poniżej).

Stwórzcie również dwie metody w klasie bazowej:
- getType() - zwracająca typ menu
- showItems() - wypisującą elementy menu
- insert() - wstawiająca utworzony obiekt do elementu DOM
- createMenu() - tworzącą podstawową strukturę menu


```js
let hMenuGenetator = new HorizontalMenuGenerator(domElement, [{title:'start', link:'/start}, {title:'about', link:'/about'}]);
let vMenuGenetator = new VerticalMenuGenerator(domElement, [{title:'start', link:'/start}, {title:'about', link:'/about'}]);
```

**Hint**
Struktura dla nawigacji:
```html
<ul> //tutaj ustawcie odpowiednią klasę
    <li><a href="/link">Link</a></li>
    <li><a href="/link">Link</a></li>
    <li><a href="/link">Link</a></li>
</ul>
```
