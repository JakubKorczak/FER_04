/**

<center><a href="lab.dom.modyfikowanie-atrybutow3/index.html">OTWÓRZ STRONĘ W NOWEJ KARCIE</a></center>
---


# Zadanie 1
Zmodyfikujcie listę w następujący sposób:
- dodajcie atrybut data-direction nastawiony na wartość up każdemu elementowi li, który nie ma tego atrybutu.
- nastawcie kolor tła co drugiego elementu listy na zielony.
- nastawcie piątemu elementowi listy klasę big.
- nastawcie co trzeciemu elementowi podkreślenie.

# Zadanie 2
- dodajcie obrazkowi znajdującemu się w sekcji main klasę left
- ustawcie obrazkowi za pomocą styli inline szerokość 200px
- dodajcie style inline odpowiedniemu elementowi aby wyczyścić opływanie i stopka była pod spodem
- ustawcie wszystkie elementy w nawigacji aby były obok siebie

# Zadanie 3
Na stronie są trzy obrazki z ikonami najpopularniejszych przeglądarek internetowych.
Niestety zarówno obrazki, jak i linki prowadzące do ich stron zawierają błędy.
Napiszcie kod JavaScript, który wprowadzi następujące zmiany:
- Poprawi elementy tak, żeby do każdej przeglądarki było podpięte odpowiednie logo (obrazek jest nastawiany za pomocą background-image).
- Poprawi linki tak, żeby każdy miał poprawny opis i atrybut href.
- Poprawi szerokość elementu o klasie chrome (powinno być 100px).
- Podejrzyjcie w konsoli, jak wygląda kod CSS dopisany przez JavaScript.
- Zastanówcie się, dlaczego dopisywany jest w tym miejscu.

 Napiszcie odpowiedź na to pytanie w komentarzu do zadania.

# Zadanie 4
Na stronie jest lista, w której wpiszcie swoje imię i nazwisko, ulubiony kolor i potrawę.
- wyszukajcie wszystkie elementy span i zapiszcie je do odpowiednich zmiennych.
- za pomocą innerHTML wypełnijcie w nich odpowiednie informacje.

# Zadanie 5
Na stronie jest proste menu.
Zarówno kod HTML, jak i CSS jest już do niego przygotowany.
Niestety ktoś zapomniał dodać odpowiednie klasy do odpowiednich elementów.

- wyszukajcie element ul i dodajcie mu klasę menu.
- Wyszukajcie wszystkie elementy li i dodajcie im klasę menuElement (użyjcie do tego pętli).
- uważajcie, żeby nie wykasować klasy selected.
- zauważcie, że jeden z elementów ma czerwony kolor tekstu - jest to spowodowane tym, że ma klasę error - zabierzcie mu ją (najlepiej, jeżeli zabierzesz tę klasę wszystkim elementom, które ją mają).

# Zadanie 6
Dodajcie do każdego elementu listy atrybut data-id przyjmujący kolejne liczby całkowite (zaczynając od 1).
Rozwiążcie to zadanie na dwa sposoby:
- używając datasetu.
- żywając metody setAttribute.
 */

console.log("=== EX1 ===");

let ex1El = document.querySelector(".ex1");
ex1El.querySelectorAll("li:not([data-direction])").forEach( el => el.dataset.direction = "up");
ex1El.querySelectorAll("li:nth-of-type(2n)").forEach( el => el.style.backgroundColor = "green");
ex1El.querySelectorAll("li:nth-of-type(5n)").forEach( el => el.classList.add("big"));
ex1El.querySelectorAll("li:nth-of-type(3n)").forEach( el => el.style.textDecoration = "underline");

console.log("=== EX2 ===");
let imageEl = document.querySelector(".content img");
imageEl.classList.add("left");
imageEl.style.width = "200px";

let footerEl = document.querySelector("footer");
footerEl.style.clear = "both";

let navLiElems = document.querySelectorAll("nav li");
navLiElems.forEach( el => el.style.display = "inline-block" );

console.log("=== EX3 ===");

let ex3El = document.querySelector(".ex3");

let chromeImgEl = ex3El.querySelector(".chrome");
let chromeLinkEl = ex3El.querySelector(".chrome + a");

chromeImgEl.style.width = "100px";
chromeLinkEl.innerText = "Chrome";

let edgeImgEl = ex3El.querySelector(".edge");
let edgeLinkEl = ex3El.querySelector(".edge + a");

edgeImgEl.style.backgroundImage = "url(images/edge.png)";
edgeLinkEl.setAttribute("href","https://edge.microsoft.com");

let ffImgEl = ex3El.querySelector(".firefox");
let ffLinkEl = ex3El.querySelector(".firefox + a");

ffImgEl.style.backgroundImage = "url(images/firefox.png)";
ffLinkEl.innerText = "Firefox";
ffLinkEl.setAttribute("href","https://firefox.com");

console.log("=== EX4 ===");

let nameEl = document.getElementById("name");
nameEl.innerHTML = "Grzegorz Brzęczyszczykiewicz";

let colorEl = document.getElementById("fav_color");
colorEl.innerHTML = "Niebieski";

let mealEl = document.getElementById("fav_meal");
mealEl.innerHTML = "Bigos";

console.log("=== EX5 ===");

let ex5El = document.querySelector(".ex5");

ex5El.querySelector("ul").classList.add("menu");
ex5El.querySelectorAll("li").forEach( el => el.classList.add("menuElement"));
ex5El.querySelectorAll(".error").forEach( el => el.classList.remove("error") );

console.log("=== EX6 ===");
// Dodajcie do każdego elementu listy atrybut data-id przyjmujący kolejne liczby całkowite (zaczynając od 1).
// Rozwiążcie to zadanie na dwa sposoby:
//     - używając datasetu.
// - żywając metody setAttribute.

let ex6El = document.querySelector(".ex6");
let counter = 1;
ex6El.querySelectorAll("li").forEach( el => el.dataset.id = counter++);
// ex6El.querySelectorAll("li").forEach( el => el.setAttribute("data-id", counter++));