
function getMissingElement(arr) {
    let debug = arguments[arguments.length-1];
    if(debug) console.log(arr);

    if (arr.length == 0 || arr.length == 1)
        return null;

    for (let i = 0; i < arr.length - 1; i++) {
        if(debug) console.log(arr[i], " ",arr[i+1]);
        if (arr[i] + 1 != arr[i + 1]) {
            if(debug) console.log(i);
            return i;
        }
    }

    return null;
}


//Nie modyfikujcie niżej kodu
module.exports = {getMissingElement};
