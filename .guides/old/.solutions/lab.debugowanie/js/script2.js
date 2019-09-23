function getRandomNumber(min, max){
   return Math.round((Math.random() * (max-min)) + min );
}

let random = getRandomNumber(1,5);
while ( random != 5 ){
    random = getRandomNumber(1,5);
    console.log("Hello");
}
