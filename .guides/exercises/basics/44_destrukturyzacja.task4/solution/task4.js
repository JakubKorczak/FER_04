
function generateRandomNumbers(){
    let arr = [];
    for(let i=1; i<=6; i++){
        arr.push( Math.round( Math.random() * 5) );
    }
    return arr;
}

let [first, ,third] = generateRandomNumbers();
console.log(first);
console.log(third);

