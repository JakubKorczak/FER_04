function addTheSameNumbers(number, arr){
    let sum = 0;
    let found = false;

    for(let i=0; i<arr.length; i++){
        if(arr[i] == number){
            sum +=arr[i];
            found = true;
        }
    }

    if(!found) return null;

    return sum;
}



//Nie modyfikujcie niżej kodu
module.exports = {addTheSameNumbers};
