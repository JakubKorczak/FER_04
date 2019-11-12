
function sumTwo(num1, num2){
    return num1 + num2;
}

function sumThree(num1, num2, num3){
    return  sumTwo(sumTwo(num1, num2),num3);
}



//Nie modyfikujcie poniższego kodu
module.exports = {sumTwo, sumThree};
