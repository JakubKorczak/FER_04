# Zadanie


Walidacja karty kredytowej.

Zadanie polega na walidacji kart kredytowych wpisywanych w formularz na stronie.
Walidacja ma następować w czasie rzeczywistym (czyli po wprowadzeniu każdej cyfry).

Nazwa karty ma być wpisana w element o id ```type```, jak tylko jest możliwe jej ustalenie, poprawność karty ma być pokazana po wpisaniu odpowiedniej liczby cyfr (np. ustawić obramowanie inputa na zielono).


##### Zasady rozpoznawania kart:
1. Karty Visa zaczynają się od cyfry 4.
1. Karty Mastercard zaczynają się od cyfry 5.
1. Karty American Express zaczynają się od cyfry 3. Następną cyfrą musi być 4 lub 7.

##### Zasady walidacji kart:
1. Karty Visa mają od 13 do 16 cyfr.
1. Karty Mastercard mają równo 16 cyfr.
1. Karty American Express mają równo 15 cyfr.

Zasady walidacji kart są uproszczone (nie powinniście ich stosować w rzeczywistych projektach).
Jeżeli chcecie poznać prawdziwe zasady walidacji kart kredytowych, to są one opisane tutaj:
https://en.wikipedia.org/wiki/Bank_card_number
https://en.wikipedia.org/wiki/Luhn_algorithm