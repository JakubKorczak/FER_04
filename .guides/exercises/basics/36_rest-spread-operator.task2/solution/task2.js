
function getAverage(){
    return [...arguments].reduce( (p,c) => p+c, 0) / arguments.length;
}

console.log(getAverage(2,3,2,4,5,2));