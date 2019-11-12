/**

 ---
 <center><a href="lab.es6.promises/task1.html">Otwórz stronę z zadaniem w nowej karcie</a></center>

 W pliku z zadaniem mamy zdefiniowaną metodę, getNames, która zwraca wykorzystuje Promise i zwraca tablicę imion.

 Wykorzystajcie tę metodę i po jej wykonaniu wstawcie imiona do listy ul.

 */


document.addEventListener("DOMContentLoaded", function(){

    let list = document.querySelector("ul");

    getNames()
        .then( data => {
            return JSON.parse(data);
        })
        .then( names => {
            names.forEach( name => {
                let newLi = document.createElement("li");
                newLi.innerText = name;
                list.appendChild(newLi);
            })
        })


});

let getNames = function(){
    let names = JSON.stringify(["Jan", "Piotr", "Anna"]);

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve( names);
        }, 2000);
    });
};