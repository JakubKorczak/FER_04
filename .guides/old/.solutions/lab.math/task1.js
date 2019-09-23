
//Piszcie kod pod tym komentarzem.

function calculator(num1, num2, operation){
    switch (operation) {
        case "^": return Math.pow(num1, num2);
        case "sq": return Math.pow(num1,1/num2);
        case "dec":
                if (num2 == 0){
                    return Math.round(num1);
                }
                let precision = 1;
                for (let i=1; i<=num2; i++){
                    precision *= 10;
                }
                return Math.round(num1*precision)/precision;
    }
}



//Nie modyfikujcie niżej kodu
module.exports = {calculator};
