
let counter = 1;

function counting(){
    console.log(counter);
    counter++;
    if(counter>100){
        clearInterval(this);
    }
}

let interval = setInterval( counting, 10);

