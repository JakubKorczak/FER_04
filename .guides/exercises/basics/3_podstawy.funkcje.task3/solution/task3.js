
function factors(number){
    let arr = [];

    for(let i=(number-1); i>0; i--){
        if(number%i == 0){
            arr.push(i);
        }
    }

    return arr;
}



//Nie modyfikujcie niżej kodu
module.exports = {factors};
