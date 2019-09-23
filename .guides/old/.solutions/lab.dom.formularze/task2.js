/**

 ---
 <center><a href="lab.dom.formularze/task2.html" target="_blank">Otwórzcie stronę z zadaniem</a></center>

 Na stronie znajduje się formularz z polem select i trzy obrazki.
 Każdy z obrazków jest przypisany do jednego z wyborów w selekcie.
 Napiszcie kod javaScript w taki sposób, żeby widoczny był tylko ten obrazek, który został wybrany.
 Zmiana obrazka ma następować dopiero po zatwierdzeniu formularza.


 */

document.addEventListener("DOMContentLoaded", function(){
    logoForm();
});

let logoForm = function(){

    let images = document.querySelectorAll("img");
    images.forEach( img => img.style.display = "none");

    let form = document.querySelector("form");

    form.addEventListener("submit", function(e){
        e.preventDefault();

        images.forEach( img => img.style.display = "none");

        let selectValue = this.querySelector("select").value;

        switch(selectValue){
            case "Windows":
                    document.querySelector("img[alt=Windows]").style.display = "block";
                break;
            case "Os X":
                    document.querySelector("img[alt=Apple]").style.display = "block";
                break;
            case "Ubuntu":
                    document.querySelector("img[alt=Ubuntu]").style.display = "block";
                break;
        }
    })


};