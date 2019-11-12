/**

 Uruchomcie stronę przygotowaną dla zadania.
 <center><a href="lab.dom.eventy2/task1.html" target="_blank">OTWÓRZ STRONĘ W NOWEJ KARCIE</a></center>

 Na stronie znajdują się zagnieżdżone elementy.
 Do każdego dopisane są eventy.
 Użyjcie metod stopPropagation i stopImmediatePropagation w taki sposób, aby:
 - wywoływały się eventy dla elementu pierwszego i drugiego, a nie wywoływał się event dla elementu trzeciego.
 - wywoływały się wszystkie eventy dla elementu czwartego i pierwszy event dla elementu piątego.

 */

document.querySelector('#element1').addEventListener('click', function(e){
    console.log('Event in #element1 fired!');
});

document.querySelector('#element2').addEventListener('click', function(e){
    e.stopPropagation();
    console.log('Event1 in #element2 fired!');
});

document.querySelector('#element2').addEventListener('click', function(e){
    e.stopPropagation();
    console.log('Event2 in #element2 fired!');
});

document.querySelector('#element3').addEventListener('click', function(e){
    console.log('Event in #element3 fired!');
});

document.querySelector('#element4').addEventListener('click', function(e){
    console.log('Event in #element4 fired!');
});

document.querySelector('#element5').addEventListener('click', function(e){
    e.stopImmediatePropagation();
    console.log('Event1 in #element5 fired!');
});

document.querySelector('#element5').addEventListener('click', function(e){
    console.log('Event2 in #element5 fired!');
});