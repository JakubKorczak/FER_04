let PokemonOwners = function (name, surname, pokemon) {
    this.name = name;
    this.surname = surname;
    this.pokemons = [pokemon];

    pokemon.owner = this;

    this.addPokemon = function (pokemon) {
        if (pokemon.owner != null) {
            pokemon.owner.pokemons = pokemon.owner.pokemons.filter(p => p.name != pokemon.name);
        }
        pokemon.owner = this;
        this.pokemons.push(pokemon);
    }

    this.printDetails = function(){
        console.log("Pokemon Owner");
        console.log("name: " + this.name);
        console.log("surname: " + this.surname);
        console.log("pokemons");
        this.pokemons.forEach( p =>{
            console.log("- "+p.name);
        })
    }
}

