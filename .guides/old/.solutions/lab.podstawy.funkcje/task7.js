
function numbers(n){
    for(let i=0; i<=n; i++){
        if(i%2 == 0){
            console.log(i+" - parzysta");
        }else{
            console.log(i+" - nieparzysta");
        }
    }
}



//Nie modyfikujcie poniższego kodu
module.exports = {numbers};
