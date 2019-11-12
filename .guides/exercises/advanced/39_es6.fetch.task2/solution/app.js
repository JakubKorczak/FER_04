/**

 ---
 <center><a href="lab.es6.fetch/task1.html">Otwórz stronę z zadaniem w nowej karcie</a></center>


 Pod adresem https://holidayapi.com/ jest przechowywana baza świąt państwowych różnych krajów.
 Aby z niej skorzystać trzeba wygenerować swój klucz API - wejdźcie na stronę i wygeneruj swój klucz.

 Za pomocą funkcji fetch() wczytajcie do elementu ul wszystkie daty świąt (jako elementy li).
 Aby poprawnie wczytać dane w funkcji fetch() trzeba przekazać wymagane parametry, o których mowa na stronie.

 **Uwaga - daty mogą być tylko historyczne (nie bieżący rok).**

 Każdą nazwę święta wczytajcie do elementu li jako element h3.holiday-name, a jego datę wczytaj do elementu li jako element date.holiday-date.

 **Podpowiedzi:**
 Wczytajcie dane i zobaczcie w konsoli jak wyglądają, pozwoli Wam to ustalić czego należy użyć, aby dostać się do nazw i dat świąt.
 Możeszcie tutaj wykorzystać też zakładkę Network.


 */

document.addEventListener("DOMContentLoaded", function(){

    let ul = document.querySelector("#holidayDates");
    let holidayUrl = 'https://holidayapi.com/v1/holidays?key=dab84cfe-7e15-4a0b-8fd7-e7e625f1b696&country=PL&year=2018';

    loadHolidays(holidayUrl, ul);

});

function instertHolidays(days, listElement) {
    //Użyjcie sposobu na pobranie wartości z obiektu (nie kluczy) np. pętla for in
    for(date in days){
        let holidays = days[date];
        holidays.forEach( h => {
            let newLi = document.createElement("li");
            let h3 = document.createElement("h3");
            h3.classList.add("holiday-name");
            h3.innerText = h.name;
            let dateEl = document.createElement("date");
            dateEl.classList.add("holiday-date");
            dateEl.innerText = h.date;
            newLi.appendChild(h3);
            newLi.appendChild(dateEl);
            listElement.appendChild(newLi);
        })
    }
}

function loadHolidays(url, listElement) {
    //tutaj wykonajcie połączenie fetch-em
    fetch(url)
        .then( resp => {
            if(resp.ok){
                return resp.json();
            }else{
                throw new Error('Błąd sieci!');
            }
        })
        .then( data => {
            instertHolidays(data.holidays, listElement);
        })
}
