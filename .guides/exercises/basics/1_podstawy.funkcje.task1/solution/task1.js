function getNumber(number, arr){
    for(let i=0; i<arr.length; i++){
        if(arr[i] == number){
            return true;
        }
    }
    return false;
}



//Nie modyfikujcie niżej kodu
module.exports = {getNumber};
