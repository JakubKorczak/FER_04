
function getAnimal(){
    return {
             name: "Mruczek",
             age: 10,
             getVoice: () => "miau miau"
        }
}

let {name: catName, getVoice: catVoice} = getAnimal();

console.log(catName);
console.log(catVoice());
