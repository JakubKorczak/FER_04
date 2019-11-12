
function getLastNumbers(quantity, arr) {
    let debug = arguments[arguments.length-1];
    if(debug) console.log(arr);

    let newArr = [];

    if(typeof quantity == "number" && arr && arr.length>0 && quantity <= arr.length){
        for(let i = arr.length-quantity; i<arr.length; i++){
            newArr.push(arr[i]);
        }
    }

    return newArr;
}


//Nie modyfikujcie niżej kodu
module.exports = {getLastNumbers};
