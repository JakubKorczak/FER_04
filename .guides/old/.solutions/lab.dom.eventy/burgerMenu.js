/**

 Dodajcie do przycisku o klasie $.mobile-menu-btn$ zdarzenie na kliknięciu, które spowoduje pokazanie się / ukrycie elementu nav o klasie mobile, w zależności czy jest ukryte czy pokazane.

 Do ukrywania wykorzystajcie klasę $hide$

 Sprawcie za pomocą JS-a, aby zaraz po załadowaniu strony nawigacja była ukryta.

 Czy jakiś kod się powiela? Spróbujcie tylko raz napisać kod do pokazywania uktywania nawigacji i wykorzystajcie go przy załadowaniu strony jak i przy zdarzeniu.

 ---
 <center><a href="lab.dom.eventy/burgerMenu.html" target="_blank">OTWÓRZ STRONĘ W NOWEJ KARCIE</a></center>

 ---
 Zwróćcie uwagi na klasy, za pomocą których jest ostylowany wygląd.
 Są to klasy z bootstrapa, dzięki któremu możemy bardzo szybko uzyskać bazowy fajny wygląd aplikacji.
 Zobaczcie jak mogą wyglądać listy na stronie: https://getbootstrap.com/docs/4.3/components/list-group/

 */

document.addEventListener("DOMContentLoaded", function(){
    showHideMobileMenu();
    document.querySelector("a.mobile-menu-btn").addEventListener("click", e => {
        e.preventDefault();
        showHideMobileMenu();
    });
});

function showHideMobileMenu(){
        document.querySelector("nav.mobile").classList.toggle("hide");
}