/**
 ---
 <center>
 <a href="lab.dom.eventy/task1.html" target="_blank">
 Uruchomcie stronę przygotowaną dla zadania.
 </a>
 </center>

 Sprawdźcie w konsoli, czy są jakieś błędy.

 Następnie:
 - przenieście tag $<script>$ do sekcji $<head>$. Zobaczcie, co się zmieniło w działaniu skryptu. Spróbujcie to wytłumaczyć.
 - stwórzcie event DOMContentLoaded dla elementu document i przenieście kod do środka tego eventu.

 **Czy poprawiło to sytuację?**
 Przenieście znowu tag <script> na koniec pliku, czy jest jakaś różnica?
*/

let menu = document.querySelector("#menu");
let paragraf = document.querySelector("p");

menu.classList.add("menu");
paragraf.innerHTML = "A to jest paragraf w zadaniu 1";