/**

 ---
 <center><a href="lab.es6.classes/index.html">Otwórzcie stronę z zadaniem w nowej karcie</a></center>


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

  */

class MenuGenerator{
    constructor(domElement, items){
        this.items = items;
        this.domEl = domElement;
    }

    getType(){
        return this.type;
    }

    showItems(){
        this.items.forEach( el => console.log( el ));
    }

    insert(){
        this.domEl.appendChild( this.createMenu() );
    }

    createMenu(){
        let ulEl = document.createElement("ul");
        this.items.forEach( el => {
            let liEl = document.createElement("li");
            let aEl = document.createElement("a");
            aEl.setAttribute("href", el.link);
            aEl.innerText = el.title;
            liEl.appendChild(aEl);
            ulEl.appendChild(liEl);
        });
        return ulEl;
    }
}

class HorizontalMenuGenerator extends  MenuGenerator{
    createMenu() {
        let menuEl = super.createMenu();
        menuEl.classList.add("horizontal");
        return menuEl;
    }
}

class VerticalMenuGenerator extends  MenuGenerator{
    createMenu() {
        let menuEl = super.createMenu();
        menuEl.classList.add("vertical");
        return menuEl;
    }
}

document.addEventListener("DOMContentLoaded", function(){
    console.log("test");
    let hMenuGenetator = new HorizontalMenuGenerator(document.querySelector("header"), [{title:'start', link:'/start'}, {title:'about', link:'/about'}]);
    let vMenuGenetator = new VerticalMenuGenerator(document.querySelector("header"), [{title:'start', link:'/start'}, {title:'about', link:'/about'}]);

    hMenuGenetator.showItems();
    vMenuGenetator.showItems();

    hMenuGenetator.insert();
    vMenuGenetator.insert();

});