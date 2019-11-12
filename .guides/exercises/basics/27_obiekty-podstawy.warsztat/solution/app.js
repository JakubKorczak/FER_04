let wind = new Powers("wind", 100, 70);
let water = new Powers("water", 130, 100);
let fire = new Powers("fire", 100, 90);
let electricity = new Powers("electricity", 110, 115);

let pikaczu = new Pokemon("Pikaczu", [electricity]);
let blastoise = new Pokemon("Blastoise", [water]);

let player1 = new PokemonOwners("Jan", "Nowak", pikaczu);
let player2 = new PokemonOwners("Grzegorz", "Brzęczyszczykiewicz", blastoise);

console.log("======");
player1.printDetails();
player2.printDetails();

console.log("======");
let fight = pikaczu.fight(blastoise);
console.log(`${pikaczu.name} ${fight} with ${blastoise.name}`);

console.log("======");
player1.printDetails();
player2.printDetails();
