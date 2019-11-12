# Postępowanie w trakcie warsztatu

Wspólnie z kursantami przygotowujemy definicje konstruktorów wraz z definicjami metod, ale bez ich implementacji:

Należy szczególnie zwrócić uwagę na możliwość odwoływania się do powiązanego obiektu:
np. 
```
let allOwnerPokemons = pokemon.owner.pokemons;
let pokemons = owner.pokemons.filter ( p => .... )
```

Jest to bardzo ważne aby zrozumieli, że dzięki referencjom przechowywanym w atrybutach obiektów, mogą przechodzić do kolejnych, a z nich przez ich atrybuty do kolejnych obiektów.