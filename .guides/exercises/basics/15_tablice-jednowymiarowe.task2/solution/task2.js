

function multiply(array) {
    if(array.length == 0) return null;

    let result = 1;
    for(let i=0; i<array.length; i++){
        result *= array[i];
    }

    return result;
}





